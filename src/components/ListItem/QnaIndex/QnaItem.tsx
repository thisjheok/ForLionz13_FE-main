import User from "../../Profile/Profile";
import * as Styled from "./style";
import Typo from "../../Typo/Typo";
import { css } from "@emotion/react";
import { getFormedDate } from "../../../utils/date";
import { theme } from "../../../styles/theme/theme";
import Tag from "../../Tag/Tag";
import EllipsisText from "../../Ellipsis/EllipsisText";
import Likes from "../../../assets/icons/likes/Like.svg?react";

interface IItem {
  title: string;
  date: string;
  url: string;
  name: string;
  onClick: () => void;
  tags: string[];
  commentCnt: number;
  isDark: boolean;
  likes: number;
}

function QnaItem({
  onClick,
  title,
  date,
  url,
  name,
  tags,
  commentCnt,
  isDark,
  likes,
}: IItem) {
  return (
    <Styled.Container
      css={css`
        border: 1px solid
          ${isDark ? theme.color.darkgray : theme.color.lightgray};
      `}
      onClick={onClick}
    >
      <div
        css={css`
          ${theme.flexRow("space-between", "end")}
        `}
      >
        <Styled.SpaceBetweenWrapper>
          <User url={url} size="60" />
          <div>
            <EllipsisText color={isDark ? "white" : "black"} lineHeight={1.2}>
              <Typo weight="600">{title}</Typo>
            </EllipsisText>
            <Styled.Writer>
              <Typo color="darkgray" fontSize="16">
                {name}
              </Typo>
            </Styled.Writer>
          </div>
        </Styled.SpaceBetweenWrapper>
        <div
          css={css`
            ${theme.flexColumn("", "end", 4)}
          `}
        >
          <Styled.CommentCnt>
            <Typo color="darkblue" fontSize="18">
              {commentCnt}&nbsp;
            </Typo>
            <Typo fontSize="16">개의 댓글</Typo>
          </Styled.CommentCnt>
          <Styled.LikeCnt>
            <Likes fill={theme.color.pink} width={16} />
            <Typo>{likes}</Typo>
          </Styled.LikeCnt>
        </div>
      </div>
      <Styled.BottomRow>
        <Styled.TagWrapper>
          {tags.map((item) => (
            <Tag type="other" key={item}>
              {item}
            </Tag>
          ))}
        </Styled.TagWrapper>
        <Styled.Date>
          <Typo color="darkgray" fontSize="14">
            작성일: {getFormedDate(date)}
          </Typo>
        </Styled.Date>
      </Styled.BottomRow>
    </Styled.Container>
  );
}

export default QnaItem;
