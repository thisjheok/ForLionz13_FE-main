import { SetStateAction } from "react";

export interface IForm {
  onSubmit: React.Dispatch<SetStateAction<boolean>>;
  description: string;
  assignmentLink: string;
  id: string;
  refetch: () => void;
}

export interface IStatus {
  id: string;
  createdAt: string;
  description: string;
  onModify: React.Dispatch<SetStateAction<boolean>>;
  link: string;
  isDark: boolean;
}
