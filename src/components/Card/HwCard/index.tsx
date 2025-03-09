import { css } from "@emotion/react";
import Button from "../../Button/Button";
import Typo from "../../Typo/Typo";
import * as Styled from "./style";
import { PART_COLOR } from "../../../constants/partcolor";
import { IHwCard } from "./types";
import getImgForCategory from "../../../utils/categoryImg";
import { theme } from "../../../styles/theme/theme";
import { useContext, useLayoutEffect, useRef } from "react";
import { ThemeContext } from "../../../context/IsDark/IsDark";
import EllipsisText from "../../Ellipsis/EllipsisText";

function HwCard({
  category,
  part,
  onClick,
  layoutId,
  title,
  createdAt,
}: IHwCard) {
  const ref = useRef<HTMLImageElement>(null);
  const { isDark } = useContext(ThemeContext);

  useLayoutEffect(() => {
    ref.current?.setAttribute(
      "src",
      getImgForCategory(category.toUpperCase()) || ""
    );
  }, [category]);

  return (
    <Styled.CardWrapper
      css={css`
        border: 1px solid
          ${isDark ? theme.color.darkgray : theme.color.lightgray};
      `}
      whileHover={{
        scale: 1.03,
      }}
      layoutId={layoutId}
      onClick={onClick}
    >
      <Styled.Thumnail
        css={css`
          background-color: ${isDark
            ? theme.color.lightblack
            : theme.color.superlightgray};
        `}
      >
        <Styled.Img ref={ref} />
      </Styled.Thumnail>
      <Styled.Content>
        <div
          css={css`
            width: 100%;
          `}
        >
          <Styled.AlignWrapper>
            <EllipsisText
              color={isDark ? "white" : "black"}
              lineHeight={1.3}
              width="100%"
            >
              <Typo weight="600">{title}</Typo>
            </EllipsisText>
            <Styled.Badge
              css={css`
                background-color: ${theme.color[PART_COLOR[part]]};
              `}
            >
              <Typo color="white">{part.toUpperCase()}</Typo>
            </Styled.Badge>
          </Styled.AlignWrapper>
          <Styled.Date>
            <Typo color="darkgray" weight="400" fontSize="12">
              {createdAt}
            </Typo>
          </Styled.Date>
        </div>
        <Button
          width="100%"
          height="40px"
          borderwidth="1px"
          bordercolor={isDark ? "darkgray" : "lightgray"}
        >
          <Typo>Go to page</Typo>
        </Button>
      </Styled.Content>
    </Styled.CardWrapper>
  );
}
export default HwCard;
