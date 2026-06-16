import Link from "next/link"
import { Star } from "lucide-react"

export default async function CategoryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  
  // Format slug to readable title (handles both hyphenated and URL-encoded slugs)
  const decodedSlug = decodeURIComponent(slug).replace(/-/g, ' ')
  const categoryName = decodedSlug
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')

  const PRODUCTS = [
    { id: "cat-1", name: `Premium ${categoryName} Item 1`, price: 4.99, rating: 4.8, reviews: 124, emoji: "🌟" },
    { id: "cat-2", name: `Organic ${categoryName} Pack`, price: 8.49, rating: 4.5, reviews: 89, emoji: "✨" },
    { id: "cat-3", name: `Fresh ${categoryName} Bundle`, price: 12.99, rating: 4.9, reviews: 210, emoji: "📦" },
    { id: "cat-4", name: `Local ${categoryName} Selection`, price: 6.49, rating: 4.7, reviews: 156, emoji: "🛒" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>›</span>
        <Link href="/categories" className="hover:underline">Categories</Link>
        <span>›</span>
        <span className="text-foreground">{categoryName}</span>
      </div>

      <div className="flex justify-between items-end mb-8 border-b pb-4">
        <div>
          <h1 className="text-3xl font-bold mb-2">{categoryName}</h1>
          <p className="text-muted-foreground">Showing results for {categoryName.toLowerCase()}</p>
        </div>
        <div className="flex gap-2">
          <select className="border rounded-md px-3 py-2 text-sm bg-white">
            <option>Sort by: Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
            <option>Avg. Customer Review</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {PRODUCTS.map((product) => (
          <Link href={`/product/${product.id}`} key={product.id} className="group">
            <div className="bg-white rounded-xl shadow-sm border p-4 h-full flex flex-col hover:shadow-md transition-shadow">
              <div className="w-full aspect-square bg-green-50 rounded-lg mb-4 flex items-center justify-center text-6xl">
                {product.emoji}
              </div>
              <div className="flex-1 flex flex-col">
                <p className="text-xs text-gray-500 mb-1">{categoryName}</p>
                <h3 className="font-bold text-sm mb-2 group-hover:text-blue-600 line-clamp-2">{product.name}</h3>
                
                <div className="mt-auto">
                  <div className="flex items-center text-xs text-yellow-500 mb-2">
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 fill-current" />
                    <Star className="w-3 h-3 text-gray-300 fill-current" />
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
