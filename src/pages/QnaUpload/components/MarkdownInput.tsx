import { css } from "@emotion/react";
import { theme } from "../../../styles/theme/theme";
import * as Styled from "./style";
import CodeInput from "../assets/code.svg?react";
import ImgInput from "../assets/img.svg?react";

interface IInput {
  isDark: boolean;
  onCodeClick: () => void;
  onImgClick: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function MarkdownInput({
  isDark,
  onCodeClick,
  onImgClick,
}: IInput) {
  return (
    <Styled.MdBtnWrapper>
      <Styled.CodeWrapper
        css={css`
          border: 1px solid
            ${isDark ? theme.color.darkgray : theme.color.lightgray};
        `}
      >
        <CodeInput
          width={30}
          onClick={onCodeClick}
          stroke={isDark ? "white" : "black"}
        />
      </Styled.CodeWrapper>
      <Styled.FileLabel
        css={css`
          border: 1px solid
            ${isDark ? theme.color.darkgray : theme.color.lightgray};
        `}
        htmlFor="img"
      >
        <ImgInput width={30} height={30} stroke={isDark ? "white" : "black"} />
      </Styled.FileLabel>
      <Styled.FileInput onChange={onImgClick} id="img" type="file" />
    </Styled.MdBtnWrapper>
  );
}
