import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { IText } from "./types";

const Ellipsis = styled.p`
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
`;

export default function EllipsisText({ children, color, ...props }: IText) {
  return (
    <Ellipsis
      css={css`
        text-decoration-color: ${color};
        color: ${color};
        line-height: ${props.lineHeight || 1};
        -webkit-line-clamp: ${props.lineClamp || 1};
        padding: ${props.padding || 0};
        overflow: ${props.overflow || "hidden"};
        display: ${props.display || "-webkit-box"};
        width: ${props.width || "auto"};
        text-align: ${props.textAlign};
      `}
    >
      {children}
    </Ellipsis>
  );
}
