'use client'
import { useEffect, useState } from 'react'
import { SunIcon, MoonIcon } from '@heroicons/react/24/outline'

export default function ThemeToggle() {
  const [theme, setTheme] = useState(
    typeof window !== 'undefined' && document.documentElement.classList.contains('dark')
      ? 'dark'
      : 'light'
  )

  useEffect(() => {
    if (theme === 'dark') document.documentElement.classList.add('dark')
    else document.documentElement.classList.remove('dark')
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(t => (t === 'light' ? 'dark' : 'light'))}
      className="w-8 h-8 flex items-center justify-center hover:bg-neutral-100 dark:hover:bg-neutral-900"
    >
      {theme === 'light' ? (
        <MoonIcon className="w-5 h-5 text-neutral-600" />
      ) : (
        <SunIcon className="w-5 h-5 text-yellow-400" />
      )}
    </button>
  )
}
