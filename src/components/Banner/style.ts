import styled from "@emotion/styled";

export const Container = styled.div`
  ${(props) => props.theme.flexRow("space-between", "center")}
  min-height: 70vh;
  max-width: 80vw;
  padding-left: 2rem;
`;
