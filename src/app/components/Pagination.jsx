'use client'
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline"

export default function Pagination({ page = 1, setPage, totalPages = 1 }) {
  if (totalPages <= 1) return null
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)

  return (
    <nav className="flex items-center gap-2" aria-label="Pagination">
      <button
        onClick={() => setPage(p => Math.max(1, p - 1))}
        disabled={page === 1}
        className="p-2 rounded-md bg-gray-200 cursor-pointer disabled:opacity-50"
      >
        <ChevronLeftIcon className="w-5 h-5 text-gray-700" />
      </button>

      {pages.map(p => (
        <button
          key={p}
          onClick={() => setPage(p)}
          className={`px-3 py-1 rounded-md ${
            p === page
              ? 'bg-gray-700 text-white'
              : 'bg-gray-100 text-gray-800 hover:bg-gray-200 cursor-pointer'
          }`}
        >
          {p}
        </button>
      ))}

      <button
        onClick={() => setPage(p => Math.min(totalPages, p + 1))}
        disabled={page === totalPages}
        className="p-2 rounded-md bg-gray-200 cursor-pointer disabled:opacity-50"
      >
        <ChevronRightIcon className="w-5 h-5 text-gray-700" />
      </button>
    </nav>
  )
}
