const Pagination = ({
  currentPage,
  totalItem,
  limit,
  onPageChange,
}: {
  currentPage: number;
  totalItem: number;
  limit: number;
  onPageChange: (page: number) => void;
}) => {
  const totalPage = Math.ceil(totalItem / limit);
  const pageNumbers = [];

  for (let i = 1; i <= totalPage; i++) {
    pageNumbers.push(i);
  }

  if (totalPage < 2) return null;

  return (
    <nav
      aria-label="Blog pagination"
      className="mt-8 mb-4 flex flex-wrap items-center justify-center gap-2 text-white sm:gap-3"
    >
      <button
        type="button"
        aria-label="Go to previous page"
        className="rounded-lg border border-white/10 bg-[#061a2d] px-3 py-2 text-sm font-semibold transition-colors hover:border-[#83c400]/50 hover:text-[#a4eb28] disabled:cursor-not-allowed disabled:opacity-40"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
      >
        Previous
      </button>

      {pageNumbers?.map((num) => (
        <button
          type="button"
          key={num}
          aria-label={`Go to page ${num}`}
          aria-current={currentPage === num ? "page" : undefined}
          className={`min-w-10 rounded-lg border px-3 py-2 text-sm font-bold transition-colors ${
            currentPage === num
              ? "border-[#83c400] bg-[#83c400] text-[#020d1a]"
              : "border-white/10 bg-[#061a2d] text-slate-300 hover:border-[#83c400]/50 hover:text-[#a4eb28]"
          }`}
          onClick={() => onPageChange(num)}
        >
          {num}
        </button>
      ))}

      <button
        type="button"
        aria-label="Go to next page"
        className="rounded-lg border border-white/10 bg-[#061a2d] px-3 py-2 text-sm font-semibold transition-colors hover:border-[#83c400]/50 hover:text-[#a4eb28] disabled:cursor-not-allowed disabled:opacity-40"
        disabled={currentPage === totalPage}
        onClick={() => onPageChange(currentPage + 1)}
      >
        Next
      </button>
    </nav>
  );
};

export default Pagination;
