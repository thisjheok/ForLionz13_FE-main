import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  left: 3%;
  top: 78vh;
  width: 15%;
  max-width: 180px;
  cursor: pointer;
`;

export const Item = styled.p`
  padding: 15px;
  margin: 10px;
  text-align: center;
  word-break: keep-all;
  white-space: nowrap;

  font-weight: ${(props) => props.theme.weight.semibold};
  border-radius: 12px;

  &:hover {
    background-color: ${(props) => props.theme.color.lightgray};
  }
`;
