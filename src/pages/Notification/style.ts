import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 70%;
`;

export const Toggle = styled.div`
  width: 100%;
  margin-bottom: 20px;
  ${(props) => props.theme.flexRow("flex-end")}
`;

export const Items = styled.div`
  ${(props) => props.theme.flexColumn("", "start", 12)}
  width: 95%;
`;
