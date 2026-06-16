import Image from "next/image"
import Link from "next/link"

const CATEGORIES = [
  { name: "Fresh Vegetables", icon: "🥦" },
  { name: "Fresh Fruits", icon: "🍎" },
  { name: "Dairy & Eggs", icon: "🥛" },
  { name: "Meat & Seafood", icon: "🥩" },
  { name: "Bakery", icon: "🥖" },
  { name: "Beverages", icon: "🥤" },
  { name: "Snacks", icon: "🥨" },
  { name: "Frozen Foods", icon: "🧊" },
  { name: "Household", icon: "🧻" },
]

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Category Navigation Bar */}
      <div className="bg-slate-800 text-white w-full overflow-x-auto">
        <div className="container mx-auto px-4 flex items-center h-10 space-x-6 whitespace-nowrap text-sm font-medium">
          <Link href="/all" className="hover:border-white border border-transparent px-1 rounded-sm">All</Link>
          <Link href="/todays-deals" className="hover:border-white border border-transparent px-1 rounded-sm">Today's Deals</Link>
          <Link href="/customer-service" className="hover:border-white border border-transparent px-1 rounded-sm">Customer Service</Link>
          <Link href="/restaurants" className="hover:border-white border border-transparent px-1 rounded-sm">Restaurants</Link>
          <Link href="/grocery" className="hover:border-white border border-transparent px-1 rounded-sm">Grocery</Link>
          <Link href="/electronics" className="hover:border-white border border-transparent px-1 rounded-sm">Electronics</Link>
        </div>
      </div>

      <main className="flex-1 bg-gray-100 pb-10">
        {/* Hero Section */}
        <div className="relative w-full h-[300px] md:h-[400px] bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center">
          <div className="text-center text-white z-10 p-6">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 drop-shadow-md">Fresh Groceries & Food Delivered</h1>
            <p className="text-xl mb-6 drop-shadow-md">Get everything you need in one place.</p>
            <Link href="/category/all" className="bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors shadow-lg">
              Shop Now
            </Link>
          </div>
          {/* Faded bottom gradient mimicking Amazon */}
          <div className="absolute bottom-0 w-full h-32 bg-gradient-to-t from-gray-100 to-transparent"></div>
        </div>

        <div className="container mx-auto px-4 -mt-20 relative z-20">
          {/* Categories Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white p-4 rounded-lg shadow-sm">
              <h2 className="text-xl font-bold mb-4">Shop by Category</h2>
              <div className="grid grid-cols-3 gap-4">
                {CATEGORIES.slice(0, 9).map((cat, idx) => (
                  <Link href={`/category/${cat.name.toLowerCase()}`} key={idx} className="flex flex-col items-center text-center group">
                    <div className="text-3xl mb-1 group-hover:scale-110 transition-transform">{cat.icon}</div>
                    <span className="text-[10px] leading-tight text-gray-700">{cat.name}</span>
                  </Link>
                ))}
              </div>
              <Link href="/categories" className="text-blue-600 text-sm mt-4 block hover:underline">See more</Link>
            </div>

            <Link href="/restaurants" className="bg-white p-4 rounded-lg shadow-sm flex flex-col group hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Restaurant Delivery</h2>
              <div className="flex-1 bg-orange-100 rounded-md flex items-center justify-center mb-4 group-hover:bg-orange-200 transition-colors">
                <span className="text-5xl">🍔</span>
              </div>
            </Link>

            <Link href="/category/fresh-fruits" className="bg-white p-4 rounded-lg shadow-sm flex flex-col group hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Fresh Fruits</h2>
              <div className="flex-1 bg-green-100 rounded-md flex items-center justify-center mb-4 group-hover:bg-green-200 transition-colors">
                <span className="text-5xl">🍉</span>
              </div>
            </Link>

            <Link href="/orders" className="bg-white p-4 rounded-lg shadow-sm flex flex-col group hover:shadow-md transition-shadow">
              <h2 className="text-xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Your Orders</h2>
              <div className="flex-1 bg-blue-100 rounded-md flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors">
                <span className="text-5xl">📦</span>
              </div>
            </Link>
          </div>

          {/* Trending Products Row */}
          <div className="bg-white p-6 rounded-lg shadow-sm">
            <div className="flex justify-between items-end mb-4">
              <h2 className="text-2xl font-bold">Trending Products</h2>
              <Link href="/trending" className="text-blue-600 hover:underline">See all</Link>
            </div>
            <div className="flex overflow-x-auto space-x-4 pb-4">
              {[
                { id: "demo-1", name: "Organic Honeycrisp Apples", price: 6.99, rating: 4.8, reviews: 124, emoji: "🍎" },
                { id: "demo-2", name: "Whole Milk, 1 Gallon", price: 3.49, rating: 4.5, reviews: 89, emoji: "🥛" },
                { id: "demo-3", name: "Artisan Sourdough Bread", price: 4.99, rating: 4.9, reviews: 210, emoji: "🥖" },
                { id: "demo-4", name: "Free Range Brown Eggs", price: 5.49, rating: 4.7, reviews: 156, emoji: "🥚" },
                { id: "demo-5", name: "Cheddar Cheese Block", price: 4.29, rating: 4.6, reviews: 92, emoji: "🧀" },
                { id: "demo-6", name: "Ribeye Steak", price: 14.99, rating: 4.8, reviews: 45, emoji: "🥩" },
              ].map((product) => (
                <Link href={`/product/${product.id}`} key={product.id} className="min-w-[150px] max-w-[150px] group cursor-pointer border p-2 rounded-md hover:shadow-md transition-shadow">
                  <div className="w-full h-32 bg-orange-50 rounded-md mb-2 flex items-center justify-center text-6xl">
                    {product.emoji}
                  </div>
                  <h3 className="text-sm font-medium truncate group-hover:text-blue-600">{product.name}</h3>
                  <div className="flex items-center text-xs text-yellow-500 mb-1">
                    ★★★★☆ <span className="text-blue-600 ml-1">{product.reviews}</span>
                  </div>
                  <p className="text-lg font-bold">${product.price.toFixed(2)}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
