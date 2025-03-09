import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Container = styled(motion.div)`
  border: 1px solid ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
  cursor: pointer;
  resize: none;
  overflow: hidden;
  transform-origin: top;
`;

export const PrevBar = styled.div`
  padding: 20px;
  ${(props) => props.theme.flexRow("space-between", "center")}
  height: 80px;
`;

export const ImgAndNameWrapper = styled.div`
  ${(props) => props.theme.flexRow("", "center", 30)}
`;

export const Name = styled.p``;

export const Date = styled.p``;

export const Explain = styled.p`
  padding: 10px 20px;
`;

export const Writer = styled.p`
  padding: 3px 0px;
`;

export const Img = styled.img`
  width: 30px;
  height: 30px;
`;

export const LinkWrapper = styled.div`
  padding: 20px;
  ${(props) => props.theme.flexRow("", "center", 10)}
`;

export const LinkText = styled.span`
  color: ${(props) => props.theme.color.darkblue};
  font-size: 16px;
`;
