import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { motion } from "framer-motion";
import { theme } from "../../styles/theme/theme";

export const Modal = css`
  position: fixed;
  background-color: ${theme.color.white};
  border-radius: 30px;
  width: 80vw;
  height: 85vh;
  min-height: 500px;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto auto;
  padding: 80px;
  z-index: 12;
  display: flex;
  flex-direction: column;
`;

export const Wrapper = styled.div`
  width: 70%;
  margin-top: 40px;
`;

export const Margin = styled.div<{ height: string }>`
  height: ${(props) => props.height};
`;

export const FullWidthContainer = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
`;

export const AlignWrapper = styled.div`
  width: 98%;
  ${(props) => props.theme.flexRow("space-between", "end")}
`;

export const OtherHWContainer = styled.div`
  margin-top: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: space-between;
  gap: 30px;

  @media screen and (max-width: 1300px) {
    grid-template-columns: repeat(2, 1fr);
    & > div {
      width: 100%;
      min-height: 400px;
    }
  }
  @media screen and (max-width: 1050px) {
    grid-template-columns: repeat(1, 1fr);
    & > div {
      min-height: 500px;
      width: 100%;
    }
  }
`;

export const Overlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  opacity: 0;
  z-index: 11;
`;
