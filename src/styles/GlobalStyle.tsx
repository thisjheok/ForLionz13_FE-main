import { css } from "@emotion/react";
import { theme } from "./theme/theme";

export const GlobalStyle = css`
  @import "slick-carousel/slick/slick.css";
  @import "slick-carousel/slick/slick-theme.css";
  @import "react-toastify/dist/ReactToastify.css";

  @font-face {
    font-family: "Pretendard-bold";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Bold.woff")
      format("woff");
    font-weight: 700;
  }

  @font-face {
    font-family: "Pretendard-semibold";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-SemiBold.woff")
      format("woff");
    font-weight: 600;
  }

  @font-face {
    font-family: "Pretendard-medium";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Medium.woff")
      format("woff");
    font-weight: 500;
  }

  @font-face {
    font-family: "Pretendard-regular";
    src: url("https://cdn.jsdelivr.net/gh/Project-Noonnu/noonfonts_2107@1.1/Pretendard-Regular.woff")
      format("woff");
    font-weight: 400;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    font-family: "Pretendard-medium";
    box-sizing: border-box;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol,
  ul {
    list-style: none;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: "";
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  a {
    text-decoration: none;
    color: black;
  }
  ::-webkit-scrollbar {
    width: 10px;
    height: 0;
  }
  ::-webkit-scrollbar-thumb {
    background: ${theme.color.skyblue};
    border-radius: 10px;
  }
  .recent_slide .slick-list {
    padding: 20px 0px;
  }
  .Toastify__toast-body {
    white-space: nowrap;
  }
  .Toastify__toast-body div {
    text-align: center;
    font-weight: 500;
    font-size: 18;
  }

  .dots_custom {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .dots_custom ul {
    display: flex;
    align-items: center;
    position: relative;
    top: -20px;
    gap: 10px;
  }
  .dots_custom li {
  }
  .dots_custom li button {
    border: none;
    background: ${theme.color.superlightgray};
    color: transparent;
    cursor: pointer;
    display: block;
    height: 8px;
    width: 8px;
    border-radius: 100%;
    padding: 0;
  }
  .dots_custom li.slick-active button {
    background: ${theme.color.darkgray};
    width: 10px;
    height: 10px;
  }
`;
