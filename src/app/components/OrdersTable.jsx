'use client'
import { useMemo, useState, useEffect } from 'react'
import Pagination from './Pagination'
import useSampleItems from '../lib/sampleRows'
import Koray from '@/../public/assets/people/koray.png'
import Natali from '@/../public/assets/people/natali.png'
import Kate from '@/../public/assets/people/kate.png'
import Drew from '@/../public/assets/people/drew.png'
import Orlando from '@/../public/assets/people/orlando.png'
import Andi from '@/../public/assets/people/andi.png'

const userImages = {
  'Natali Craig': Natali,
  'Kate Morrison': Kate,
  'Drew Cano': Drew,
  'Orlando Diggs': Orlando,
  'Andi Lane': Andi,
  'Koray': Koray,
}

const statusStyles = {
  "In Progress": "text-blue-600",
  "Complete": "text-green-600",
  "Pending": "text-yellow-600",
  "Approved": "text-purple-600",
  "Rejected": "text-gray-600",
}

export default function OrdersTable({ filters }) {
  const rows = useMemo(() => useSampleItems(45), []) 
  const pageSize = 10
  const [page, setPage] = useState(1)
  useEffect(() => setPage(1), [filters.search])

  const filtered = useMemo(() => {
    return rows.filter(r =>
      r.user.toLowerCase().includes(filters.search.toLowerCase())
    )
  }, [rows, filters.search])

  const totalPages = Math.ceil(filtered.length / pageSize)
  const pageRows = filtered.slice((page - 1) * pageSize, page * pageSize)

  return (
    <div className="bg-[var(--surface)] rounded-xl shadow-card p-4">
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead className="text-xs text-gray-400">
            <tr className="text-left">
              <th className="py-3 pr-4">Order ID</th>
              <th className="py-3 pr-4">User</th>
              <th className="py-3 pr-4">Project</th>
              <th className="py-3 pr-4">Address</th>
              <th className="py-3 pr-4">Time</th>
              <th className="py-3 pr-4">Status</th>
            </tr>
          </thead>

          <tbody>
            {pageRows.map(r => (
              <tr key={r.id} className="border-t border-neutral-100 dark:border-neutral-800 text-sm">
                <td className="py-3 pr-4">#{r.id}</td>
                <td className="py-3 pr-4 flex items-center gap-2">
                  <img 
                    src={userImages[r.user]?.src || Koray.src} 
                    alt={r.user} 
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  {r.user}
                </td>
                <td className="py-3 pr-4">{r.project}</td>
                <td className="py-3 pr-4">{r.address}</td>
                <td className="py-3 pr-4">{r.time}</td>
                <td className="py-3 pr-4">
                  <span
                    className={`inline-flex items-center gap-2 text-xs px-3 py-1 rounded-md font-medium ${statusStyles[r.status] || "bg-neutral-100 text-neutral-600 dark:bg-neutral-900 dark:text-neutral-400"}`}
                  >
                    <span className="w-2 h-2 rounded-full bg-current"></span>
                    {r.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-4 flex items-center justify-end">
        <Pagination page={page} setPage={setPage} totalPages={totalPages} />
      </div>
    </div>
  )
}
