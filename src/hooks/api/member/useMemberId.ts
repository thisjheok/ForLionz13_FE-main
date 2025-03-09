import { getMemberById } from "../../../api/member";
import { IUserInfo } from "../../../types";
import useAsyncData from "../../common/useAsyncData";

export function useMemberId(id: number) {
  const [state, reFetch] = useAsyncData<IUserInfo>(
    () => getMemberById(id),
    [id]
  );

  const { isloading, data, error } = state;

  return { isloading, data, error, reFetch };
}
