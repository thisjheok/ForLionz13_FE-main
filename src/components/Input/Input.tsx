import { css } from "@emotion/react";
import * as Styled from "./style";
import { theme } from "../../styles/theme/theme";
import React, { useContext } from "react";
import { ThemeContext } from "../../context/IsDark/IsDark";
import { IInput } from "./types";

const CustomInput = React.forwardRef((props: IInput, ref) => {
  const { isDark } = useContext(ThemeContext);

  console.log(ref); // forwardRef

  return (
    <Styled.Input
      id={props.id}
      as={props.as}
      type={props.type}
      {...props.register}
      placeholder={props.placeholder}
      value={props.value}
      disabled={props.disabled}
      onChange={props.onChange}
      css={css`
        padding: ${props.padding || "6px 10px"};
        border-radius: ${props.as === "textarea" ? "10px" : "6px"};
        width: ${props.width};
        background-color: ${isDark
          ? theme.color.lightblack
          : theme.color[props.lightBgColor || "white"]};
        color: ${isDark ? theme.mode.dark.main : theme.mode.light.main};
        min-height: ${props.as === "textarea" && (props.height || "200px")};

        border: ${props.radius || 1}px solid
          ${isDark ? theme.color.darkgray : theme.color.lightgray};

        &:focus {
          outline: none;
          border: ${props.radius || 1}px solid ${theme.color.darkblue};
        }
      `}
    />
  );
});

export default CustomInput;
