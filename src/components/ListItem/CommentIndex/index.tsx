import Profile from "../../Profile/Profile";
import * as Styled from "./style";
import Typo from "../../Typo/Typo";
import Chat from "../../../assets/icons/comments/chat.svg?react";
import { getFormedDate } from "../../../utils/date";
import { useChildComments } from "../../../hooks";
import { css } from "@emotion/react";
import Button from "../../Button/Button";
import Item from "./components/Child";
import React, { useState } from "react";
import axios from "axios";
import { ERROR } from "../../../constants/message";
import { IComment } from "../../../types";
import { theme } from "../../../styles/theme/theme";
import CustomInput from "../../Input/Input";

function ListItem({
  memberImageUrl,
  name,
  createdAt,
  commentId,
  content,
  part,
  memberId,
  update,
  isDark,
}: IComment) {
  const { data, reFetch } = useChildComments(commentId);
  const [isChildClicked, setIsChildClicked] = useState(false);
  const [comment, setComment] = useState("");

  const id = localStorage.getItem("id");
  if (!id) throw new Error(ERROR.NO_ID);

  const isMine = memberId === +id;

  const handleAddComment = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios
      .post(
        import.meta.env.VITE_CHILD_COMMENT,
        {
          content: comment,
          commentId,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .catch((err) => {
        console.log(err);
        throw new Error(ERROR.COMMENT_UPLOAD);
      });

    reFetch();

    setComment("");
  };

  const handleDeleteComment = async () => {
    const ok = window.confirm("삭제하시겠습니까?");

    if (!ok) return;

    await axios
      .delete(`${import.meta.env.VITE_COMMENT}?commentId=${commentId}`)
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
      <div>
        <div
          css={css`
            ${theme.flexRow("space-between", "end")}
          `}
        >
          <Styled.Info>
            <Profile url={memberImageUrl} size="60" />
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

        <Styled.Child onClick={() => setIsChildClicked((prev) => !prev)}>
          <Chat width={18} />
          <Typo color="darkblue" weight="600">
            {data?.length ? `${data?.length}개의 답글` : "댓글 달기"}
          </Typo>
        </Styled.Child>
      </div>
      <div
        css={css`
          display: ${isChildClicked ? "flex" : "none"};
          flex-direction: column;
          align-items: center;
        `}
      >
        {data?.map((item) => (
          <Item
            key={item.childCommentId}
            isDark={isDark}
            name={item.name}
            part={item.part}
            createdAt={item.createdAt}
            content={item.content}
            url={item.memberImageUrl}
            uid={item.memberId}
            commentId={item.childCommentId}
            update={update}
          />
        ))}
        <Styled.Form onSubmit={handleAddComment}>
          <CustomInput
            as="textarea"
            width="100%"
            height="120px"
            radius={1.5}
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="답글을 남겨보세요."
          />
          <Button type="submit" padding="5px 10px" color="darkblue">
            답글 작성
          </Button>
        </Styled.Form>
      </div>
    </Styled.Wrapper>
  );
}

export default ListItem;
