import { ReactNode, createContext, useState } from "react";

export const ContactItemContext = createContext<ItemType>({
  clickedId: 0,
  toggle: () => {},
});

export function ItemContextProvider({ children }: { children: ReactNode }) {
  const [clickedId, setClickedId] = useState<number | null>(0);

  const onToggle = (id: number) => {
    setClickedId((prev) => (prev === id ? null : id));
  };

  return (
    <ContactItemContext.Provider
      value={{ clickedId: clickedId, toggle: onToggle }}
    >
      {children}
    </ContactItemContext.Provider>
  );
}

type ItemType = {
  clickedId: number | null;
  toggle: (e: number) => void;
};
