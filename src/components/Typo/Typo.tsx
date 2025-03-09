import styled from "@emotion/styled";
import { ITypo } from "./types";
import { useContext } from "react";
import { ThemeContext } from "../../context/IsDark/IsDark";
import { css } from "@emotion/react";
import { theme } from "../../styles/theme/theme";

const StyledTypo = styled.span<ITypo>`
  font-size: ${(props) => props.fontSize || "18"}px;
  font-family: ${(props) => props.weight};
  font-style: ${(props) => props.isItalic && "italic"};

  transition: all 0.2s ease-in-out;
`;

function handleFont(weight: string) {
  switch (weight) {
    case "700": {
      return "Pretendard-bold";
    }
    case "600": {
      return "Pretendard-semibold";
    }
    case "500": {
      return "Pretendard-medium";
    }
    case "400": {
      return "Pretendard-regular";
    }
  }
}

export default function Typo(props: ITypo) {
  const { isDark } = useContext(ThemeContext);

  return (
    <StyledTypo
      {...props}
      weight={handleFont(props.weight || "500")}
      css={css`
        color: ${props.color
          ? theme.color[props.color]
          : isDark
          ? theme.mode.dark.main
          : theme.mode.light.main};
      `}
    >
      {props.children}
    </StyledTypo>
  );
}
