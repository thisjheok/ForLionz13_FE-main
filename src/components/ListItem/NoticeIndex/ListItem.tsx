import { css } from "@emotion/react";
import * as Styled from "./style";
import { PART_COLOR } from "../../../constants/partcolor";
import Typo from "../../Typo/Typo";
import { IItem } from "./types";
import { variants } from "./variants";
import { theme } from "../../../styles/theme/theme";
import { useContext } from "react";
import { ThemeContext } from "../../../context/IsDark/IsDark";
import EllipsisText from "../../Ellipsis/EllipsisText";

function ListItem({ part, title, date, onClick }: IItem) {
  const { isDark } = useContext(ThemeContext);
  return (
    <Styled.Wrapper
      css={css`
        background-color: ${isDark
          ? theme.mode.dark.bgColor
          : theme.color.superlightgray};

        border: ${isDark && `1px solid ${theme.color.darkgray}`};
      `}
      onClick={onClick}
      variants={variants}
      whileHover="hover"
    >
      <Styled.Badge
        css={css`
          background-color: ${theme.color[PART_COLOR[part]]};
        `}
      >
        <Typo color="white">{part.toUpperCase()}</Typo>
      </Styled.Badge>
      <EllipsisText color={isDark ? "white" : "black"} lineHeight={1.2}>
        <Typo weight="600" fontSize="17">
          {title}
        </Typo>
      </EllipsisText>
      <Styled.Date>
        <Typo weight="400" fontSize="12" color="darkgray">
          작성일: {date}
        </Typo>
      </Styled.Date>
    </Styled.Wrapper>
  );
}

export default ListItem;
