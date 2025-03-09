import styled from "@emotion/styled";

export const Wrapper = styled.div`
  position: absolute;
  left: 14%;
  top: 24vh;
  cursor: pointer;
  border-radius: 30px;
  ${(props) => props.theme.flexColumn("", "center", 10)}
  padding: 18px 10px;

  @media screen and (max-width: 900px) {
    ${(props) => props.theme.flexRow("", "center", 10)}
    flex-direction: row;
    padding: 0px 5px;
    position: relative;
    svg {
      width: 14px;
    }
  }
`;
