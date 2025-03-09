import { useState } from "react";
import Like from "../../../../assets/icons/likes/Like.svg?react";
import { theme } from "../../../../styles/theme/theme";
import Typo from "../../../../components/Typo/Typo";
import { css } from "@emotion/react";
import useResponsivebar from "../../../Qna/hooks/useResponsivebar";
import * as Styled from "./style";

interface ILikePost {
  liked: boolean;
  likes: number;
  onPost: () => void;
  isDark: boolean;
}

export default function LikePost({ liked, likes, onPost, isDark }: ILikePost) {
  const [clicked, setClicked] = useState(liked);
  const [count, setCount] = useState(likes);

  const ref = useResponsivebar("lisepost", "24vh", "14%");

  const handleLikeClick = () => {
    onPost();
    setClicked((prev) => !prev);
    setCount((cnt) => (clicked ? cnt - 1 : cnt + 1));
  };

  return (
    <Styled.Wrapper
      css={css`
        border: 2px solid
          ${clicked
            ? theme.color.pink
            : isDark
            ? theme.color.lightgray
            : theme.color.darkgray};
      `}
      ref={ref}
      onClick={handleLikeClick}
    >
      <Like
        fill={
          clicked
            ? theme.color.pink
            : isDark
            ? theme.color.lightgray
            : theme.color.darkgray
        }
      />
      <Typo>{count}</Typo>
    </Styled.Wrapper>
  );
}
