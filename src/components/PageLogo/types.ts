export interface IPageLogo extends ILogo {
  type: string;
}

export interface ILogo {
  height?: string;
  width?: string;
}

export interface IPageobj {
  [key: string]: string;
  HW_SUBMIT: string;
  CONTACT: string;
  LOGIN: string;
  NOTIFICATION: string;
  "Q&A": string;
  LION: string;
}
