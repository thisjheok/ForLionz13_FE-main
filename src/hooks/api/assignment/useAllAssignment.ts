import { getAllAssignment } from "../../../api/assignment";
import { IAssignmentResult } from "../../../types";
import useAsyncData from "../../common/useAsyncData";

export function useAllAssignment() {
  const [state, fetchData] = useAsyncData<IAssignmentResult>(
    getAllAssignment,
    []
  );

  const { isloading, error, data } = state;

  return { isloading, error, data, fetchData };
}
