import { Link, useNavigate, useParams } from "react-router-dom";
import { useGetAssignmentById } from "../../../hooks";
import { ERROR } from "../../../constants/message";
import Typo from "../../../components/Typo/Typo";
import AdminModifyBtn from "../../../components/Button/AdminModifyBtn.tsx";
import { getFormedDate } from "../../../utils/date.ts";
import Deadline from "./components/Deadline";
import * as Styled from "./style.ts";
import { css } from "@emotion/react";
import { theme } from "../../../styles/theme/theme";
import { PART_COLOR } from "../../../constants/partcolor";
import GithubLogo from "../../../assets/icons/github/img_dark.svg?react";
import NotionLogo from "../../../assets/icons/notion/notion.svg?react";
import Button from "../../../components/Button/Button.tsx";
import Tag from "../../../components/Tag/Tag.tsx";
import { useContext } from "react";
import { ThemeContext } from "../../../context/IsDark/IsDark.tsx";

function Detail() {
  const { id } = useParams();
  const uid = localStorage.getItem("id");
  const navigate = useNavigate();

  if (!uid) throw new Error(ERROR.NO_ID);
  if (!id) throw new Error(ERROR.ROUTE_NO_PARAM);
  const { data } = useGetAssignmentById(+id);
  const { isDark } = useContext(ThemeContext);

  if (!data) return;

  return (
    <Styled.PageWrapper>
      <div
        css={css`
          ${theme.flexColumn("", "", 16)}
          margin-bottom: 30px;
        `}
      >
        <div>
          <Styled.Title>
            <Typo fontSize="48" weight="600">
              {data?.title}
            </Typo>
          </Styled.Title>
        </div>
        <div
          css={css`
            ${theme.flexRow("", "center", 10)}
          `}
        >
          <Styled.Badge
            css={css`
              background-color: ${theme.color[
                PART_COLOR[data?.part.toLowerCase()]
              ]};
            `}
          >
            {data?.part.toUpperCase()}
          </Styled.Badge>
          <p>
            <Typo fontSize="14" color="darkgray">
              작성일: {getFormedDate(data?.createdAt)}
            </Typo>
          </p>
          <AdminModifyBtn type="assignment" uid={uid} id={id} />
        </div>
        <Styled.TagWrapper>
          {data?.tags.map((item) => (
            <Tag type="other" key={item}>
              {item}
            </Tag>
          ))}
        </Styled.TagWrapper>
        <div
          css={css`
            ${theme.flexRow("space-between", "center")}
            margin-top: 10px;
          `}
        >
          <Styled.AssignmentLink>
            {id === "51" || data?.part === "BE" ? (
              <NotionLogo
                width={40}
                height={40}
                fill={isDark ? "white" : "black"}
              />
            ) : (
              <GithubLogo
                width={50}
                height={50}
                fill={isDark ? "white" : "black"}
              />
            )}
            <Link to={data?.githubLink}>
              <Typo color="darkblue">
                {id === "51" || data?.part === "BE"
                  ? "Notion Link"
                  : "Github Link"}
              </Typo>
            </Link>
          </Styled.AssignmentLink>
          <Deadline isModal={false} expireAt={data?.expireAt} />
        </div>
      </div>
      <div
        css={css`
          min-height: 40vh;
        `}
      >
        <Styled.Content>
          <Typo weight="400">{data?.content}</Typo>
        </Styled.Content>
      </div>
      <div
        css={css`
          place-self: center;
          margin-top: 20px;
        `}
      >
        <Button
          color="white"
          bgcolor="darkblue"
          padding="5px 20px"
          onClick={() => navigate(`/homework-submit/${id}`)}
        >
          제출하러 가기
        </Button>
      </div>
    </Styled.PageWrapper>
  );
}

export default Detail;
