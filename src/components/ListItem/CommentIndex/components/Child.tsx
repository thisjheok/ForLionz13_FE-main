import Profile from "../../../Profile/Profile";
import * as Styled from "./style";
import Typo from "../../../Typo/Typo";
import { getFormedDate } from "../../../../utils/date";
import Button from "../../../Button/Button";
import { ERROR } from "../../../../constants/message";
import { css } from "@emotion/react";
import { theme } from "../../../../styles/theme/theme";
import axios from "axios";

interface IChild {
  url: string;
  name: string;
  createdAt: string;
  content: string;
  part: string;
  uid: number;
  commentId: number;
  update: () => void;
  isDark: boolean;
}

function Item({
  url,
  name,
  createdAt,
  content,
  part,
  uid,
  commentId,
  update,
  isDark,
}: IChild) {
  const id = localStorage.getItem("id");
  if (!id) throw new Error(ERROR.NO_ID);

  const isMine = uid === +id;

  const handleDeleteComment = async () => {
    await axios
      .delete(
        `${import.meta.env.VITE_CHILD_COMMENT}?childCommentId=${commentId}`
      )
      .catch((err) => {
        console.log(err);
        throw new Error(ERROR.DELETE_COMMENT);
      });

    update();
  };

  return (
    <Styled.Wrapper
      css={css`
        border-bottom: 1px solid
          ${isDark ? theme.color.darkgray : theme.color.lightgray};
      `}
    >
      <div
        css={css`
          ${theme.flexRow("space-between", "center")}
        `}
      >
        <Styled.Info>
          <Profile url={url} size="60" />
          <Styled.NameAndDate>
            <Styled.Name>
              <Typo>
                {name} <Typo>({part})</Typo>
              </Typo>
            </Styled.Name>
            <Styled.Date>
              <Typo fontSize="14" color="darkgray" weight="500">
                {getFormedDate(createdAt)}
              </Typo>
            </Styled.Date>
          </Styled.NameAndDate>
        </Styled.Info>
        {isMine && (
          <Button onClick={handleDeleteComment} color="darkblue">
            삭제
          </Button>
        )}
      </div>

      <Styled.Comment>
        <Typo weight="500">{content}</Typo>
      </Styled.Comment>
    </Styled.Wrapper>
  );
}

export default Item;
