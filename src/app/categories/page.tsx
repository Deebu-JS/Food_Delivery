import Link from "next/link"

const CATEGORIES = [
  { name: "Fresh Vegetables", icon: "🥦", description: "Farm fresh vegetables delivered daily." },
  { name: "Fresh Fruits", icon: "🍎", description: "Seasonal fruits picked at peak ripeness." },
  { name: "Dairy & Eggs", icon: "🥛", description: "Milk, cheese, butter, and farm-fresh eggs." },
  { name: "Meat & Seafood", icon: "🥩", description: "Premium cuts and fresh catches." },
  { name: "Bakery", icon: "🥖", description: "Freshly baked bread, pastries, and cakes." },
  { name: "Beverages", icon: "🥤", description: "Juices, sodas, tea, and coffee." },
  { name: "Snacks", icon: "🥨", description: "Chips, nuts, crackers, and sweet treats." },
  { name: "Frozen Foods", icon: "🧊", description: "Ready-to-eat meals and frozen veggies." },
  { name: "Household", icon: "🧻", description: "Cleaning supplies and paper products." },
]

export default function CategoriesPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>›</span>
        <span className="text-foreground">All Categories</span>
      </div>

      <h1 className="text-3xl font-bold mb-8">Shop by Category</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {CATEGORIES.map((cat, idx) => (
          <Link href={`/category/${cat.name.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`} key={idx} className="group">
            <div className="bg-white rounded-xl shadow-sm border p-6 flex items-center gap-4 hover:shadow-md transition-shadow hover:border-blue-200">
              <div className="w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center text-3xl group-hover:scale-110 transition-transform">
                {cat.icon}
              </div>
              <div>
                <h3 className="font-bold text-lg group-hover:text-blue-600">{cat.name}</h3>
                <p className="text-sm text-gray-500 line-clamp-2">{cat.description}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
