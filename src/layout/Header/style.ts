import styled from "@emotion/styled";

export const Wrapper = styled.div<{ type?: string }>`
  width: 100vw;
  height: 80px;
  ${(props) => props.theme.flexRow("", "center")}
  justify-content: ${(props) =>
    props.type === "login" ? "center" : "space-between"};
  padding: 0px 40px;
  position: fixed;
  top: 0;
  background-color: ${(props) => props.theme.color.white};
  z-index: 10;
`;

export const Logo = styled.span`
  transition: all 0.2s ease-in-out;
`;

export const NavCol = styled.div`
  ${(props) => props.theme.flexRow("start", "center")}
  width: 36vw;
  div {
    margin-left: 40px;
    display: flex;
    gap: 30px;
    width: 100%;
    justify-content: space-between;
  }
`;

export const Profile = styled.div<{ show: boolean }>`
  cursor: pointer;
  display: ${(props) => !props.show && "none"};

  @media screen and (max-width: 768px) {
    display: none;
  }

  img {
    &:hover {
      box-shadow: 0px 5px 20px ${(props) => props.theme.color.pink};
      scale: 1.05;
    }
    transition: all 0.2s ease-in-out;
  }
`;

export const ThemeWrapper = styled.div`
  cursor: pointer;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  box-shadow: 0px 0px 5px rgba(140, 122, 230, 0.5);
  ${(props) => props.theme.flexRow("center", "center")}
  &:hover {
    transform: scale(1.1);
  }
  transition: all 0.2s ease-in-out;
`;
