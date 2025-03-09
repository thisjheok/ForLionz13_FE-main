import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Typo from "../../Typo/Typo";
import { css } from "@emotion/react";
import { URL_MAP } from "../../../constants/url";

interface IBtn {
  type: string;
  id: string;
}

export default function AdminUploadBtn({ type, id }: IBtn) {
  const navigate = useNavigate();

  const isAdmin = +id === 2;

  let destination = "";
  const getText = () => {
    if (type === "notification") {
      destination = `/${URL_MAP.NOTIFICATION}/upload`;
      return "공지사항 업로드";
    } else if (type === "assignment") {
      destination = `/${URL_MAP.ASSIGNMENT}/upload`;
      return "과제 업로드";
    }
  };

  return (
    <div
      css={css`
        display: ${isAdmin ? "" : "none"};
      `}
    >
      <Button
        bordercolor="lightgray"
        borderwidth="1px"
        padding="6px 10px"
        onClick={() => navigate(destination)}
      >
        <Typo fontSize="16">{getText()}</Typo>
      </Button>
    </div>
  );
}
