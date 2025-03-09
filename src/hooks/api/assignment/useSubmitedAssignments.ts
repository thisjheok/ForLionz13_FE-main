import { getSubmittedAssignment } from "../../../api/assignment";
import { ISubmitted } from "../../../types";
import useAsyncData from "../../common/useAsyncData";

export function useSubmittedAssignments(id: number) {
  const [state, reFetch] = useAsyncData<ISubmitted[]>(
    () => getSubmittedAssignment(id),
    [id]
  );

  const { isloading, error, data } = state;

  return { isloading, error, data, reFetch };
}
