import styled from "@emotion/styled";

export const Layout = styled.div`
  padding: 80px 0px;
  width: 100vw;
  min-height: 100vh;
  position: relative;
  ${(props) => props.theme.flexColumn("", "center")}
  overflow: hidden;
`;
