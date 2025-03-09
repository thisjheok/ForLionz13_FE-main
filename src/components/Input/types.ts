import { UseFormRegisterReturn } from "react-hook-form";

export interface IInput {
  id?: string;
  width?: string;
  value?: string;
  placeholder?: string;
  register?: UseFormRegisterReturn; // react-hook-form의 register를 prop으로 넘길 경우
  onChange?: React.ChangeEventHandler<HTMLInputElement>;
  as?: React.ElementType;
  type?: string;
  disabled?: boolean;
  lightBgColor?: string;
  padding?: string;
  height?: string;
  radius?: number;
}
