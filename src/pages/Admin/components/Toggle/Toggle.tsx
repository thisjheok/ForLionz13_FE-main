import { SetStateAction } from "react";
import Typo from "../../../../components/Typo/Typo";
import * as Styled from "./style";

interface IToggle {
  text: string;
  part: string;
  setPart: React.Dispatch<SetStateAction<string>>;
}

function Toggle({ text, part, setPart }: IToggle) {
  return (
    <Styled.Toggle onClick={() => setPart(text)}>
      <Typo
        color={part === text ? "darkblue" : "black"}
        weight="600"
        fontSize="14"
      >
        {text.toUpperCase()}
      </Typo>
    </Styled.Toggle>
  );
}

export default Toggle;
