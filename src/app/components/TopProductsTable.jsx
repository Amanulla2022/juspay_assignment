export default function TopProductsTable() {
  const products = [
    { name: "ASOS Ridley High Waist", price: "$79.49", qty: 82, amount: "$6,518.18" },
    { name: "Marco Lightweight Shirt", price: "$128.50", qty: 37, amount: "$4,754.50" },
    { name: "Half Sleeve Shirt", price: "$39.99", qty: 64, amount: "$2,559.34" },
    { name: "Lightweight Jacket", price: "$20.00", qty: 184, amount: "$3,680.00" },
    { name: "Marco Shoes", price: "$79.49", qty: 64, amount: "$1,965.81" },
  ]

  return (
    <section className="bg-white dark:bg-black p-6 rounded-xl shadow-card">
      <h3 className="text-lg font-semibold mb-4 text-black">Top Selling Products</h3>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-black/20 border-b dark:text-black/20">
              <th className="pb-2">Name</th>
              <th className="pb-2">Price</th>
              <th className="pb-2">Quantity</th>
              <th className="pb-2">Amount</th>
            </tr>
          </thead>
          <tbody>
            {products.map((p, i) => (
              <tr key={i} className="">
                <td className="py-4 text-black">{p.name}</td>
                <td className="text-black">{p.price}</td>
                <td className="text-black">{p.qty}</td>
                <td className="text-black">{p.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}
