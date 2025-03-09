import { theme } from "../../../styles/theme/theme";
import first from "../assets/chat.png";
import second from "../assets/notice.png";
import third from "../assets/heart.png";
import { URL_MAP } from "../../../constants/url";

interface IDest {
  [key: string]: string;
}

export const Destination: IDest = {
  공지사항: `/${URL_MAP.NOTIFICATION}`,
  과제: `/${URL_MAP.ASSIGNMENT}`,
  연락처: `/${URL_MAP.CONTACT}`,
  "Q&A": `${URL_MAP.QNA}`,
};

export const SliderProps = {
  color: [theme.color.skyblue, "#EBDCA6", theme.color.pink],
  imgs: [first, second, third],
};
