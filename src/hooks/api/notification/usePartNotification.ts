import { getPartNotification } from "../../../api/notification";
import { INotificationResult } from "../../../types";
import useAsyncData from "../../common/useAsyncData";

export function usePartNotification(part: string) {
  const [state, reFetch] = useAsyncData<INotificationResult>(
    () => getPartNotification(part),
    [part]
  );

  const { isloading, data, error } = state;

  console.log(state);

  return { isloading, data, error, reFetch };
}
