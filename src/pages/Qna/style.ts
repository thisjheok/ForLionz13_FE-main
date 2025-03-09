import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 60%;
  min-height: 150vh;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.h1``;

export const BoxContainer = styled.div`
  ${(props) => props.theme.flexRow("", "", 10)}
  margin: 20px 0px;
`;

export const ItemsContainer = styled.div`
  ${(props) => props.theme.flexColumn("", "", 15)}
`;

export const TagsAndBtnWrapper = styled.div`
  ${(props) => props.theme.flexRow("space-between", "center")}
`;

export const PageBtnWrapper = styled.div`
  display: flex;
  place-self: center;
  padding-top: 60px;
  gap: 8px;
`;
