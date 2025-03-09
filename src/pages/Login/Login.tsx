import * as Styled from "./style";
import Typo from "../../components/Typo/Typo";
import login from "../../assets/3dicons/login/people.webp";
import Button from "../../components/Button/Button";
import { TEXT } from "../../constants/text";
import { useState } from "react";
import { useAuth } from "../../hooks";

function Login() {
  const [id, setId] = useState("");
  const [pwd, setPwd] = useState("");
  const { check } = useAuth();

  const isMobile = /iPhone|Android/i.test(window.navigator.userAgent);

  const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    check(id, pwd);
  };

  if (isMobile) {
    return (
      <Styled.MobileLayout>
        <Typo weight="600" fontSize="20">
          Mobile is Not Allowed
        </Typo>
      </Styled.MobileLayout>
    );
  }

  return (
    <>
      <Styled.page>
        <Styled.LoginBox>
          <Styled.Img src={login} />
          <Styled.WelcomeText>{TEXT.LOGIN}</Styled.WelcomeText>
          <Styled.Form onSubmit={(e) => handleLogin(e)}>
            <Styled.Input
              type="text"
              value={id}
              onChange={(e) => setId(e.target.value)}
              placeholder="아이디를 입력하세요"
            />
            <Styled.Input
              type="password"
              value={pwd}
              onChange={(e) => setPwd(e.target.value)}
              placeholder="비밀번호를 입력하세요"
            />

            <Button type="submit" width="60%" height="40px" bgcolor="darkblue">
              <Typo fontSize="20" weight="600" color="white">
                로그인
              </Typo>
            </Button>
          </Styled.Form>
        </Styled.LoginBox>
      </Styled.page>
    </>
  );
}
export default Login;
