import { useState, useMemo, useEffect } from "react";

type UsePaginationProps = {
  totalPages: number;
  maxVisibleButtons?: number;
};

type UsePaginationReturn = {
  currentPage: number;
  setCurrentPage: (page: number) => void;
  nextPage: () => void;
  prevPage: () => void;
  lastPage: () => void;
  firstPage: () => void;
  hasNextPage: boolean;
  hasPrevPage: boolean;
  visiblePages: number[]; // Now grouped
};

const usePagination = ({
  totalPages,
}: UsePaginationProps): UsePaginationReturn => {
  const [maxVisibleButtons, setMaxVisibleButtons] = useState(5)
  const [viewPortWidth, setViewPortWidth] = useState<number>(0);
  console.log("Viewport Width:", viewPortWidth);

  useEffect(() => {
    if (window) {
      setViewPortWidth(Number(window?.visualViewport?.width))
    }
  }, [])

  useEffect(() => {
    if (window && viewPortWidth < 400) {
      setMaxVisibleButtons(1)
    } else {
      setMaxVisibleButtons(5)
    }
  }, [viewPortWidth])

  const [currentPage, setCurrentPage] = useState(1);

  const hasNextPage = currentPage < totalPages;
  const hasPrevPage = currentPage > 1;

  const nextPage = () => {
    if (hasNextPage) setCurrentPage((prev) => prev + 1);
  };

  const prevPage = () => {
    if (hasPrevPage) setCurrentPage((prev) => prev - 1);
  };

  const lastPage = () => {
    if (totalPages > 0) setCurrentPage(totalPages);
  };

  const firstPage = () => {
    if (totalPages > 0) setCurrentPage(1);
  };

  // Grouped pagination logic (e.g., 1–5, 6–10, etc.)
  const visiblePages = useMemo(() => {
    const currentGroup = Math.floor((currentPage - 1) / maxVisibleButtons);
    const start = currentGroup * maxVisibleButtons + 1;
    const end = Math.min(start + maxVisibleButtons - 1, totalPages);

    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }, [currentPage, totalPages, maxVisibleButtons]);

  return {
    currentPage,
    setCurrentPage,
    nextPage,
    prevPage,
    lastPage,
    firstPage,
    hasNextPage,
    hasPrevPage,
    visiblePages,
  };
};

export default usePagination;
