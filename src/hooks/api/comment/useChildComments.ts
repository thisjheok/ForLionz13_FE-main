import { getChildComments } from "../../../api/comment";
import { IChild } from "../../../types";
import useAsyncData from "../../common/useAsyncData";

export function useChildComments(id: number) {
  const [state, reFetch] = useAsyncData<IChild[]>(
    () => getChildComments(id),
    [id]
  );

  const { isloading, data, error } = state;

  return { isloading, data, error, reFetch };
}
