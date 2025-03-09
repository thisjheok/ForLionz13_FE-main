import Banner from "../../components/Banner/Banner";
import MainAndSubtitle from "../../components/MainAndSubtitle";
import { SUB_TEXT } from "../../constants/text";
import * as Styled from "./style";
import SubmitItem from "../../components/ListItem/As-submitIndex/SubmitItem";
import Margin from "./components/ContentGap/ContentGap";
import CurrentSubmit from "./components/CurrentSubmittedText/CurrentSubmitted";
import AssignStatus from "./components/AssignStatus/AssignStatus";
import AssignForm from "./components/AssignForm/AssignForm";
import RecentUploader from "./components/RecentUploader/RecentUploader";
import { useParams } from "react-router-dom";
import Card from "../../components/Card/RecentUploadedCard";
import { useContext, useEffect, useState } from "react";
import { useOwnSubmission, useSubmittedAssignments } from "../../hooks";
import { ERROR } from "../../constants/message";
import { getMySubmission } from "../../api/assignment";
import { compare } from "../../utils/date";
import { ThemeContext } from "../../context/IsDark/IsDark";

export const fixedProps = {
  fontsizes: ["30", "14"],
  gap: "4",
};

function HwSubmit() {
  const { id } = useParams();
  if (!id) throw new Error(ERROR.ROUTE_NO_PARAM);

  const isStaffUser = localStorage.getItem("part") === "STAFF";
  const { isDark } = useContext(ThemeContext);

  const getUserSubmit = async () => {
    if (isStaffUser) {
      setFormStatus(false);
      return;
    }

    await getMySubmission(+id)
      .then((res) => {
        setFormStatus(res.data !== null);
      })
      .catch((err) => {
        console.log(err);
        throw new Error(ERROR.MY_ASSIGNMENT);
      });
  };

  const {
    data: mySubmission,
    error,
    reFetch: mySubmitUpdate,
  } = useOwnSubmission(+id);

  if (error === "rejected") throw new Error(ERROR.ID_ASSIGNMENT);

  const { data: submittedData } = useSubmittedAssignments(+id);
  const [isSubmitted, setFormStatus] = useState<boolean>(false);

  useEffect(() => {
    getUserSubmit();
  }, []);

  const handleUpdate = () => {
    mySubmitUpdate();
  };

  if (!mySubmission) return;

  const recentSubmitted = submittedData
    ?.concat()
    ?.sort((a, b) => compare(a, b));

  return (
    <Styled.Wrapper>
      <Banner type="HW_SUBMIT" logowidth="500" logoheight="500" />
      <RecentUploader cnt={recentSubmitted?.length || 0}>
        {recentSubmitted?.map((item) => (
          <Card
            key={item.assignmentId}
            isDark={isDark}
            cnt={recentSubmitted?.length}
            name={item.memberName}
            uid={item.memberId}
            content={item.description}
            link={item.assignmentLink}
          />
        ))}
      </RecentUploader>
      <Margin gap="100" />
      {isSubmitted ? (
        <AssignStatus
          isDark={isDark}
          link={mySubmission?.assignmentLink}
          description={mySubmission?.description}
          createdAt={mySubmission?.createdAt}
          id={id}
          onModify={setFormStatus}
        />
      ) : (
        <AssignForm
          description={mySubmission?.description}
          assignmentLink={mySubmission?.assignmentLink}
          id={id}
          onSubmit={setFormStatus}
          refetch={handleUpdate}
        />
      )}

      <Margin gap="80" />
      <div css={Styled.AlignStyle}>
        <Styled.OtherHwWrapper>
          <MainAndSubtitle
            main="과제 제출 목록"
            sub={SUB_TEXT.HW_OTHER}
            {...fixedProps}
          />

          <CurrentSubmit count={submittedData?.length || 0} />
        </Styled.OtherHwWrapper>
        <Styled.List>
          {submittedData?.map((item, index) => (
            <SubmitItem
              key={item.id}
              index={index}
              id={item.memberId}
              isDark={isDark}
              link={item.assignmentLink}
              name={item.memberName}
              date={item.createdAt}
              description={item.description}
            />
          ))}
        </Styled.List>
      </div>
    </Styled.Wrapper>
  );
}

export default HwSubmit;
