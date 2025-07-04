import { useState, useMemo, useEffect } from "react";

type UsePaginationProps = {
  totalPages: number;
  maxVisibleButtons?: number; // optional prop
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
  visiblePages: number[];
};

const usePagination = ({
  totalPages,
  maxVisibleButtons: propMaxVisibleButtons,
}: UsePaginationProps): UsePaginationReturn => {
  const [maxVisibleButtons, setMaxVisibleButtons] = useState<number>(5);
  const [viewPortWidth, setViewPortWidth] = useState<number>(typeof window !== "undefined" ? window.innerWidth : 0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  // Resize listener to update viewport width
  useEffect(() => {
    const handleResize = () => {
      setViewPortWidth(window.innerWidth);
    };

    handleResize(); // Initial call
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Dynamically update maxVisibleButtons based on viewport (if prop not passed)
  useEffect(() => {
    if (typeof propMaxVisibleButtons === "number") {
      setMaxVisibleButtons(propMaxVisibleButtons);
    } else {
      if (viewPortWidth < 600) {
        setMaxVisibleButtons(2);
      } else {
        setMaxVisibleButtons(5);
      }
    }
  }, [viewPortWidth, propMaxVisibleButtons]);

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
