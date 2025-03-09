import styled from "@emotion/styled";

export const Container = styled.div`
  padding: 20px;
  ${(props) => props.theme.flexColumn()}
  border-radius: 10px;
  cursor: pointer;
`;

export const Date = styled.p``;

export const SpaceBetweenWrapper = styled.div`
  ${(props) => props.theme.flexRow("space-between", "center", 24)}
`;

export const Writer = styled.p`
  padding: 3px 0px;
  margin-top: 4px;
`;

export const Tag = styled.span`
  padding: 8px 12px;
  border-radius: 18px;
`;

export const TagWrapper = styled.div`
  display: flex;
  gap: 10px;
`;

export const BottomRow = styled.div`
  ${(props) => props.theme.flexRow("space-between", "center")}
  padding: 10px 0px 0px 78px;

  @media screen and (max-width: 768px) {
    ${(props) => props.theme.flexColumn("", "start", 10)}
  }
`;

export const CommentCnt = styled.p`
  white-space: nowrap;
  ${(props) => props.theme.flexRow("", "center")}
`;

export const LikeCnt = styled.p`
  ${(props) => props.theme.flexRow("", "center", 6)}
`;
