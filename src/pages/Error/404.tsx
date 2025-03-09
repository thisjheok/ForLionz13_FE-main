import { css } from "@emotion/react";
import code404 from "./assets/404.png";
import { theme } from "../../styles/theme/theme";
import Typo from "../../components/Typo/Typo";
import Header from "../../layout/Header/Header";

export default function NoExist() {
  return (
    <>
      <Header />
      <div
        css={css`
          margin-top: 30vh;
          ${theme.flexColumn("end", "center")}
          gap: 20px;
        `}
      >
        <img width="200" src={code404} />
        <Typo fontSize="26">NOT FOUND</Typo>
      </div>
    </>
  );
}
