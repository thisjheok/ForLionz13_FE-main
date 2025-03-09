import styled from "@emotion/styled";

export const Box = styled.p`
  border-radius: 6px;
  padding: 8px;
  border: 1px solid ${(props) => props.theme.color.lightgray};
  cursor: pointer;
  ${(props) => props.theme.flexRow("center", "center")}
`;
