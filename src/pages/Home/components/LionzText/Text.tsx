import { useContext } from "react";
import { css } from "@emotion/react";
import { ThemeContext } from "../../../../context/IsDark/IsDark";
import { theme } from "../../../../styles/theme/theme";

interface IText {
  text: string[];
}

export default function LionzText({ text }: IText) {
  const { isDark } = useContext(ThemeContext);
  return (
    <>
      <span
        css={css`
          font-family: "Pretendard-bold";
          font-size: 60px;
          color: ${isDark ? theme.mode.dark.main : theme.mode.light.main};

          transition: color 0.2s ease-in-out;
          letter-spacing: 0.1rem;
        `}
      >
        {text}
      </span>
    </>
  );
}
