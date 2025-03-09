import { getCommentsById } from "../../../api/comment";
import { IComment } from "../../../types";
import useAsyncData from "../../common/useAsyncData";

export function useCommentsById(id: number) {
  const [state, reFetch] = useAsyncData<IComment[]>(
    () => getCommentsById(id),
    [id]
  );

  const { isloading, data, error } = state;

  return { isloading, data, error, reFetch };
}
