import { getPartAssignment } from "../../../api/assignment";
import { IAssignmentResult } from "../../../types";
import { compare } from "../../../utils/date";
import useAsyncData from "../../common/useAsyncData";

export function usePartAssignment(part: string) {
  const [state, reFetch] = useAsyncData<IAssignmentResult>(
    () => getPartAssignment(part),
    [part]
  );

  const sorted = state.data?.sort((a, b) => compare(a, b));

  const { isloading, error } = state;

  return { isloading, error, data: sorted, reFetch };
}
