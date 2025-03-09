import { css } from "@emotion/react";
import * as Styled from "./style";
import { ReactNode } from "react";
import { theme } from "../../../styles/theme/theme";
import ContactName from "./ContactName";
import { ContactBadge } from "./ContactBadge";
import ContactSNSBox from "./ContactSNSBox";
import ContactNameAndPart from "./ContactNameAndPart";

type RootType = {
  isDark: boolean;
  children: ReactNode;
};

function ContactRoot({ isDark, children }: RootType) {
  return (
    <Styled.Wrapper
      css={css`
        border: ${isDark
          ? `1px solid ${theme.color.darkgray}`
          : `1.5px solid ${theme.color.lightgray};`};
      `}
      whileHover={{
        scale: 1.02,
      }}
    >
      {children}
    </Styled.Wrapper>
  );
}

export default Object.assign(ContactRoot, {
  Name: ContactName,
  Badge: ContactBadge,
  Info: ContactNameAndPart,
  SNSBox: ContactSNSBox,
});
