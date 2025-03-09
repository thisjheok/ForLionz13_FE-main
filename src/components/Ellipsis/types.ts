import { ReactNode } from "react";

export interface IText {
  children: ReactNode;
  color: string;
  lineHeight?: number;
  lineClamp?: number;
  padding?: string;
  overflow?: string;
  display?: string;
  width?: string;
  textAlign?: string;
}
