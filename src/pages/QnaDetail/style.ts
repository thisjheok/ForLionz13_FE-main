import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 60%;
  margin-top: 50px;
  display: flex;
  flex-direction: column;
`;

export const Title = styled.p`
  word-wrap: break-word;
  word-break: break-all;
  padding-bottom: 20px;
  line-height: 1.3;
`;

export const TitleAndInfoWrapper = styled.div`
  ${(props) => props.theme.flexColumn("", "center", 10)}
`;

export const TagWrapper = styled.div`
  margin-top: 20px;
  ${(props) => props.theme.flexRow("", "center", 10)}
`;

export const InfoAndBtnWrapper = styled.div`
  ${(props) => props.theme.flexRow("space-between", "end")}
  width: 100%;
`;

export const EditDeleteBtnWrapper = styled.div`
  gap: 8px;
  white-space: nowrap;
  button {
    text-decoration: underline;
    text-underline-offset: 4px;
    text-decoration-color: ${(props) => props.theme.color.darkblue};
  }
`;

export const NameAndDate = styled.p`
  padding-left: 14px;
  ${(props) => props.theme.flexRow("space-between", "center", 20)}
  span {
    white-space: nowrap;
  }
`;

export const CommentInput = styled.textarea`
  width: 98%;
  min-height: 150px;
  font-size: 18px;
  border-radius: 10px;
  padding: 10px;
  margin-top: 10px;

  &:focus {
    outline: none;
    border: 2px solid ${(props) => props.theme.color.darkblue};
  }
`;

export const CommentCnt = styled.p`
  ${(props) => props.theme.flexRow("", "center")}
  padding-left: 10px;
`;

export const MarkDownContent = styled.div`
  padding: 30px 10px 5% 10px;
  min-height: 60vh;
  ${(props) => props.theme.flexColumn("flex-start", "start")}
`;

export const CommentsContainer = styled.div`
  ${(props) => props.theme.flexColumn("", "center", 20)}
`;

export const BtnWrapper = styled.div`
  ${(props) => props.theme.flexRow("end")}
  padding: 10px 0px;
`;

export const Tag = styled.p`
  padding: 8px 15px;
  border-radius: 20px;
  background-color: ${(props) => props.theme.color.superlightgray};
`;
