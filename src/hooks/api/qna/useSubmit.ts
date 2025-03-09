import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { warning } from "../../../utils/toast";
import { ERROR } from "../../../constants/message";
import {
  postChildTagData,
  postUploadQna,
  putUploadQna,
} from "../../../api/qna";
import { URL_MAP } from "../../../constants/url";
import { SubmitHandler } from "react-hook-form";

interface IInputs {
  title: string;
  tag: string;
  content: string;
}

export function useSubmit() {
  const [urls, setUrls] = useState<string[]>([]);
  const [query, setQuery] = useState<number[]>([]);
  const { state } = useLocation();
  const navigate = useNavigate();

  const onSubmit: SubmitHandler<IInputs> = async (data) => {
    const request = {
      ...data,
      postImageUrls: [...urls],
    };

    if (!data.title) {
      warning(ERROR.QNA_UPLOAD_NO_TITLE);
      return;
    } else if (query.length === 0) {
      warning(ERROR.QNA_UPLOAD_NO_TAG);
      return;
    } else if (!data.content) {
      warning(ERROR.QNA_UPLOAD_NO_CONTENT);
      return;
    }

    let postId: number = 0;

    try {
      let response;
      if (state?.id !== undefined) {
        response = await putUploadQna(request, state?.id);
      } else {
        response = await postUploadQna(request);
      }
      postId = response.data.id;

      await postChildTagData(postId, query).then((res) => {
        if (res.status === 204) {
          if (state?.id) {
            navigate(`/${URL_MAP.QNA}/${state?.id}`);
          } else {
            navigate(`/${URL_MAP.QNA}`);
          }
        }
      });
    } catch (err) {
      throw new Error(ERROR.QNA_UPLOAD);
    }
  };

  return { query, setQuery, urls, setUrls, onSubmit };
}
