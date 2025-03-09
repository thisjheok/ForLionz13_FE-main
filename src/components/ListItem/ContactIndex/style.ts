import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled(motion.div)`
  ${(props) => props.theme.flexRow("space-between", "center")}
  width: 100%;
  border-radius: 10px;
  padding: 0px 20px;

  @media screen and (max-width: 768px) {
    ${(props) => props.theme.flexColumn("", "end", 10)}
  }
`;

export const InfoWrapper = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 20px;
  cursor: pointer;
  padding: 20px 0px;
  width: 100%;

  @media screen and (max-width: 768px) {
    ${(props) => props.theme.flexColumn("", "center", 20)}
  }
`;

export const Name = styled.p`
  white-space: nowrap;
`;

export const NameAndPart = styled.div`
  width: 170px;
  ${(props) => props.theme.flexRow("space-between", "center")};
`;

export const Badge = styled.div`
  width: 90px;
  padding: 10px;
  ${(props) => props.theme.flexRow("center", "center")}
  border-radius: 24px;
`;

export const SNSbox = styled.div`
  ${(props) => props.theme.flexRow("end", "", 10)}
  padding: 10px 0px;
`;

export const Img = styled.img`
  cursor: pointer;
  object-fit: cover;
`;
