import MainAndSubtitle from "../../components/MainAndSubtitle";
import { TEXT } from "../../constants/text";
import * as Styled from "./style";
import Typo from "../../components/Typo/Typo";
import { css } from "@emotion/react";
import { useEffect, useState } from "react";
import {
  useLoginInfoDispatch,
  useLoginInfoState,
} from "../../context/LoginUser/User";
import axios from "axios";
import User from "../../components/Profile/Profile";
import { useMyInfo, useUserUpdater } from "../../hooks";
import { ERROR } from "../../constants/message";
import Button from "../../components/Button/Button";
import ProfileItem from "../../components/ListItem/ProfileIndex/ProfileIndex";
import CustomInput from "../../components/Input/Input";

function Profile() {
  const user = useLoginInfoState();
  const dispatch = useLoginInfoDispatch();
  const { updateUserInfo } = useUserUpdater();
  const { data: myInfo, reFetch } = useMyInfo();

  const info = user.introduction;

  const [intro, setIntro] = useState("");
  const [edit, setEdit] = useState(false);
  const [file, setFile] = useState<Blob | null>(null);
  const [url, setUrl] = useState(user.imageUrl);

  useEffect(() => {
    setIntro(user.introduction);
  }, [user]);

  const handleIntroSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await updateUserInfo("comment", intro || "");

    reFetch();

    dispatch({
      type: "LOGIN",
      data: {
        ...user,
        introduction: intro,
      },
    });

    setEdit(false);
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const { files } = e.target;

    if (files && files.length === 1) {
      setFile(files[0]);
      setUrl(URL.createObjectURL(files[0]));

      const ok = window.confirm("프로필 사진을 바꾸시겠습니까?");

      if (!ok) {
        setFile(null);
        setUrl(user.imageUrl);
        return;
      }
      const formData = new FormData();
      formData.append("file", files[0]);

      await axios
        .post(`${import.meta.env.VITE_MEMBER}/image`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .catch((err) => {
          console.log(err);
          throw new Error(ERROR.FILE_UPLOAD);
        });

      dispatch({
        type: "LOGIN",
        data: {
          ...user,
          imageUrl: URL.createObjectURL(files[0]),
        },
      });
    }
  };

  const handleDelete = async () => {
    await axios
      .put(`${import.meta.env.VITE_MEMBER}/imageDelete`)
      .catch((err) => {
        console.log(err);
        throw new Error(ERROR.DELETE_USER_IMAGE);
      });

    reFetch();

    dispatch({
      type: "LOGIN",
      data: {
        ...user,
        imageUrl: null,
      },
    });
  };

  return (
    <Styled.Wrapper>
      <MainAndSubtitle
        main="Your Profile"
        sub={TEXT.PROFILE}
        fontsizes={["40", "18"]}
        gap="5"
      />
      <Styled.InformBox>
        <Styled.ProfilePartWrapper>
          <User url={file ? url : user.imageUrl} size="220" />
          <Styled.UploadBtn
            css={css`
              margin-top: 14px;
            `}
            htmlFor="upload"
          >
            <Typo color="white" fontSize="18">
              이미지 업로드
            </Typo>
          </Styled.UploadBtn>
          <Styled.FileInput
            onChange={handleFileUpload}
            accept="image/*"
            type="file"
            id="upload"
          />
          <Button
            radius="6px"
            bgcolor="superlightgray"
            width="140px"
            padding="6px 0px"
            onClick={handleDelete}
          >
            이미지 제거
          </Button>
        </Styled.ProfilePartWrapper>
        <Styled.IntroWrapper>
          <Styled.AlignWrapper>
            <Styled.Name>
              <Typo fontSize="40" weight="600">
                {user.name}
              </Typo>
            </Styled.Name>
            {!edit ? (
              <Styled.Form>
                <Styled.Introduce>
                  <Typo color="darkgray">{myInfo?.introduction || info}</Typo>
                </Styled.Introduce>
                <Styled.EditText onClick={() => setEdit(true)}>
                  <Typo color="darkblue">수정</Typo>
                </Styled.EditText>
              </Styled.Form>
            ) : (
              <Styled.Form onSubmit={(e) => handleIntroSubmit(e)}>
                <CustomInput
                  width="80%"
                  value={intro}
                  onChange={(e) => setIntro(e.target.value)}
                />
                <Styled.Btn type="submit">
                  <Typo color="darkblue">변경</Typo>
                </Styled.Btn>
              </Styled.Form>
            )}
          </Styled.AlignWrapper>
        </Styled.IntroWrapper>
      </Styled.InformBox>
      <Styled.ListItems>
        <ProfileItem key="pwd" type="password" onSubmit={reFetch} />
        <ProfileItem key="git" type="github" onSubmit={reFetch} />
        <ProfileItem key="insta" type="instagram" onSubmit={reFetch} />
      </Styled.ListItems>
    </Styled.Wrapper>
  );
}

export default Profile;
