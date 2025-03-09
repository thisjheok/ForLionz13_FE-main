import { getAllNotification } from "../../../api/notification";
import { INotificationResult } from "../../../types";
import useAsyncData from "../../common/useAsyncData";

export function useAllNotification() {
  const [state, reFetch] = useAsyncData<INotificationResult>(
    getAllNotification,
    []
  );

  const { isloading, data, error } = state;

  return { isloading, data, error, reFetch };
}
