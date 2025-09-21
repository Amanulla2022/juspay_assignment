'use client'

import Image from 'next/image'
import React, { useState } from 'react'
import my_profile from '@/../public/assets/aman.jpeg'
import {
  ChartPieIcon,
  ShoppingBagIcon,
  FolderIcon,
  BookOpenIcon,
  ChevronRightIcon,
  UserCircleIcon,
  PhotoIcon,
  UsersIcon,
  ChatBubbleOvalLeftEllipsisIcon
} from "@heroicons/react/24/outline"

export default function Sidebar() {
  const [active, setActive] = useState("Default")

  const menuItems = [
    { name: "Default", icon: ChartPieIcon },
    { name: "eCommerce", icon: ShoppingBagIcon },
    { name: "Projects", icon: FolderIcon },
    { name: "Online Course", icon: BookOpenIcon },
  ]

  const pages = [
    { icon: UserCircleIcon, label: "User Profile", sub: ["Overview","Projects","Campaigns","Documents","Followers"] },
    { icon: PhotoIcon, label: "Account" },
    { icon: UsersIcon, label: "Corporate" },
    { icon: BookOpenIcon, label: "Blog" },
    { icon: ChatBubbleOvalLeftEllipsisIcon, label: "Social" },
  ]

  return (
    <aside className="bg-[var(--surface)] border-r border-[var(--muted)] w-52 hidden md:flex flex-col transition-all duration-200">
      <div className="p-4 px-6 pb-6 flex items-center gap-3">
        <Image
          src={my_profile}
          alt="My Profile"
          className="w-10 h-10 rounded-full object-cover"
        />
        <p className="text-[var(--text)] text-xl font-medium">Amanulla</p>
      </div>

      <div className="space-y-4 px-6">
        <div className="flex space-x-4 font-medium">
          <span className="text-[var(--muted)]">Favorites</span>
          <span className="text-[var(--muted)]/50">Recently</span>
        </div>

        <ul className="space-y-2">
          <li className="flex items-center space-x-2">
            <span className="w-[6px] h-[6px] rounded-full bg-[var(--muted)]/50"></span>
            <span className="text-[var(--text)] text-sm">Overview</span>
          </li>
          <li className="flex items-center space-x-2">
            <span className="w-[6px] h-[6px] rounded-full bg-[var(--muted)]/50"></span>
            <span className="text-[var(--text)] text-sm">Projects</span>
          </li>
        </ul>
      </div>
      <nav className="px-6 pt-6 flex-1">
        <span className="text-[var(--muted)] text-sm">Dashboard</span>
        {menuItems.map((item) => {
          const isActive = active === item.name
          return (
            <button
              key={item.name}
              onClick={() => setActive(item.name)}
              className={`relative w-full flex items-center mt-1 gap-2 px-2 py-1 rounded-lg transition-colors
                ${isActive
                  ? "bg-[var(--bg)] text-[var(--text)] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-6 before:bg-[var(--text)] before:rounded-r"
                  : "text-[var(--muted)] hover:bg-[var(--bg)]"
                }`}
            >
              {isActive ? <span className="w-3" /> : <ChevronRightIcon className="w-4 h-4 text-[var(--muted)]" />}
              <item.icon className="w-5 h-5" />
              <span className="text-sm font-medium">{item.name}</span>
            </button>
          )
        })}
      </nav>

      <nav className="px-6 flex-1">
        <span className="text-[var(--muted)] text-sm">Pages</span>

        <ul className="mt-2 space-y-2">
          {pages.map((page) => (
            <li key={page.label}>
              <button className="flex items-center gap-2 w-full py-1 px-2 rounded-lg text-[var(--muted)] hover:bg-[var(--bg)] transition-colors">
                <ChevronRightIcon className="w-4 h-4 text-[var(--muted)]" />
                <page.icon className="w-5 h-5" />
                <span className="text-sm font-medium text-[var(--text)]">{page.label}</span>
              </button>
              {page.sub && (
                <ul className="ml-8 pl-6 mt-1 space-y-1">
                  {page.sub.map((sub) => (
                    <li key={sub}>
                      <a className="block text-sm text-[var(--muted)] hover:text-[var(--text)]">{sub}</a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </nav>

    </aside>
  )
}
