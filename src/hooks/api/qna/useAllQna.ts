import { getAllQuestion } from "../../../api/qna";
import { IQna } from "../../../types";
import useAsyncData from "../../common/useAsyncData";

export function useAllQna() {
  const [state, fetchData] = useAsyncData<IQna[]>(() => getAllQuestion(), []);

  const { isloading, error, data } = state;

  return { isloading, error, data, fetchData };
}
