'use client'
import { useState } from 'react'
import {
  MagnifyingGlassIcon,
  BellIcon,
  ArrowPathIcon,
  ComputerDesktopIcon,
  StarIcon
} from '@heroicons/react/24/outline'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [query, setQuery] = useState('')

  return (
    <header className="h-14 bg-[var(--surface)] border-b border-neutral-200 flex items-center justify-between px-6">
      <div className="flex items-center gap-3">
        <ComputerDesktopIcon className="w-5 h-5 text-neutral-400 " />
        <StarIcon className="w-4 h-4 text-neutral-400 dark:text-neutral-500" />
        <span className="text-sm text-neutral-400 dark:text-neutral-500">Dashboards</span>
        <span className="text-neutral-300 dark:text-neutral-600">/</span>
        <span className="text-sm font-medium text-neutral-800 dark:text-neutral-100">
          Default
        </span>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative">
          <MagnifyingGlassIcon className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral-400 dark:text-neutral-500 w-4 h-4" />
          <input
            id="search"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search"
            className="w-56 pl-9 pr-10 py-1.5 text-sm rounded-lg bg-neutral-50 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-700 focus:outline-none text-neutral-900 dark:text-neutral-100 placeholder:text-neutral-400 dark:placeholder:text-neutral-500"
          />
          <span className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-neutral-400 dark:text-neutral-500">
            ⌘ /
          </span>
        </div>
        <ThemeToggle />

        <ArrowPathIcon className="w-5 h-5 text-neutral-600 dark:text-neutral-300 cursor-pointer" />
        <BellIcon className="w-5 h-5 text-neutral-600 dark:text-neutral-300 cursor-pointer" />
        <ComputerDesktopIcon className="w-5 h-5 text-neutral-600 dark:text-neutral-300 cursor-pointer" />
      </div>
    </header>
  )
}
