import { useState, useRef, useCallback } from "react";

export function useInfiniteScroll(pageSize: number = 24) {
  const [page, setPage] = useState(1);
  const observer = useRef<IntersectionObserver | null>(null);

  const lastElementRef = useCallback(
    (node: HTMLElement | null) => {
      if (observer.current) observer.current.disconnect();

      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prev) => prev + 1);
        }
      });

      if (node) observer.current.observe(node);
    },
    []
  );

  const getCurrentItems = <T,>(items: T[]) => items.slice(0, page * pageSize);

  return {
    page,
    lastElementRef,
    getCurrentItems,
  };
}
