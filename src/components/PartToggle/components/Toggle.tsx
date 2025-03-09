import Button from "../../Button/Button";
import { PART_COLOR } from "../../../constants/partcolor";
import { SetStateAction, useContext } from "react";
import { ThemeContext } from "../../../context/IsDark/IsDark";

interface IToggle {
  text: string;
  part: string;
  setPart: React.Dispatch<SetStateAction<string>>;
}

function Toggle({ text, part, setPart }: IToggle) {
  const { isDark } = useContext(ThemeContext);
  return (
    <Button
      type="button"
      onClick={() => setPart(text)}
      color={part == text ? PART_COLOR[part] : isDark ? "white" : "black"}
      bordercolor={part == text ? PART_COLOR[part] : "lightgray"}
      width="74px"
      padding="6px 0px"
      fontSize="15"
      fontWeight="700"
      borderwidth={isDark ? "1.5px" : "2px"}
    >
      {text.toUpperCase()}
    </Button>
  );
}

export default Toggle;
