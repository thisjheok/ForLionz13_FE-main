import React, { useState } from "react";
import * as Styled from "./style";
import { css } from "@emotion/react";
import { theme } from "../../../../styles/theme/theme";
import Typo from "../../../../components/Typo/Typo";

interface IBox {
  text: string;
  setClickedValue: React.Dispatch<React.SetStateAction<Array<number>>>;
  values: number[];
  id: number;
  isDark: boolean;
}

function Checkbox({ text, setClickedValue, id, isDark }: IBox) {
  const [clicked, setClicked] = useState(false);

  const AddValue = () => {
    setClicked((prev) => !prev);
    setClickedValue((obj) => {
      if (!clicked) {
        return [...obj, id];
      }
      return [...obj.filter((item) => item !== id)];
    });
  };

  return (
    <Styled.Box
      css={css`
        background-color: ${clicked &&
        (isDark ? theme.color.darkgray : theme.color.superlightgray)};
        border: ${isDark && clicked && "none"};
      `}
      onClick={() => AddValue()}
    >
      <Typo>
        {clicked ? "✓" : ""} {text}
      </Typo>
    </Styled.Box>
  );
}

export default Checkbox;
