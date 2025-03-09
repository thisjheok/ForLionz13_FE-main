import { css } from "@emotion/react";
import styled from "@emotion/styled";

export const AlignStyle = css`
  display: flex;
  flex-direction: column;
`;

export const flexColumnContent = css`
  ${AlignStyle};
  width: 90%;
  place-self: center;
`;

export const Wrapper = styled.div`
  width: 70%;
  margin-bottom: 100px;
  ${(props) => props.theme.flexColumn()}
`;

export const List = styled.div`
  ${flexColumnContent};
  gap: 15px;
  padding: 30px 0px;
`;

export const OtherHwWrapper = styled.div`
  width: 90%;
  place-self: center;
  ${(props) => props.theme.flexRow("space-between", "end")}
`;

export const CurrentSubmitWrapper = styled.div``;
