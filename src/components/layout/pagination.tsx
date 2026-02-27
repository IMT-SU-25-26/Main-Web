"use client";

interface PaginationProps {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export default function Pagination({
  page,
  totalPages,
  onPageChange,
}: PaginationProps) {
  if (totalPages <= 1) return null;

  return (
    <div className="mt-8 flex items-center justify-center gap-2">
      <button
        onClick={() => onPageChange(Math.max(0, page - 1))}
        disabled={page === 0}
        className="font-family-impact rounded-full border-2 border-[#FF4712] px-4 py-1 text-sm text-[#FF4712] transition hover:bg-[#FF4712] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
      >
        ← Prev
      </button>

      {Array.from({ length: totalPages }, (_, i) => (
        <button
          key={i}
          onClick={() => onPageChange(i)}
          className={`font-family-impact h-8 w-8 rounded-full border-2 border-[#FF4712] text-sm transition ${
            i === page
              ? "bg-[#FF4712] text-white"
              : "bg-white text-[#FF4712] hover:bg-[#FF4712] hover:text-white"
          }`}
        >
          {i + 1}
        </button>
      ))}

      <button
        onClick={() => onPageChange(Math.min(totalPages - 1, page + 1))}
        disabled={page === totalPages - 1}
        className="font-family-impact rounded-full border-2 border-[#FF4712] px-4 py-1 text-sm text-[#FF4712] transition hover:bg-[#FF4712] hover:text-white disabled:cursor-not-allowed disabled:opacity-30"
      >
        Next →
      </button>
    </div>
  );
}
