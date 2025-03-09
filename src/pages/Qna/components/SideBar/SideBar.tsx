import { css } from "@emotion/react";
import * as Styled from "./style";
import { theme } from "../../../../styles/theme/theme";
import useResponsivebar from "../../hooks/useResponsivebar";
import React, { SetStateAction } from "react";
import { ParenttagType } from "../../../../types";
import Typo from "../../../../components/Typo/Typo";

interface ISideBar {
  setCategory: React.Dispatch<SetStateAction<number>>;
  currentCategory: number;
  tags: ParenttagType[];
}

function SideBar({ setCategory, currentCategory, tags }: ISideBar) {
  const ref = useResponsivebar("sidebar", "78vh", "3%");

  return (
    <Styled.Wrapper
      ref={ref}
      css={css`
        @media screen and (max-width: 900px) {
          position: static;
          display: flex;
          padding: 20px 0px;
          width: 100%;
          flex-wrap: wrap;
          max-width: none;
        }
      `}
    >
      {tags.map((item) => (
        <Styled.Item
          key={item.parentTagId}
          css={css`
            background-color: ${currentCategory === item.parentTagId &&
            theme.color.pink};
          `}
          onClick={() => setCategory(item.parentTagId)}
        >
          <Typo weight="600">{item.name}</Typo>
        </Styled.Item>
      ))}
    </Styled.Wrapper>
  );
}

export default SideBar;
