"use client"
import MetricCard from "./components/MetricCard"
import RevenueChartCard from "./components/RevenueChartCard"
import ProjectionCard from "./components/ProjectionCard"
import LocationCard from "./components/LocationCard"
import TopProductsTable from "./components/TopProductsTable"
import SalesDonutCard from "./components/SalesDonutCard"
import Link from "next/link"


export default function Home() {
  return (
    <div className="space-y-6">
      <h1 className="text-xl font-semibold">eCommerce</h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <MetricCard title="Customers" value="3,781" sub="+11.01%" className="bg-[#E3F5FF]" />
          <Link href="/orders">
            <MetricCard title="Orders" value="1,219" sub="-0.03%" className="bg-[#F7F9FB]" />
          </Link>
          <MetricCard title="Revenue" value="$695" sub="+15.03%" className="bg-[#F7F9FB]" />
          <MetricCard title="Growth" value="30.1%" sub="+6.08%" className="bg-[#E5ECF6]" />
        </div>

        <div>
          <ProjectionCard />
        </div>
      </div>


      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-6">
          <RevenueChartCard />
          <TopProductsTable />
        </div>

        <aside className="space-y-6">
          <LocationCard />
          <SalesDonutCard />
        </aside>
      </div>
    </div>
  )
}
