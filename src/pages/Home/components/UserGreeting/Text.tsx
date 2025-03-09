import { TEXT } from "../../../../constants/text";
import { css } from "@emotion/react";
import { useContext } from "react";
import { ThemeContext } from "../../../../context/IsDark/IsDark";
import { theme } from "../../../../styles/theme/theme";

type TextType = {
  text: string;
};

export default function GreetText({ text }: TextType) {
  const { isDark } = useContext(ThemeContext);
  return (
    <span>
      <span
        css={css`
          font-family: "Pretendard-semibold";
          font-style: normal;
          font-size: 24px;
          color: ${theme.color.darkblue};
        `}
      >
        {text}
      </span>
      <span
        css={css`
          font-family: "Pretendard-semibold";
          font-style: normal;
          font-size: 24px;
          color: ${isDark ? theme.mode.dark.main : theme.mode.light.main};
        `}
      >
        &nbsp;{TEXT.HOME_GREETING}
      </span>
    </span>
  );
}
