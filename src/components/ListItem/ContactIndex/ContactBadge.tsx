import { ReactNode } from "react";
import * as Styled from "./style";
import { theme } from "../../../styles/theme/theme";
import { css } from "@emotion/react";
import { PART_COLOR } from "../../../constants/partcolor";

type BadgeType = {
  isDark: boolean;
  clicked: boolean;
  children: ReactNode;
  part: string;
};

export function ContactBadge({ isDark, clicked, children, part }: BadgeType) {
  return (
    <Styled.Badge
      css={css`
        background-color: ${clicked
          ? theme.color[PART_COLOR[part.toLowerCase()]]
          : isDark
          ? theme.mode.dark.bgColor
          : theme.mode.light.bgColor};
      `}
    >
      {children}
    </Styled.Badge>
  );
}
