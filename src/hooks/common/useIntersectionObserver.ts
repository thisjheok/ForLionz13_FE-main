import { useEffect, useRef } from "react";

interface IObserver extends IntersectionObserverInit {
  onIntersect: IntersectionObserverCallback;
}

export function useIntersectionObserver<T extends Element>({
  onIntersect,
  root,
  rootMargin,
  threshold,
}: IObserver) {
  const targetRef = useRef<T>(null);

  useEffect(() => {
    if (!targetRef.current) return;

    const io = new IntersectionObserver(onIntersect, {
      root,
      rootMargin,
      threshold,
    });

    io.observe(targetRef.current);

    return () => io.disconnect();
  }, [root, rootMargin, threshold, onIntersect]);

  return { targetRef };
}
