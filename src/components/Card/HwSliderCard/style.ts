import styled from "@emotion/styled";
export * from "../SliderCard/style";

export const CardWrapper = styled.div`
  ${(props) => props.theme.flexColumn("space-between", "center")}
  padding-bottom: 36px;
  position: relative;
  border-radius: 60px;
  overflow: hidden;
  margin: 0px 6rem;
`;

export const AlignWrapper = styled.div`
  ${(props) => props.theme.flexColumn("", "", 5)}
  z-index: 10;
`;

export const Picture = styled.img`
  position: absolute;
  object-fit: contain;
  top: 5%;
  right: 54%;
`;

export const LogoAndTitle = styled.div`
  height: 300px;
  ${(props) => props.theme.flexRow("end", "center")}
  width: 60%;
`;

export const TitleWrapper = styled.div`
  ${(props) => props.theme.flexColumn("", "start", 10)}
  z-index: 2;
  box-sizing: content-box;
  width: 56%;
`;
