import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 70%;
`;

export const Items = styled.div`
  width: 95%;
  ${(props) => props.theme.flexColumn("", "start", 12)}
`;

export const Toggle = styled.div`
  width: 95%;
  margin-bottom: 20px;
  ${(props) => props.theme.flexRow("flex-end", "")}
`;
