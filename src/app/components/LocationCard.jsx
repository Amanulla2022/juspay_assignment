export default function LocationCard() {
  const data = [
    { city: "New York", value: 72 },
    { city: "San Francisco", value: 39 },
    { city: "Sydney", value: 25 },
    { city: "Singapore", value: 61 },
  ];

  return (
    <section className="bg-white p-6 rounded-xl shadow-card w-80">
      <h3 className="text-sm font-medium text-black">
        Revenue by Location
      </h3>

      <div className="mt-4 w-full h-36 bg-gray-100 rounded-lg flex items-center justify-center text-black text-xs">
        Map Placeholder
      </div>

      <ul className="mt-4 space-y-4">
        {data.map((item) => (
          <li key={item.city}>
            <div className="flex justify-between text-sm text-black">
              <span>{item.city}</span>
              <span>{item.value}K</span>
            </div>
            <div className="w-full h-[3px] bg-gray-100 rounded-full mt-1">
              <div
                className="h-[2px] bg-[#A8C5DA] rounded-full"
                style={{
                  width: `${item.value}%`,
                }}
              />
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
