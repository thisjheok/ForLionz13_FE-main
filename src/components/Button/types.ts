import { ReactNode } from "react";

export interface IBtn extends IBtnStyle {
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  children: ReactNode;
  type?: "submit" | "reset" | "button" | undefined;
}

export interface IBtnStyle {
  width?: string;
  height?: string;
  bgcolor?: string;
  color?: string;
  radius?: string;
  borderwidth?: string;
  bordercolor?: string;
  fontSize?: string;
  padding?: string;
  fontWeight?: string;
}
