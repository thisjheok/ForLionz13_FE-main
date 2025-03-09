import { getAllMember } from "../../../api/member";
import { IMembers } from "../../../types";
import useAsyncData from "../../common/useAsyncData";

export function useAllMember() {
  const [state, reFetch] = useAsyncData<IMembers>(getAllMember, []);

  const { isloading, data, error } = state;

  return { isloading, data, error, reFetch };
}
