import * as Styled from "./style";
import Typo from "../../Typo/Typo";
import { IItem } from "./types";
import { PROFILE_TEXT } from "../../../pages/Profile/constants/text";
import React, { useContext, useEffect, useState } from "react";
import Button from "../../Button/Button";
import { useUserUpdater } from "../../../hooks";
import Password from "../../../assets/icons/password/password.svg?react";
import Instagram from "../../../assets/icons/insta/insta.svg?react";
import GithubLogo from "../../../assets/icons/github/img_dark.svg?react";
import {
  useLoginInfoDispatch,
  useLoginInfoState,
} from "../../../context/LoginUser/User";
import { error, success } from "../../../utils/toast";
import { GUIDE_MESSAGE } from "../../../constants/message";
import { ThemeContext } from "../../../context/IsDark/IsDark";
import CustomInput from "../../Input/Input";

export default function ProfileItem({ type, onSubmit }: IItem) {
  const [edit, setEdit] = useState(false);
  const { updateUserInfo } = useUserUpdater();
  const { isDark } = useContext(ThemeContext);

  const user = useLoginInfoState();
  const dispatch = useLoginInfoDispatch();
  const [info, setInfo] = useState("");

  const img =
    type === "password" ? (
      <Password width={40} height={40} />
    ) : type === "github" ? (
      <GithubLogo fill={isDark ? "white" : "black"} width={40} height={40} />
    ) : (
      <Instagram width={40} height={40} />
    );

  useEffect(() => {
    if (edit) {
      const input = document.getElementById("infoInput");
      input?.focus();
    }
  }, [edit]);

  useEffect(() => {
    let initialValue = "";
    initialValue = type === "github" ? user.githubAddress : user.instagramId;

    setInfo(initialValue || "");
  }, [user]);

  const handleInfoSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (type === "github") {
      const regexp = /^(https:\/\/)/g;

      console.log(info.match(regexp));

      if (info.length !== 0 && !regexp.test(info)) {
        error("주소는 https:// 로 시작해야 합니다.");
        return;
      }
    }

    updateUserInfo(type, info);

    if (type === "github") {
      dispatch({
        type: "LOGIN",
        data: {
          ...user,
          githubAddress: info,
        },
      });
    } else if (type === "instagram") {
      dispatch({
        type: "LOGIN",
        data: {
          ...user,
          instagramId: info,
        },
      });
    }

    success(GUIDE_MESSAGE[type.toUpperCase()]);

    setEdit(false);
    onSubmit();
  };

  return (
    <Styled.Container>
      <Styled.LeftColumn>
        {img}
        <Styled.TextWrapper>
          <Typo weight="600" fontSize="24">
            {PROFILE_TEXT[type].main}
          </Typo>
          <Typo weight="600" fontSize="12" color="darkpink">
            {PROFILE_TEXT[type].sub}
          </Typo>
        </Styled.TextWrapper>
      </Styled.LeftColumn>
      <Styled.Form onSubmit={handleInfoSubmit}>
        {edit ? (
          <>
            <CustomInput
              id="infoInput"
              width="50%"
              value={info}
              onChange={(e) => setInfo(e.target.value)}
            />
            <Button width="50px" type="submit" bgcolor="darkblue">
              <Typo color="white">변경</Typo>
            </Button>
          </>
        ) : (
          <>
            <CustomInput
              width="50%"
              lightBgColor="superlightgray"
              type={type === "password" ? "password" : undefined}
              disabled
              value={type === "password" ? new Array(5).join() : info.concat()}
            />
            <Styled.Edit onClick={() => setEdit(true)}>
              <Typo color="darkblue">수정</Typo>
            </Styled.Edit>
          </>
        )}
      </Styled.Form>
    </Styled.Container>
  );
}
