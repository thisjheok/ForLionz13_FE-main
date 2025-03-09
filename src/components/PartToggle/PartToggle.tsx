import Toggle from "./components/Toggle";
import * as Styled from "./style";
import { useLocation } from "react-router-dom";
import { SetStateAction } from "react";

interface IToggle {
  part: string;
  setPart: React.Dispatch<SetStateAction<string>>;
}

function PartToggle({ part, setPart }: IToggle) {
  const state = useLocation();

  return (
    <Styled.Wrapper>
      <Toggle text="all" part={part} setPart={setPart} />
      <Toggle text="fe" part={part} setPart={setPart} />
      <Toggle text="be" part={part} setPart={setPart} />
      {state.pathname === "/contact" && (
        <Toggle text="staff" part={part} setPart={setPart} />
      )}
    </Styled.Wrapper>
  );
}

export default PartToggle;
