import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 11;
`;

export const Modal = styled(motion.div)`
  position: fixed;
  background-color: ${(props) => props.theme.color.white};
  border-radius: 30px;
  width: 70%;
  height: 80%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto;
  padding: 80px;
  z-index: 12;
  ${(props) => props.theme.flexColumn()}
`;

export const Badge = styled.div`
  color: white;
  width: 68px;
  height: 26px;
  font-weight: ${(props) => props.theme.weight.semibold};
  ${(props) => props.theme.flexRow("center", "center")}
  font-size: 16px;
  border-radius: 12px;
`;

export const Date = styled.p``;

export const Tag = styled.div`
  padding: 6px 14px;
  border: 1.5px solid ${(props) => props.theme.color.lightgray};
  border-radius: 8px;
  font-size: 14px;
  font-weight: ${(props) => props.theme.weight.semibold};
`;

export const Wrapper = styled.div`
  ${(props) => props.theme.flexRow("", "center", 22)}
`;

export const TagWrapper = styled(Wrapper)`
  gap: 18px;
`;

export const ContentWrapper = styled.div`
  margin-top: 40px;
  height: 80%;
  overflow-y: scroll;
`;

export const Content = styled.p`
  white-space: pre-line;
  line-height: 1.5;
`;

export const MainWrapper = styled.div`
  ${(props) => props.theme.flexColumn("", "", 16)}
`;

export const Title = styled.p`
  width: 100%;
  word-wrap: break-word;
  white-space: pre-line;
`;
