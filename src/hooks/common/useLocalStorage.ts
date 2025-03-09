import { ERROR } from "../../constants/message";

type KeyType = "part" | "id";
type StoreType = {
  [key: string]: string | number;
  part: string;
  id: number;
};

export default function useLocalStorage(key: KeyType[]) {
  const map = new Map();

  key.forEach((item) => {
    const value = localStorage.getItem(item);

    if (!value) {
      throw new Error(item === "part" ? ERROR.NO_PART : ERROR.NO_ID);
    }

    map.set(item, value);
  });

  const store: StoreType = {
    part: "",
    id: 0,
  };
  for (let [key, value] of map) {
    store[key] = value;
  }

  return store;
}
