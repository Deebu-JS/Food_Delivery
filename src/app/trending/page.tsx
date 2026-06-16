import Link from "next/link"
import { Star } from "lucide-react"

export default function TrendingPage() {
  const TRENDING_PRODUCTS = [
    { id: "demo-1", name: "Organic Honeycrisp Apples", price: 6.99, rating: 4.8, reviews: 124, emoji: "🍎", category: "Fresh Fruits" },
    { id: "demo-2", name: "Whole Milk, 1 Gallon", price: 3.49, rating: 4.5, reviews: 89, emoji: "🥛", category: "Dairy & Eggs" },
    { id: "demo-3", name: "Artisan Sourdough Bread", price: 4.99, rating: 4.9, reviews: 210, emoji: "🥖", category: "Bakery" },
    { id: "demo-4", name: "Free Range Brown Eggs", price: 5.49, rating: 4.7, reviews: 156, emoji: "🥚", category: "Dairy & Eggs" },
    { id: "demo-5", name: "Cheddar Cheese Block", price: 4.29, rating: 4.6, reviews: 92, emoji: "🧀", category: "Dairy & Eggs" },
    { id: "demo-6", name: "Ribeye Steak", price: 14.99, rating: 4.8, reviews: 45, emoji: "🥩", category: "Meat & Seafood" },
    { id: "demo-7", name: "Fresh Broccoli", price: 2.99, rating: 4.6, reviews: 78, emoji: "🥦", category: "Fresh Vegetables" },
    { id: "demo-8", name: "Cola 12-Pack", price: 6.49, rating: 4.4, reviews: 312, emoji: "🥤", category: "Beverages" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>›</span>
        <span className="text-foreground">Trending Products</span>
      </div>

      <h1 className="text-3xl font-bold mb-2">Trending Products</h1>
      <p className="text-muted-foreground mb-8">Discover what other customers are buying right now.</p>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {TRENDING_PRODUCTS.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="group">
            <div className="bg-white rounded-xl shadow-sm border p-4 h-full flex flex-col hover:shadow-md transition-shadow">
              <div className="w-full aspect-square bg-orange-50 rounded-lg mb-4 flex items-center justify-center text-6xl">
                {product.emoji}
              </div>
              <div className="flex-1 flex flex-col">
                <p className="text-xs text-gray-500 mb-1">{product.category}</p>
                <h3 className="font-bold text-sm mb-2 group-hover:text-blue-600 line-clamp-2">{product.name}</h3>
                
                <div className="mt-auto">
                  <div className="flex items-center text-xs text-yellow-500 mb-2">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <span className="text-blue-600 ml-1 hover:underline">{product.reviews}</span>
                  </div>
                  <p className="text-xl font-bold">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
