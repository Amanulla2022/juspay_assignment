import { ArrowTrendingUpIcon, ArrowTrendingDownIcon } from "@heroicons/react/24/solid";

export default function MetricCard({ title, value, sub, className = "" }) {
  const isPositive = sub.startsWith("+");

  return (
    <div className={`p-5 rounded-xl shadow-card flex flex-col gap-2 ${className}`}>
      <p className="text-sm font-semibold text-gray-700">{title}</p>
      <div className="flex items-center justify-between mt-2">
        <p className="text-2xl font-semibold text-gray-900">{value}</p>
        <div className="flex items-center gap-1 text-sm px-2 py-[2px] rounded-md font-medium text-gray-700">
          {sub}
          {isPositive ? (
            <ArrowTrendingUpIcon className="h-4 w-4" />
          ) : (
            <ArrowTrendingDownIcon className="h-4 w-4" />
          )}
        </div>
      </div>
    </div>
  );
}
