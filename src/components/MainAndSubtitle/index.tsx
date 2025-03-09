import { css } from "@emotion/react";
import Typo from "../Typo/Typo";
import { ITitle } from "./types";
import * as Styled from "./style";
import { useContext } from "react";
import { ThemeContext } from "../../context/IsDark/IsDark";
import { theme } from "../../styles/theme/theme";

function MainAndSubtitle({ main, sub, fontsizes, gap }: ITitle) {
  const { isDark } = useContext(ThemeContext);
  const [mainsize, subsize] = fontsizes;
  return (
    <div>
      <Styled.Title
        css={css`
          @media screen and (max-width: 768px) {
            span {
              font-size: ${(+mainsize * 3) / 4}px;
            }
          }
        `}
      >
        <Typo
          weight="700"
          color={isDark ? theme.mode.dark.main : theme.mode.light.main}
          fontSize={mainsize}
        >
          {main}
        </Typo>
      </Styled.Title>
      <div
        css={css`
          height: ${gap}px;
          @media screen and (max-width: 768px) {
            height: 0;
          }
        `}
      ></div>
      <Styled.Content
        css={css`
          @media screen and (max-width: 768px) {
            span {
              font-size: ${(+subsize * 3) / 4}px;
            }
          }
        `}
      >
        <Typo color="darkgray" fontSize={subsize} weight="500">
          {sub}
        </Typo>
      </Styled.Content>
    </div>
  );
}

export default MainAndSubtitle;
