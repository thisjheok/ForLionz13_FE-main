import styled from "@emotion/styled";

export const Badge = styled.div`
  color: white;
  min-width: 68px;
  height: 26px;
  font-weight: ${(props) => props.theme.weight.semibold};
  ${(props) => props.theme.flexRow("center", "center")}
  font-size: 16px;
  border-radius: 12px;
`;

export const Date = styled.p``;

export const Wrapper = styled.div`
  ${(props) => props.theme.flexRow("", "center", 22)}
`;

export const TagWrapper = styled(Wrapper)`
  gap: 18px;
`;

export const Tag = styled.p`
  padding: 8px 15px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.color.superlightgray};
  font-size: 14px;
  font-weight: ${(props) => props.theme.weight.regular};
`;

export const ContentWrapper = styled.div`
  margin-top: 40px;
  height: 80%;
  overflow-y: scroll;
`;

export const Content = styled.p`
  white-space: pre-line;
  line-height: 1.5;
`;

export const MainWrapper = styled.div`
  ${(props) => props.theme.flexColumn("", "", 16)}
  max-width: 65%;
`;

export const Title = styled.p`
  width: 100%;
  white-space: pre-line;
`;

export const AssignmentLink = styled.div`
  ${(props) => props.theme.flexRow("", "center", 10)}

  a {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: ${(props) => props.theme.color.darkblue};
    font-weight: 600;
  }
`;

export const PageWrapper = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  margin-top: 60px;
`;
