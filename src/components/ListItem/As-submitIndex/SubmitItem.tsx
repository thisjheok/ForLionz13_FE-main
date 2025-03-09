import User from "../../Profile/Profile";
import * as Styled from "./style";
import Typo from "../../Typo/Typo";
import { css } from "@emotion/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { variants } from "./variants";
import { IItem } from "./types";
import { getFormedDate } from "../../../utils/date";
import { useMemberId } from "../../../hooks";
import { ERROR } from "../../../constants/message";
import GithubLogo from "../../../assets/icons/github/img_dark.svg?react";

function SubmitItem({
  name,
  date,
  link,
  description,
  id,
  isDark,
  index,
}: IItem) {
  const [clicked, setClicked] = useState(false);

  const { data, error } = useMemberId(+id);

  if (error === "rejected") throw new Error(ERROR.ID_MEMBER);
  if (!data) return;

  const checkContainerClicked = (e: React.MouseEvent<HTMLElement>) => {
    if (!clicked) {
      setClicked((prev) => !prev);
    } else if (clicked) {
      // click된 상태라면 link인지 container인지 체크
      const elem = document.querySelectorAll(".link");
      console.log(elem);

      if (elem[index] !== e.target) {
        setClicked((prev) => !prev);
      }
    }
  };

  return (
    <Styled.Container
      onClick={(e) => checkContainerClicked(e)}
      variants={variants}
      initial="initial"
      animate={clicked ? "click" : undefined}
      whileHover="hover"
    >
      <Styled.PrevBar>
        <Styled.ImgAndNameWrapper>
          <User url={data?.imageUrl} size="45" />
          <div css={css``}>
            <Styled.Name>
              <Typo>{name}의 과제입니다.</Typo>
            </Styled.Name>
          </div>
        </Styled.ImgAndNameWrapper>
        <Styled.Date>
          <Typo color="darkgray" fontSize="14">
            작성일: {getFormedDate(date)}
          </Typo>
        </Styled.Date>
      </Styled.PrevBar>
      <div>
        <Styled.Explain>
          <Typo fontSize="16" weight="400">
            {description}
          </Typo>
        </Styled.Explain>
        <Styled.LinkWrapper>
          <GithubLogo
            width={40}
            height={40}
            fill={isDark ? "white" : "black"}
          />
          <Link to={link} target="_blank">
            <Styled.LinkText className="link">{link}</Styled.LinkText>
          </Link>
        </Styled.LinkWrapper>
      </div>
    </Styled.Container>
  );
}

export default SubmitItem;
