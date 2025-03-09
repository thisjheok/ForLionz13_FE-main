import { ReactNode } from "react";

export interface ITypo {
  fontSize?: string | "default";
  color?: string | "default";
  weight?: string | "default";
  onClick?: (e: React.MouseEvent<HTMLSpanElement>) => void;
  children: ReactNode;
  isItalic?: boolean;
}
