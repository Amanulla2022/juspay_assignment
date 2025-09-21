"use client"
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts"

const rawData = [
  { name: "Jan", actual: 18, projection: 22 },
  { name: "Feb", actual: 21, projection: 25 },
  { name: "Mar", actual: 19, projection: 22 },
  { name: "Apr", actual: 23, projection: 29 },
  { name: "May", actual: 15, projection: 19 },
  { name: "Jun", actual: 21, projection: 26 },
]

const data = rawData.map(d => ({
  ...d,
  projectionDiff: d.projection - d.actual,
}))

export default function ProjectionCard() {
  return (
    <section className="bg-white pt-6 rounded-xl shadow-card h-full">
      <h3 className="text-sm font-semibold mb-3 px-6 text-black">Projections vs Actuals</h3>
      <div style={{ height: 200, width: 410 }}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="name" stroke="#A8C5DA" />
            <YAxis stroke="#A8C5DA" ticks={[10, 20, 30]} domain={[0, 30]} />
            <CartesianGrid stroke="#E5E7EB" vertical={false} />
            <Tooltip
              cursor={{ fill: "transparent" }}
              formatter={(value, name) => {
                if (name === "actual") return [`${value}M`, "Actual"]
                if (name === "projectionDiff") return [`+${value}M`, "Projection Gap"]
                return value
              }}
            />
            <Bar dataKey="actual" stackId="a" fill="#A8C5DA" barSize={25} />

            <Bar dataKey="projectionDiff" stackId="a" fill="#cfdeea" barSize={25} radius={[6, 6, 0, 0]} />

          </BarChart>
        </ResponsiveContainer>
      </div>
    </section>
  )
}
