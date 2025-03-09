import Typo from "../../../components/Typo/Typo.tsx";
import * as Styled from "./style.ts";
import React, { useContext, useEffect } from "react";
import { css } from "@emotion/react";
import { PART_COLOR } from "../../../constants/partcolor.ts";
import { getFormedDate } from "../../../utils/date.ts";
import { useNoticeById } from "../../../hooks/index.ts";
import { theme } from "../../../styles/theme/theme.ts";
import AdminModifyBtn from "../../../components/Button/AdminModifyBtn.tsx/index.tsx";
import { ERROR } from "../../../constants/message.ts";
import { ThemeContext } from "../../../context/IsDark/IsDark.tsx";

interface INoticeModal {
  clickedId: number;
  setClickedId: React.Dispatch<React.SetStateAction<number>>;
}

function NoticeDetail({ clickedId, setClickedId }: INoticeModal) {
  useEffect(() => {
    document.body.style.maxWidth = `${document.body.clientWidth}px`;
    document.body.style.overflowY = "hidden";

    return () => {
      document.body.style.maxWidth = "100vw";
      document.body.style.overflowY = "";
    };
  }, [clickedId]);

  const { data, error } = useNoticeById(clickedId);
  const uid = localStorage.getItem("id");
  const { isDark } = useContext(ThemeContext);

  useEffect(() => {
    window.addEventListener("keydown", handleKeyPress);

    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  const handleKeyPress = (e: KeyboardEvent) => {
    const { key } = e;
    if (key === "Escape") {
      setClickedId(0);
    }
  };

  if (error === "rejected") {
    throw new Error(ERROR.ID_NOTIFICATION);
  }
  if (!data) {
    return;
  }

  const { content, title, createdAt, part } = data;

  const handleExit = (e: React.MouseEvent<HTMLDivElement>) => {
    const { target, currentTarget } = e;
    if (target == currentTarget) {
      setClickedId(0);
    }
  };

  return (
    <>
      <Styled.Overlay
        onClick={(e) => handleExit(e)}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      ></Styled.Overlay>
      <Styled.Modal
        css={css`
          background-color: ${isDark
            ? theme.color.lightblack
            : theme.color.white};
        `}
      >
        <Styled.MainWrapper>
          <Styled.Title>
            <Typo fontSize="44" weight="600">
              {title}
            </Typo>
          </Styled.Title>
          <Styled.Wrapper>
            <Styled.Badge
              css={css`
                background-color: ${theme.color[
                  PART_COLOR[part.toLowerCase()]
                ]};
              `}
            >
              {part.toUpperCase()}
            </Styled.Badge>
            <Styled.Date>
              <Typo fontSize="14" color="darkgray">
                작성일: {getFormedDate(createdAt)}
              </Typo>
            </Styled.Date>
            <AdminModifyBtn
              type="notification"
              id={clickedId + ""}
              uid={uid + ""}
            />
          </Styled.Wrapper>
        </Styled.MainWrapper>

        <Styled.ContentWrapper>
          <Styled.Content>
            <Typo weight="400">{content}</Typo>
          </Styled.Content>
        </Styled.ContentWrapper>
      </Styled.Modal>
    </>
  );
}

export default NoticeDetail;
