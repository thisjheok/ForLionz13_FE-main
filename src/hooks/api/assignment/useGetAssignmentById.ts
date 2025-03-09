import { getIdAssignment } from "../../../api/assignment";
import { IAssignment } from "../../../types";
import useAsyncData from "../../common/useAsyncData";

export function useGetAssignmentById(AssignmentId: number | undefined) {
  if (AssignmentId === undefined) {
    return {
      data: null,
    };
  }

  const [state, reFetch] = useAsyncData<IAssignment>(
    () => getIdAssignment(AssignmentId),
    [AssignmentId]
  );

  const { isloading, error, data } = state;

  return {
    isloading,
    error,
    data,
    reFetch,
  };
}
