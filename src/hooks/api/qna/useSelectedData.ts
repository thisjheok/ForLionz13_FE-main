import { useEffect, useState } from "react";
import {
  getAllQuestion,
  getChildTagData,
  getParentTagData,
} from "../../../api/qna";
import { ChildtagType, IQna } from "../../../types";
import { useNavigate } from "react-router-dom";

export function useSelectedData(id: number) {
  const [data, setData] = useState<IQna[]>();
  const [childTags, setChildTags] = useState<ChildtagType[]>();

  const [query, setQuery] = useState<number[]>([]);
  const navigate = useNavigate();

  const get = async () => {
    if (id === 0) {
      const response = await getAllQuestion();

      setChildTags([]);
      setData(response.data);
    } else {
      const response = await getParentTagData(id);
      const { childTags, questionPosts } = response.data;

      setChildTags(id === 4 || id === 6 ? [] : childTags); // 부모 category가 etc, 잡담이면 childTag No
      setData(questionPosts);
    }
    const params = new URL(location.href).searchParams.get("page");

    if (params !== null && params !== "1") {
      navigate("/qna");
    }
  };

  const getChildData = async () => {
    if (query.length === 0) {
      const response = await getParentTagData(id);
      setData(response.data.questionPosts);
    } else {
      const response = await getChildTagData(query);
      setData(response.data);
    }
  };

  useEffect(() => {
    get();
    setQuery([]);
  }, [id]);

  useEffect(() => {
    if (id === 0) return;

    getChildData();
  }, [query]);

  return { childTags, data, query, setQuery };
}
