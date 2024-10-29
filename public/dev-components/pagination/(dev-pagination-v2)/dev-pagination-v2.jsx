import { BiChevronLeft, BiChevronRight } from "react-icons/bi";

const DevPaginationV2 = ({
  totalPages,
  initialPage = 1,
  onPageChange = () => {},
}) => {
  return (
    <div className="flex *:!select-none items-center bg-LIGHT dark:bg-DARK rounded-full p-1 border border-ACCENT/10 gap-2">
      <button
        onClick={() => onPageChange(Math.max(1, initialPage - 1))}
        disabled={initialPage === 1}
        className="p-2 text-2xl rounded-full text-ACCENT hover:bg-ACCENT/50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <BiChevronLeft />
      </button>
      <p className="grid grid-cols-3 gap-3">
        <span>{initialPage}</span> of <span>{totalPages}</span>
      </p>
      <button
        onClick={() => onPageChange(Math.min(totalPages, initialPage + 1))}
        disabled={initialPage === totalPages}
        className="p-2 text-2xl rounded-full text-ACCENT hover:bg-ACCENT/50 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <BiChevronRight />
      </button>
    </div>
  );
};

export default DevPaginationV2;
