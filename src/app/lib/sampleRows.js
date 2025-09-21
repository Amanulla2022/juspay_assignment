import { CalendarDaysIcon } from "@heroicons/react/24/outline"

const projects = [
  "Website Redesign",
  "Mobile App",
  "Marketing Campaign",
  "Dashboard UI",
  "E-commerce Store",
  "Portfolio Site",
]

const addresses = [
  "123 Main St, New York, NY",
  "42 Market Rd, San Francisco, CA",
  "7 Park Ave, Austin, TX",
  "99 Broadway, Los Angeles, CA",
  "55 Wall St, Chicago, IL",
  "88 King St, Seattle, WA",
]

const statuses = ["In Progress", "Complete", "Pending", "Approved", "Rejected"]

const users = [
  "Natali Craig",
  "Kate Morrison",
  "Drew Cano",
  "Orlando Diggs",
  "Andi Lane",
  "Koray",
]

function randomFrom(arr) {
  return arr[Math.floor(Math.random() * arr.length)]
}

function randomDate() {
  const d = new Date()
  d.setDate(d.getDate() - Math.floor(Math.random() * 10)) // within last 10 days
  return d.toISOString().split("T")[0] // yyyy-mm-dd
}

export default function useSampleItems(count = 20) {
  return Array.from({ length: count }, (_, i) => ({
    id: `CM${1000 + i}`,
    user: randomFrom(users),
    project: randomFrom(projects),
    address: randomFrom(addresses),
    date: randomDate(),
    status: randomFrom(statuses),
    time: (
      <div className="flex items-center gap-1 text-xs text-[var(--muted)]">
        <CalendarDaysIcon className="w-4 h-4" />
        {Math.floor(Math.random() * 50) + 1}m ago
      </div>
    ),
  }))
}
