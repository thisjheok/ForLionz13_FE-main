import Typo from "../../Typo/Typo";
import Chat from "../../../assets/icons/comments/chat.svg?react";
import Like from "../../../assets/icons/likes/Like.svg?react";
import { css } from "@emotion/react";
import { theme } from "../../../styles/theme/theme";
import * as Styled from "./style";
import { useNavigate } from "react-router-dom";

interface ICard {
  createdAt: string;
  text: string;
  likes: number;
  comments: number;
  id: number;
}

export default function TrendingCard({
  createdAt,
  text,
  likes,
  comments,
  id,
}: ICard) {
  const navigate = useNavigate();

  const handleClickPost = () => {
    navigate(`/qna/${id}`);
  };

  return (
    <Styled.CardWrapper onClick={handleClickPost}>
      <Typo color="darkgray">{createdAt}</Typo>
      <div
        css={css`
          ${theme.flexRow("", "center", 12)}
        `}
      >
        <Styled.IconAndCount>
          <Like fill={theme.color.pink} width={16} />
          <Typo>{likes}</Typo>
        </Styled.IconAndCount>
        <Styled.IconAndCount>
          <Chat width={18} />
          <Typo>{comments}</Typo>
        </Styled.IconAndCount>
      </div>
      <Typo weight="500">{text}</Typo>
    </Styled.CardWrapper>
  );
}
