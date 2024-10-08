"use client";
import { useState } from "react";
import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const DevPaginationV2 = ({
  totalPages,
  initialPage = 1,
  onPageChange = () => {},
}) => {
  const [currentPage, setCurrentPage] = useState(initialPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
    onPageChange(page);
  };

  return (
    <div className="flex *:!select-none items-center bg-rtlLight dark:bg-rtlDark rounded-full p-1 border border-accentNeon/10 gap-2">
      <button
        onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="p-2 text-2xl rounded-full text-accentNeon hover:bg-accentNeon/50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <BiChevronLeft />
      </button>
      <p className="grid grid-cols-3 gap-3">
        <span>{currentPage}</span> of <span>{totalPages}</span>
      </p>
      <button
        onClick={() => handlePageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="p-2 text-2xl rounded-full text-accentNeon hover:bg-accentNeon/50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <BiChevronRight />
      </button>
    </div>
  );
};

export default DevPaginationV2;
