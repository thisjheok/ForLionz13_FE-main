import styled from "@emotion/styled";

export const page = styled.div`
  width: 100vw;
  margin-top: 80px;
  ${(props) => props.theme.flexRow("center")}
`;

export const Img = styled.img`
  position: absolute;
  width: 400px;
  z-index: -10;
  top: -120px;
  left: -260px;
`;

export const LoginBox = styled.div`
  max-width: 60vw;
  max-height: 80vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 15rem;
  position: relative;

  button {
    margin-top: 25px;
  }
`;

export const WelcomeText = styled.h1`
  font-size: 34px;
  font-weight: 600;
  font-family: "Pretendard-medium";
  text-align: right;
  white-space: pre-line;
  place-self: end;
  line-height: 1.2;
  letter-spacing: -0.01em;
`;

export const Input = styled.input`
  border: 2.5px solid ${(props) => props.theme.color.lightgray};
  width: 30vw;
  min-width: 300px;
  height: 50px;
  margin: 5px 0px;
  border-radius: 10px;
  font-size: 18px;
  font-family: "Pretendard-medium";
  padding-left: 26px;

  &::placeholder {
    font-size: 18px;
  }

  &:focus {
    border-color: ${(props) => props.theme.color.darkblue};
    outline: none;
  }
`;

export const Form = styled.form`
  ${(props) => props.theme.flexColumn("", "center")}
  margin-top: 12px;
`;

export const MobileLayout = styled.div`
  height: 100vh;
  width: 100vw;
  ${(props) => props.theme.flexRow("center", "center")}
`;
