import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ReactNode, useContext } from "react";
import { theme } from "../../styles/theme/theme";
import { ThemeContext } from "../../context/IsDark/IsDark";
import Typo from "../Typo/Typo";

export const Wrapper = styled.p`
  padding: 8px 20px;
  border-radius: 20px;
`;

interface ITag {
  type: "main" | "other";
  children: ReactNode;
}

export default function Tag({ children, type }: ITag) {
  const { isDark } = useContext(ThemeContext);

  const tagForType =
    type === "main"
      ? `
      background-color: ${
        isDark ? theme.mode.dark.bgColor : theme.mode.light.bgColor
      };
      border: 2.5px solid ${
        isDark ? theme.mode.dark.main : theme.mode.light.main
      }
      `
      : `
  background-color: ${
    isDark ? theme.mode.dark.bgColor : theme.color.superlightgray
  };
  border: ${
    isDark
      ? `1px solid ${theme.color.darkgray}`
      : `1px solid ${theme.color.superlightgray}`
  };
  `;

  return (
    <Wrapper
      css={css`
        ${tagForType}
      `}
    >
      <Typo fontSize="16" weight={type === "main" ? "600" : "400"}>
        {children}
      </Typo>
    </Wrapper>
  );
}
