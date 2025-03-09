import styled from "@emotion/styled";

export const CodeWrapper = styled.div`
  padding: 5px;
  border-radius: 6px;
  ${(props) => props.theme.flexRow("center", "center")}
  cursor: pointer;
`;

export const MdBtnWrapper = styled.div`
  display: flex;
  gap: 5px;
  margin-left: 40px;
`;

export const FileLabel = styled.label`
  ${(props) => props.theme.flexRow("center", "center")}
  padding: 5px;
  border-radius: 6px;
  cursor: pointer;
`;

export const FileInput = styled.input`
  display: none;
`;
