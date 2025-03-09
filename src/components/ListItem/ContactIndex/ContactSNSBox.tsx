import * as Styled from "./style";
import instaimg from "../../../assets/icons/insta/img.png";
import insta_dark from "../../../assets/icons/insta/contact_dark.png";
import githubimg from "../../../assets/icons/github/img.png";
import github_dark from "../../../assets/icons/github/contact_dark.png";
import { css } from "@emotion/react";

type BoxType = {
  isDark: boolean;
  onClickGithub: () => void;
  onClickInsta: () => void;
  githuburl?: string;
  instaid?: string;
};

export default function ContactSNSBox({
  isDark,
  onClickGithub,
  onClickInsta,
  githuburl,
  instaid,
}: BoxType) {
  return (
    <Styled.SNSbox>
      <Styled.Img
        width={isDark ? 35 : 32}
        height={isDark ? 35 : 32}
        css={css`
          display: ${instaid ? "" : "none"};
        `}
        onClick={onClickInsta}
        src={isDark ? insta_dark : instaimg}
      />
      <Styled.Img
        width={isDark ? 35 : 32}
        height={isDark ? 35 : 32}
        css={css`
          display: ${githuburl ? "" : "none"};
        `}
        onClick={onClickGithub}
        src={isDark ? github_dark : githubimg}
      />
    </Styled.SNSbox>
  );
}
