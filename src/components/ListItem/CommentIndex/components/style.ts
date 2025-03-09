import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 95%;
  padding: 20px 0px;
  ${(props) => props.theme.flexColumn("", "", 20)}
`;

export const Info = styled.div`
  ${(props) => props.theme.flexRow("", "center", 10)}
`;

export const NameAndDate = styled.div`
  ${(props) => props.theme.flexColumn("", "", 4)}
`;

export const Name = styled.p``;

export const Date = styled.p``;

export const Comment = styled.p`
  line-height: 1.3;
  padding-bottom: 20px;
`;
