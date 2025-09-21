'use client'
import { useState, useEffect } from 'react'
import useDebounce from '../lib/useDebounce'
import { FunnelIcon, ArrowsUpDownIcon, PlusIcon, MagnifyingGlassIcon } from '@heroicons/react/24/outline'

export default function SearchFilterSort({ onSearch }) {
  const [q, setQ] = useState('')
  const debounced = useDebounce(q, 300)

  useEffect(() => {
    if (onSearch) onSearch(debounced)
  }, [debounced, onSearch])

  return (
    <div className="flex flex-col md:flex-row gap-3 md:items-center md:justify-between mb-2">
      <div className="flex gap-2">
        <button type="button" className="flex items-center justify-center p-2 rounded hover:bg-gray-100">
          <PlusIcon className="w-5 h-5 text-gray-600" />
        </button>
        <button type="button" className="flex items-center justify-center p-2 rounded hover:bg-gray-100">
          <FunnelIcon className="w-5 h-5 text-gray-600" />
        </button>
        <button type="button" className="flex items-center justify-center p-2 rounded hover:bg-gray-100">
          <ArrowsUpDownIcon className="w-5 h-5 text-gray-600" />
        </button>
      </div>

      <div className="relative w-full md:w-[160px]">
        <MagnifyingGlassIcon className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
        <input
          type="search"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search"
          className="pl-10 pr-3 py-2 rounded-lg border border-gray-200 w-full focus:outline-none focus:ring-1 focus:ring-gray-300"
          aria-label="Search"
        />
      </div>
    </div>
  )
}
