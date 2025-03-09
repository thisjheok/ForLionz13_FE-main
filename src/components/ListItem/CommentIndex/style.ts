import styled from "@emotion/styled";

export const Wrapper = styled.div`
  width: 95%;
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
  padding: 20px 0px;
`;

export const Child = styled.p`
  ${(props) => props.theme.flexRow("", "center", 5)}
  cursor: pointer;
  padding: 20px 0px;
`;

export const Form = styled.form`
  ${(props) => props.theme.flexColumn("", "end", 20)}
  width: 80%;
  padding: 20px 0px;
`;

export const ChildCommentInput = styled.textarea`
  width: 100%;
  min-height: 100px;
  border: 1.5px solid ${(props) => props.theme.color.lightgray};
  border-radius: 10px;
  padding: 10px;
  font-size: 18px;

  &:focus {
    outline: none;
    border: 1.5px solid ${(props) => props.theme.color.darkblue};
  }
`;
