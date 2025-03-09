import { css } from "@emotion/react";
import Typo from "../../Typo/Typo";
import * as Styled from "./style";
import { useNavigate } from "react-router-dom";
import { ICard } from "./types";
import { getFormedDate } from "../../../utils/date";
import EllipsisText from "../../Ellipsis/EllipsisText";
import Tag from "../../Tag/Tag";
import redirectimg from "./assets/redirect.svg";
import { theme } from "../../../styles/theme/theme";

function Card({ logo, bgcolor, ...props }: ICard) {
  const navigate = useNavigate();

  const 공지사항페이지로가기 = () => {
    navigate("/notification");
  };

  const tagContent = [
    getFormedDate(props.createdAt).split(" ")[0],
    "NOTIFICATION",
    "UPDATED",
  ];

  return (
    <Styled.Wrapper>
      <Styled.ImgBox
        onClick={(e: React.MouseEvent) => {
          console.log(e.target, e.currentTarget);
        }}
        css={css`
          background-color: ${bgcolor};
          overflow: hidden;
        `}
      >
        <Styled.Icon src={logo} />
        <Styled.InnerContent>
          <div
            css={css`
              ${theme.flexRow("space-between", "start")}
            `}
          >
            <Styled.InnerTag>{props.part}</Styled.InnerTag>
            <img
              onClick={공지사항페이지로가기}
              width={40}
              height={40}
              src={redirectimg}
            />
          </div>
          <EllipsisText color="white">{props.content}</EllipsisText>
        </Styled.InnerContent>
      </Styled.ImgBox>
      <Styled.TagWrapper>
        {tagContent.map((tag) => (
          <Tag type="main" key={tag}>
            {tag}
          </Tag>
        ))}
      </Styled.TagWrapper>
      <Styled.Title>
        <Typo fontSize="24" weight="600">
          {props.title + "  (LIKELION 13th InHA Univ.)"}
        </Typo>
      </Styled.Title>
    </Styled.Wrapper>
  );
}

export default Card;
