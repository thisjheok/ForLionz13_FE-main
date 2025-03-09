import styled from "@emotion/styled";
import { motion } from "framer-motion";

export const Wrapper = styled.div`
  width: 90%;
  ${(props) => props.theme.flexColumn()}
`;

export const Banner = styled.div`
  ${(props) => props.theme.flexRow("center", "center")}

  @media screen and (max-width: 900px) {
    padding: 40px 0px;
  }
`;

export const NoticeTitle = styled.p`
  margin-bottom: 30px;
`;

export const TrendingTitle = styled(NoticeTitle)``;

export const Textwrapper = styled.div`
  ${(props) => props.theme.flexColumn("center", "center", 20)}
  padding: 100px 0px;
`;

export const Text = styled(motion.h1)`
  white-space: pre-line;
  font-style: italic;
  span {
    @media screen and (max-width: 900px) {
      font-size: 40px;
    }
  }
`;

export const Usergreet = styled(motion.h3)`
  ${(props) => props.theme.flexRow("", "center")}
  span {
    @media screen and (max-width: 900px) {
      font-size: 20px;
    }
  }
`;

export const TrendingList = styled.ul`
  ${(props) => props.theme.flexColumn("", "center")}
  max-height: 500px;
  overflow-y: scroll;
  overscroll-behavior: contain;
`;

export const ContentWrapper = styled.div`
  ${(props) => props.theme.flexRow("", "", 100)}

  @media screen and (max-width: 1000px) {
    ${(props) => props.theme.flexColumn("", "center", 30)}
  }
`;
