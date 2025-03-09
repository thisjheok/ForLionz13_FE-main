import { useNavigate } from "react-router-dom";
import Button from "../Button";
import Typo from "../../Typo/Typo";
import { css } from "@emotion/react";
import { theme } from "../../../styles/theme/theme";
import { URL_MAP } from "../../../constants/url";

interface IBtn {
  type: string;
  uid: string;
  id: string; // 과제 혹은 공지 id
}

export default function AdminModifyBtn({ type, uid, id }: IBtn) {
  const navigate = useNavigate();

  const isAdmin = +uid === 2;

  let destination = "";
  if (type === "notification") {
    destination = `/${URL_MAP.NOTIFICATION}/upload`;
  } else if (type === "assignment") {
    destination = `/${URL_MAP.ASSIGNMENT}/upload`;
  }

  return (
    <div
      css={css`
        display: ${isAdmin ? "" : "none"};
        white-space: nowrap;
        span {
          text-decoration: underline;
          text-underline-offset: 4px;
          text-decoration-color: ${theme.color.darkblue};
        }
      `}
    >
      <Button
        bgcolor="transparent"
        onClick={() =>
          navigate(destination, {
            state: {
              id,
              history: type === "assignment" ? "detail" : null,
            },
          })
        }
      >
        <Typo fontSize="16" color="darkblue">
          수정
        </Typo>
      </Button>
    </div>
  );
}
