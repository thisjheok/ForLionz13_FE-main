import { css } from "@emotion/react";
import Banner from "../../components/Banner/Banner";
import * as Styled from "./style";
import SideBar from "./components/SideBar/SideBar";
import Typo from "../../components/Typo/Typo";
import { useContext, useState } from "react";
import Checkbox from "./components/Checkbox/Checkbox";
import QnaItem from "../../components/ListItem/QnaIndex/QnaItem";
import Button from "../../components/Button/Button";
import { useLocation, useNavigate } from "react-router-dom";
import { useSelectedData, useTags } from "../../hooks";
import { compare } from "../../utils/date";
import { theme } from "../../styles/theme/theme";
import { ThemeContext } from "../../context/IsDark/IsDark";

function Qna() {
  const [category, setCategory] = useState<number>(0);

  const { data: tags } = useTags();
  const navigate = useNavigate();
  const location = useLocation();

  const title = tags?.find((item) => item.parentTagId === category)?.name;
  const { childTags, data, query, setQuery } = useSelectedData(category);
  const { isDark } = useContext(ThemeContext);

  const sortedByCreatedAt = data?.sort((a, b) => compare(a, b));

  const currentPage = new URLSearchParams(location.search).get("page");

  let paginatedData;
  const contentCntInPage = 4;

  if (currentPage === null) {
    paginatedData = sortedByCreatedAt?.slice(0, contentCntInPage);
  } else if (currentPage) {
    paginatedData = sortedByCreatedAt?.slice(
      (+currentPage - 1) * contentCntInPage,
      +currentPage * contentCntInPage
    );
  }

  if (!tags || !data) {
    return;
  }

  const pageCnt = Math.ceil(data?.length / 4);
  const pageObj = new Array(pageCnt).fill(0).map((_, i) => {
    return { id: i + 1, index: i + 1 };
  });

  return (
    <Styled.Wrapper>
      <div
        css={css`
          width: 100%;
        `}
      >
        <Banner type="Q&A" logowidth="450" logoheight="450" />
      </div>
      <SideBar
        tags={tags}
        currentCategory={category}
        setCategory={setCategory}
      />
      <Styled.Title>
        <Typo weight="600" fontSize="34">
          {title}
        </Typo>
      </Styled.Title>
      <Styled.TagsAndBtnWrapper>
        <Styled.BoxContainer>
          {childTags?.map((item) => (
            <Checkbox
              key={item.childTagId}
              isDark={isDark}
              id={item.childTagId}
              values={query}
              setClickedValue={setQuery}
              text={item.name}
            />
          ))}
        </Styled.BoxContainer>
        <Button onClick={() => navigate("upload")} color="darkblue">
          작성하기
        </Button>
      </Styled.TagsAndBtnWrapper>
      <Styled.ItemsContainer>
        {sortedByCreatedAt?.length === 0 ? (
          <p
            css={css`
              padding-top: 20px;
              ${theme.flexRow("center")}
            `}
          >
            <Typo fontSize="16" color="darkgray">
              작성된 질문이 없습니다
            </Typo>
          </p>
        ) : (
          paginatedData?.map((item) => (
            <QnaItem
              isDark={isDark}
              key={item.questionId}
              onClick={() => {
                navigate(`${item.questionId}`);
              }}
              title={item.title}
              date={item.createdAt}
              url={item.memberImageUrl}
              name={item.name}
              tags={item.childTags}
              commentCnt={item.commentCount}
              likes={item.likes}
            />
          ))
        )}
      </Styled.ItemsContainer>
      <Styled.PageBtnWrapper>
        {pageObj.map((page, index) => (
          <Button
            key={page.id}
            onClick={() => navigate(`/qna?page=${page.index}`)}
            color={index + 1 === +(currentPage ?? 1) ? "white" : "black"}
            width="40px"
            padding="5px 0px"
            bgcolor={index + 1 === +(currentPage ?? 1) ? "darkblue" : "white"}
            bordercolor={
              index + 1 === +(currentPage ?? 1) ? "darkblue" : "lightgray"
            }
            borderwidth="1.5px"
          >
            {page.index}
          </Button>
        ))}
      </Styled.PageBtnWrapper>
    </Styled.Wrapper>
  );
}

export default Qna;
