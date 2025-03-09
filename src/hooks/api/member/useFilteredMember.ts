import { useAllMember } from ".";
import { ERROR } from "../../../constants/message";

export default function useFilteredMember(part: string) {
  const { error, data } = useAllMember();

  if (error === "rejected") {
    throw new Error(ERROR.ALL_MEMBER);
  }
  if (!data) return;

  const filterData = () => {
    const allStaff = data.filter(
      (item) => item.part === "STAFF" && +item.id !== 2
    );
    const all12th = data.filter((item) => item.part !== "STAFF");

    const balancedOrder = [];
    for (let i = 0; i < all12th.length; ++i) {
      if (i % 2 === 0 && i / 2 <= 10 && i !== 0) {
        balancedOrder.push(allStaff[i / 2 - 1]);
      }
      balancedOrder.push(all12th[i]);
    }

    if (part === "all") {
      return balancedOrder;
    }
    return data?.filter((item) => item.part === part.toUpperCase());
  };

  return filterData();
}
