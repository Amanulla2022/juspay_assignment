"use client"
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts"
import { useMemo, useState } from "react"

const data = [
  { name: "Direct", value: 300.56, color: "#000000" },
  { name: "Affiliate", value: 135.18, color: "#A6E3A1" },
  { name: "Sponsored", value: 154.02, color: "#A5B4FC" },
  { name: "E-mail", value: 48.96, color: "#93C5FD" },
]

export default function SalesDonutCard() {
  const total = useMemo(() => data.reduce((sum, d) => sum + d.value, 0), [])
  const [activeIndex, setActiveIndex] = useState(0)

  const percentage = ((data[activeIndex].value / total) * 100).toFixed(1)

  return (
    <section className="bg-white dark:bg-black p-6 rounded-xl shadow-card w-72">
      <h3 className="text-sm font-medium text-black">Total Sales</h3>

      <div className="relative flex items-center justify-center mt-4" style={{ height: 160 }}>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={70}
              paddingAngle={3}
              dataKey="value"
              onMouseLeave={() => setActiveIndex(0)}
            >
              {data.map((entry, i) => (
                <Cell
                  key={i}
                  fill={entry.color}
                  onMouseEnter={() => setActiveIndex(i)}
                />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>

        <div className="absolute bg-gray-800 text-white text-xs px-2 py-1 rounded-md">
          {percentage}%
        </div>
      </div>

      <ul className="mt-4 text-sm space-y-2">
        {data.map((d, i) => (
          <li key={i} className="flex justify-between items-center text-black">
            <div className="flex items-center space-x-2">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: d.color }}
              ></span>
              <span>{d.name}</span>
            </div>
            <span>${d.value.toFixed(2)}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
