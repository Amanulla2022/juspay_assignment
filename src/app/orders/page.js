'use client'

import { useState } from "react"
import OrdersTable from "../components/OrdersTable"
import SearchFilterSort from "../components/SearchFilterSort"

export default function OrdersPage() {
  const [filters, setFilters] = useState({
    search: "",
    status: "",
    category: "",
    sort: ""
  })

  return (
    <div className="space-y-6">
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold">Orders</h1>
      </div>

      <SearchFilterSort
        onSearch={(search) =>
          setFilters(prev => ({ ...prev, search }))
        }
      />

      <OrdersTable filters={filters} />
    </div>
  )
}
