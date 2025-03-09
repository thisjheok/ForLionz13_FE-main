export const variants = {
  initial: { height: "80px" },
  hover: {
    scale: 1.01,
    boxShadow: "0px 2px 8px rgba(250, 182, 173, 0.5)",
    transition: {
      duration: 0.2,
    },
  },
  click: {
    height: "100%",
    transition: {
      type: "spring",
      damping: 8,
      duration: 0.1,
    },
  },
};
