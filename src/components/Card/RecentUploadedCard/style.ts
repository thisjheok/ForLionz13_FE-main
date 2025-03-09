import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const variants = {
  hover: {
    boxShadow: "0px 2px 8px rgba(250, 182, 173, 0.5)",
    y: -10,
  },
};

export const CardWrapper = styled(motion.div)`
  border: 1px solid ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
  height: 160px;
  margin: 0px 8px;
  padding: 10px;
  ${(props) => props.theme.flexRow("", "center", 10)}
`;

export const ContentWrapper = styled.div`
  width: 60%;
  height: 80%;
  ${(props) => props.theme.flexColumn("space-between", "")}
  padding: 0px 5px;
`;

export const Img = styled.img`
  width: 40%;
  max-width: 150px;
  height: 95%;
  border-radius: 15px;
  object-fit: cover;
`;

export const Name = styled.p`
  margin-bottom: 4px;
`;

export const Text = styled.p`
  max-width: 60%;
  -webkit-line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  text-decoration-color: ${(props) => props.theme.color.darkgray};
  color: gray;
  -webkit-box-orient: vertical;
`;
