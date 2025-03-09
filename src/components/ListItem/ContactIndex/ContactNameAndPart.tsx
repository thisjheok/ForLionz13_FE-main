import { ReactNode } from "react";
import * as Styled from "./style";
import { css } from "@emotion/react";

type InfoType = {
  clicked: boolean;
  children: ReactNode;
};

export default function ContactNameAndPart({ clicked, children }: InfoType) {
  return (
    <Styled.NameAndPart
      css={css`
        flex-direction: ${clicked ? "column" : "row"};
        gap: ${clicked && "12px"};
      `}
    >
      {children}
    </Styled.NameAndPart>
  );
}
