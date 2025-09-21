"use client"
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Jan", current: 12000, previous: 8000 },
  { name: "Feb", current: 10000, previous: 20000 },
  { name: "Mar", current: 9000, previous: 18000 },
  { name: "Apr", current: 18000, previous: 12000 },
  { name: "May", current: 22000, previous: 13000 },
  { name: "Jun", current: 22000, previous: 25000 },
]

export default function RevenueChartCard() {
  return (
    <section className="bg-white p-6 rounded-xl shadow-card">
      <div className="flex items-center gap-6 mb-4">
        <h3 className="text-lg font-semibold text-black">Revenue</h3>
        <h3>|</h3>
        <p className="text-sm text-gray-500">Current Week <span className="font-semibold">$58,211</span></p>
        <p className="text-sm text-gray-500">Last week <span className="font-semibold">$68,768</span></p>
      </div>

      <div style={{ height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={data}>
            <XAxis dataKey="name" stroke="#94A3B8" />
            <YAxis stroke="#94A3B8" />
            <Tooltip />
            <Line type="monotone" dataKey="previous" stroke="#CBD5E1" strokeWidth={2} dot={false} />
            <Line type="monotone" dataKey="current" stroke="#000" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
