import { useEffect } from "react";
import Typo from "../../components/Typo/Typo";
import { useErrorDispatch, useErrorState } from "../../context/Error/Error";
import Header from "../../layout/Header/Header";
import { css } from "@emotion/react";

export default function ErrorPage() {
  const error = useErrorState();
  const dispatch = useErrorDispatch();

  useEffect(() => {
    return () => dispatch("");
  });

  return (
    <>
      <Header />
      <div
        css={css`
          margin-top: 30vh;
        `}
      >
        <Typo fontSize="26">{error}</Typo>
      </div>
    </>
  );
}
