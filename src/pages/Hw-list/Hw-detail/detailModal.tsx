import Typo from "../../../components/Typo/Typo";
import { Link, useNavigate } from "react-router-dom";
import * as Styled from "./style";
import { css } from "@emotion/react";
import { PART_COLOR } from "../../../constants/partcolor";
import Button from "../../../components/Button/Button";
import { useGetAssignmentById } from "../../../hooks";
import { getFormedDate } from "../../../utils/date.ts";
import Deadline from "./components/Deadline";
import { theme } from "../../../styles/theme/theme.ts";
import AdminModifyBtn from "../../../components/Button/AdminModifyBtn.tsx";
import { ERROR } from "../../../constants/message.ts";
import GithubLogo from "../../../assets/icons/github/img_dark.svg?react";
import NotionLogo from "../../../assets/icons/notion/notion.svg?react";
import Tag from "../../../components/Tag/Tag.tsx";

interface IHwDetail {
  clickedId: number;
  isDark: boolean;
}

function Hwdetail({ clickedId, isDark }: IHwDetail) {
  const { data, error } = useGetAssignmentById(clickedId);
  const uid = localStorage.getItem("id");
  const navigate = useNavigate();

  if (error === "rejected") throw new Error(ERROR.ID_ASSIGNMENT);
  if (!data) return;

  const { content, title, createdAt, expireAt, tags, part, id } = data;

  console.log(data);

  return (
    <>
      <div
        css={css`
          ${theme.flexRow("space-between", "", 16)}
        `}
      >
        <Styled.MainWrapper>
          <Styled.Title>
            <Typo fontSize="44" weight="600">
              {title}
            </Typo>
          </Styled.Title>
          <Styled.Wrapper>
            <Styled.Badge
              css={css`
                background-color: ${theme.color[
                  PART_COLOR[part.toLowerCase()]
                ]};
              `}
            >
              {part.toUpperCase()}
            </Styled.Badge>
            <Styled.Date>
              <Typo fontSize="14" color="darkgray">
                작성일: {getFormedDate(createdAt)}
              </Typo>
            </Styled.Date>
            <AdminModifyBtn
              type="assignment"
              uid={uid + ""}
              id={clickedId + ""}
            />
          </Styled.Wrapper>
          <Styled.TagWrapper>
            {tags.map((item) => (
              <Tag type="other" key={item}>
                {item}
              </Tag>
            ))}
          </Styled.TagWrapper>
        </Styled.MainWrapper>
        <div
          css={css`
            ${theme.flexColumn("", "end", 16)}
          `}
        >
          <Deadline isModal={true} expireAt={expireAt} />
          <Styled.AssignmentLink>
            {clickedId === 51 || part === "BE" ? (
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
            <Link to={data?.githubLink} target="_blank">
              <Typo color="darkblue">
                {clickedId === 51 || part === "BE"
                  ? "Notion Link"
                  : "Github Link"}
              </Typo>
            </Link>
          </Styled.AssignmentLink>
        </div>
      </div>
      <Styled.ContentWrapper>
        <Styled.Content>
          <Typo weight="400">{content}</Typo>
        </Styled.Content>
      </Styled.ContentWrapper>
      <div
        css={css`
          place-self: center;
          position: relative;
          top: 40px;
        `}
      >
        <Button
          onClick={() =>
            navigate(`/homework-submit/${id}`, {
              state: {
                history: "detail",
              },
            })
          }
          bgcolor="darkblue"
          color="white"
          padding="8px 24px"
        >
          제출하러 가기
        </Button>
      </div>
    </>
  );
}

export default Hwdetail;
