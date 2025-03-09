import { useRef, useEffect } from "react";

function useResponsivebar(
  type: "sidebar" | "lisepost",
  top: string,
  left: string
) {
  const ref = useRef<HTMLDivElement>(null);

  const SidebarControl = () => {
    const origin_y = ref.current?.getBoundingClientRect().top;

    const pos_y = window.scrollY;
    const obj = ref.current?.style;

    if (!obj) return;
    if (!origin_y) return;

    if (type === "sidebar") {
      if (window.innerWidth <= 900) {
        ref.current.style.position = "static";
        return;
      }

      if (pos_y > (window.innerHeight * 7) / 10) {
        ref.current.style.position = "fixed";
        ref.current.style.top = "80px";
      } else {
        ref.current.style.position = "absolute";
        ref.current.style.left = left;
        ref.current.style.top = top;
      }
    } else if (type === "lisepost") {
      if (window.innerWidth <= 900) {
        ref.current.style.position = "static";
        return;
      }

      if (pos_y > 100) {
        ref.current.style.position = "fixed";
        ref.current.style.top = "80px";
      } else {
        ref.current.style.position = "absolute";
        ref.current.style.left = left;
        ref.current.style.top = top;
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", SidebarControl);
    window.addEventListener("resize", SidebarControl);

    return () => {
      window.removeEventListener("scroll", SidebarControl);
      window.removeEventListener("resize", SidebarControl);
    };
  }, []);

  return ref;
}
export default useResponsivebar;
