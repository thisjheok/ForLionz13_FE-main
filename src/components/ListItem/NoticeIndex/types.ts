import React from "react";

export interface IItem {
  part: string;
  title: string;
  date: string;
  onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
}
