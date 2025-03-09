import { ReactNode } from "react";
import { theme } from "../../../styles/theme/theme";
import * as Styled from "./style";
import Typo from "../../Typo/Typo";

type NameType = {
  isDark: boolean;
  children: ReactNode;
  clicked: boolean;
};

export default function ContactName({ isDark, children, clicked }: NameType) {
  return (
    <Styled.Name>
      <Typo
        weight="600"
        fontSize={clicked ? "24" : "18"}
        color={isDark ? theme.mode.dark.main : theme.mode.light.main}
      >
        {children}
      </Typo>
    </Styled.Name>
  );
}
