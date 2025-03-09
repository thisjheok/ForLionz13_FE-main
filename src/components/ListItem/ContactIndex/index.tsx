import UserImg from "../../Profile/Profile";
import { IItem } from "./types";
import Typo from "../../Typo/Typo";
import * as Styled from "./style";
import { css } from "@emotion/react";
import { PART_COLOR } from "../../../constants/partcolor";
import { theme } from "../../../styles/theme/theme";
import { useContext } from "react";
import EllipsisText from "../../Ellipsis/EllipsisText";
import { ContactItemContext } from "../../../utils/contact/ContactItemProvider";
import ContactRoot from "./ContactRoot";

function Item({
  file,
  name,
  part,
  introduce,
  instaid,
  githuburl,
  isDark,
  id,
}: IItem) {
  const { clickedId, toggle } = useContext(ContactItemContext);
  const clicked = id === clickedId;

  const goGithub = () => {
    if (githuburl) {
      window.location.href = githuburl;
    }
  };

  const goInstagram = () => {
    if (instaid) {
      window.location.href = `https://www.instagram.com/${instaid}/`;
    }
  };

  return (
    <ContactRoot isDark={isDark}>
      <Styled.InfoWrapper onClick={() => toggle(id)}>
        <div
          css={css`
            ${theme.flexRow("space-between", "center", 50)}
          `}
        >
          <UserImg
            radius={clicked ? "20px" : ""}
            url={file}
            size={clicked ? "170" : undefined}
          />
          <ContactRoot.Info clicked={clicked}>
            <ContactRoot.Name isDark={isDark} clicked={clicked}>
              {name}
            </ContactRoot.Name>
            <ContactRoot.Badge isDark={isDark} clicked={clicked} part={part}>
              <Typo
                fontSize="20"
                color={clicked ? "white" : PART_COLOR[part.toLowerCase()]}
                weight="700"
              >
                {part.toUpperCase()}
              </Typo>
            </ContactRoot.Badge>
          </ContactRoot.Info>
        </div>
        <EllipsisText
          color="darkgray"
          overflow={clicked ? "visible" : "hidden"}
          display={clicked ? "" : "-webkit-box"}
          lineHeight={1.2}
          padding="0px 1rem"
        >
          <Typo color="darkgray" weight="500" fontSize="16">
            {introduce}
          </Typo>
        </EllipsisText>
      </Styled.InfoWrapper>
      <ContactRoot.SNSBox
        onClickGithub={goGithub}
        onClickInsta={goInstagram}
        isDark={isDark}
        instaid={instaid}
        githuburl={githuburl}
      />
    </ContactRoot>
  );
}

export default Item;
