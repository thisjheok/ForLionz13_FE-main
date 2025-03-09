import { useAllAssignment } from "..";
import { ERROR } from "../../../constants/message";
import { compare } from "../../../utils/date";

export default function useFilteredAssignment(part: string) {
  const { data, error } = useAllAssignment();

  if (error === "rejected") throw new Error(ERROR.ALL_ASSIGNMENT);

  const filteredPartData = data
    ?.filter((item) => item.part === part.toUpperCase())
    .sort((a, b) => compare(a, b));

  return filteredPartData;
}
