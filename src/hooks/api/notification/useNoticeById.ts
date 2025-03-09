import { getNoticeById } from "../../../api/notification";
import { INotification } from "../../../types";
import useAsyncData from "../../common/useAsyncData";

export function useNoticeById(id: number | undefined) {
  if (id === undefined) {
    return {
      data: null,
    };
  }

  const [state, reFetch] = useAsyncData<INotification>(
    () => getNoticeById(id),
    [id]
  );

  const { isloading, data, error } = state;

  return { isloading, data, error, reFetch };
}
