import { getQnaDetailById } from "../../../api/qna";
import { IQna } from "../../../types";
import useAsyncData from "../../common/useAsyncData";

export function useQnaDetail(id: number | undefined) {
  if (id === undefined) {
    return {
      data: null,
    };
  }
  const [state, fetchData] = useAsyncData<IQna>(
    () => getQnaDetailById(id),
    [id]
  );

  const { isloading, error, data } = state;

  return { isloading, error, data, fetchData };
}
