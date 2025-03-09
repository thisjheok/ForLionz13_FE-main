import { ReactNode, useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import { URL_MAP } from "../../constants/url";

export default function DefaultScrollMotion({
  children,
}: {
  children: ReactNode;
}) {
  const { pathname, state } = useLocation();
  const { id } = useParams();

  useEffect(() => {
    if (pathname === `/${URL_MAP.ASSIGNMENT}/${id}`) {
      document.body.style.maxWidth = `${document.body.clientWidth}px`;
      document.body.style.overflowY = "hidden";
      return;
    }
    if (state?.history === "detail") {
      if (pathname === `/${URL_MAP.ASSIGNMENT}`) {
        document.body.style.maxWidth = "100vw";
        document.body.style.overflowY = "scroll";
        document.body.style.overflowX = "hidden";
        return;
      } else if (pathname !== `/${URL_MAP.ASSIGNMENT}`) {
        document.body.style.maxWidth = "100vw";
        document.body.style.overflowY = "scroll";
        document.body.style.overflowX = "hidden";
      }
    }

    window.scrollTo(0, 0);
  }, [pathname]);

  return <>{children}</>;
}
