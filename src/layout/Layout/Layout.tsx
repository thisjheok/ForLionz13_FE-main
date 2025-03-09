import { Outlet, useNavigate, useLocation } from "react-router-dom";
import Header from "../Header/Header";
import { useCallback, useContext, useEffect } from "react";
import axios from "axios";
import * as Styled from "./style";
import { useLoginInfoDispatch } from "../../context/LoginUser/User";
import { getCookie } from "../../utils/cookie";
import { ThemeContext } from "../../context/IsDark/IsDark";
import { css } from "@emotion/react";
import { theme } from "../../styles/theme/theme";
import { URL_MAP } from "../../constants/url";
import DefaultScrollMotion from "../ControlScroll/DefaultScrollMotion";

function Layout() {
  const { pathname } = useLocation();
  const isLoginMatch = pathname === "/login";
  const dispatch = useLoginInfoDispatch();
  const navigate = useNavigate();

  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    checkToken();
  }, [pathname]);

  const checkToken = useCallback(async () => {
    await axios({
      method: "post",
      url: `${import.meta.env.VITE_AUTH_REISSUE}=${getCookie("myToken")}`,
    })
      .then((res) => {
        const { accessToken } = res.data.data;

        axios.defaults.headers.common[
          "Authorization"
        ] = `Bearer ${accessToken}`;
      })
      .catch((err) => {
        if (err.response?.status === 500) {
          navigate(`/${URL_MAP.LOGIN}`);
        }
      });

    await updateUser();
  }, []);

  const updateUser = useCallback(async () => {
    const response = await axios.get(import.meta.env.VITE_MY_INFO);

    const data = response.data.data;

    dispatch({
      type: "LOGIN",
      data: {
        ...data,
      },
    });
  }, []);

  return (
    <Styled.Layout
      css={css`
        background-color: ${isDark
          ? theme.mode.dark.bgColor
          : theme.mode.light.bgColor};
      `}
    >
      <DefaultScrollMotion>
        <Header type={isLoginMatch ? "login" : ""} />
        <Outlet />
      </DefaultScrollMotion>
    </Styled.Layout>
  );
}
export default Layout;
