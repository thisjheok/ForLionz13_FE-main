import { useNavigate, useParams } from "react-router-dom";
import * as Styled from "./style";
import Typo from "../../components/Typo/Typo";
import { getFormedDate } from "../../utils/date";
import Button from "../../components/Button/Button";
import { useCommentsById, useQnaDetail } from "../../hooks";
import ListItem from "../../components/ListItem/CommentIndex";
import React, { useContext, useState } from "react";
import axios from "axios";
import { css } from "@emotion/react";
import { ERROR } from "../../constants/message";
import Markdown from "./components/Markdown/Markdown";
import Tag from "../../components/Tag/Tag";
import { ThemeContext } from "../../context/IsDark/IsDark";
import { URL_MAP } from "../../constants/url";
import CustomInput from "../../components/Input/Input";
import LikePost from "./components/LikePost/LikePost";

function QnaDetail() {
  const { id } = useParams();
  const uid = localStorage.getItem("id");

  if (!id) throw new Error(ERROR.ROUTE_NO_PARAM);
  if (!uid) throw new Error(ERROR.NO_ID);

  const { data: comments, reFetch } = useCommentsById(+id);
  const { data, error } = useQnaDetail(+id);
  const { isDark } = useContext(ThemeContext);

  const [comment, setComment] = useState("");
  const navigate = useNavigate();

  const isMyQna = +uid === data?.memberId;

  if (error === "rejected") throw new Error(ERROR.ID_QNA);
  if (!data) return;

  const handleLikePost = async () => {
    await axios.post(`${import.meta.env.VITE_QUESTION}/like/${id}`);
  };

  const handleDelete = async () => {
    const ok = window.confirm("삭제하시겠습니까 ?");

    if (!ok) return;

    await axios
      .delete(`${import.meta.env.VITE_QUESTION}/${id}`)
      .then((res) => {
        if (res.status === 200) {
          navigate(`/${URL_MAP.QNA}`);
        }
      })
      .catch((err) => {
        console.log(err);
        throw new Error(ERROR.DELETE_QNA);
      });
  };

  const handleEdit = () => {
    navigate(`/${URL_MAP.QNA}/upload`, {
      state: {
        id,
      },
    });
  };

  const handleCommentSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await axios
      .post(
        import.meta.env.VITE_COMMENT,
        {
          content: comment,
          questionPostId: +id,
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

    setComment("");
    reFetch();
  };

  return (
    <Styled.Wrapper>
      <div
        css={css`
          width: 80%;
          place-self: center;
        `}
      >
        <Styled.TitleAndInfoWrapper>
          <Styled.Title>
            <Typo fontSize="40" weight="700">
              {data?.title}
            </Typo>
          </Styled.Title>
          <Styled.InfoAndBtnWrapper>
            <div>
              <Styled.NameAndDate>
                <Typo>{data?.name}</Typo>
                <Typo fontSize="14" color="darkgray">
                  작성일: {getFormedDate(data?.createdAt)}
                </Typo>
                <LikePost
                  isDark={isDark}
                  onPost={handleLikePost}
                  liked={data.liked}
                  likes={data?.likes}
                />
              </Styled.NameAndDate>
              <Styled.TagWrapper>
                {data?.childTags.map((tag) => (
                  <Tag type="other">{tag}</Tag>
                ))}
              </Styled.TagWrapper>
            </div>
            <Styled.EditDeleteBtnWrapper
              css={css`
                display: ${isMyQna ? "flex" : "none"};
              `}
            >
              <Button fontSize="16" color="darkblue" onClick={handleEdit}>
                수정
              </Button>
              <Button fontSize="16" color="darkblue" onClick={handleDelete}>
                삭제
              </Button>
            </Styled.EditDeleteBtnWrapper>
          </Styled.InfoAndBtnWrapper>
        </Styled.TitleAndInfoWrapper>
        <Styled.MarkDownContent>
          <Markdown isDark={isDark} content={data?.content} />
        </Styled.MarkDownContent>
      </div>
      <div>
        <form onSubmit={handleCommentSubmit}>
          <Styled.CommentCnt>
            <Typo color="darkblue" fontSize="24">
              {data?.commentCount}&nbsp;
            </Typo>
            <Typo>개의 댓글</Typo>
          </Styled.CommentCnt>
          <CustomInput
            as="textarea"
            height="150px"
            width="98%"
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="댓글을 남겨보세요."
          />
          <Styled.BtnWrapper>
            <Button padding="5px 10px" color="white" bgcolor="darkblue">
              댓글 작성
            </Button>
          </Styled.BtnWrapper>
        </form>
        <Styled.CommentsContainer>
          {comments?.map((item) => (
            <ListItem
              key={item.commentId}
              isDark={isDark}
              commentId={item.commentId}
              memberId={item.memberId}
              name={item.name}
              memberImageUrl={item.memberImageUrl}
              part={item.part}
              createdAt={item.createdAt}
              content={item.content}
              update={reFetch}
            />
          ))}
        </Styled.CommentsContainer>
      </div>
    </Styled.Wrapper>
  );
}

export default QnaDetail;
