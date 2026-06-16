import Image from "next/image"
import Link from "next/link"
import { Star, Truck, ShieldCheck, MapPin } from "lucide-react"
import { AddToCartButton } from "./AddToCartButton"

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  
  // Mock product data for the UI
  const product = {
    id: id,
    name: "Organic Honeycrisp Apples, 2 lbs",
    brand: "Fresh Farms",
    price: 6.99,
    originalPrice: 8.99,
    rating: 4.8,
    reviews: 124,
    description: "Crisp, sweet, and perfectly tart. These organic Honeycrisp apples are grown without synthetic pesticides and picked at peak ripeness.",
    stock: 45,
    unit: "2 lbs bag",
    storeId: "demo-vendor",
  }

  const discount = Math.round((1 - product.price / product.originalPrice) * 100)

  return (
    <div className="container mx-auto px-4 py-8">
      {/* Breadcrumb */}
      <div className="text-sm text-muted-foreground mb-6 flex items-center gap-2">
        <Link href="/" className="hover:underline">Home</Link>
        <span>›</span>
        <Link href="/category/fresh-fruits" className="hover:underline">Fresh Fruits</Link>
        <span>›</span>
        <span className="text-foreground truncate max-w-[200px]">{product.name}</span>
      </div>

      <div className="bg-white rounded-xl shadow-sm border p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Image Gallery */}
          <div className="lg:col-span-1 flex flex-col items-center">
            <div className="relative w-full aspect-square bg-gray-100 rounded-lg overflow-hidden mb-4 border">
              <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                <span className="text-6xl">🍎</span>
              </div>
            </div>
            <div className="flex gap-2 w-full overflow-x-auto pb-2">
              {[1, 2, 3].map(i => (
                <div key={i} className="w-16 h-16 border-2 border-transparent hover:border-blue-500 rounded cursor-pointer bg-gray-100 flex items-center justify-center flex-shrink-0">
                  🍎
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="lg:col-span-1 space-y-4">
            <h1 className="text-2xl md:text-3xl font-bold leading-tight">{product.name}</h1>
            <Link href={`/brand/${product.brand}`} className="text-blue-600 hover:underline">Brand: {product.brand}</Link>
            
            <div className="flex items-center gap-2">
              <div className="flex text-yellow-500">
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current" />
                <Star className="w-5 h-5 fill-current text-gray-300" />
              </div>
              <span className="text-blue-600 hover:underline cursor-pointer">{product.rating} ({product.reviews} ratings)</span>
            </div>

            <hr className="my-4" />

            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">${product.price.toFixed(2)}</span>
                <span className="text-gray-500 line-through">${product.originalPrice.toFixed(2)}</span>
              </div>
              <p className="text-sm text-green-600 font-semibold">You save {discount}%</p>
              <p className="text-sm text-muted-foreground">Unit: {product.unit}</p>
            </div>

            <div className="pt-4 space-y-2">
              <h3 className="font-semibold text-lg">About this item</h3>
              <p className="text-gray-700 leading-relaxed">{product.description}</p>
            </div>
          </div>

          {/* Buy Box */}
          <div className="lg:col-span-1">
            <div className="border rounded-xl p-6 space-y-6 sticky top-24">
              <div className="text-2xl font-bold">${product.price.toFixed(2)}</div>
              
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-0.5 flex-shrink-0" />
                  <div className="text-sm">
                    <span className="text-blue-600 hover:underline cursor-pointer">Deliver to John - New York 10001</span>
                  </div>
                </div>
                
                <h3 className={product.stock > 0 ? "text-green-700 font-bold text-lg" : "text-red-600 font-bold text-lg"}>
                  {product.stock > 0 ? "In Stock." : "Out of Stock"}
                </h3>
                
                {product.stock > 0 && (
                  <AddToCartButton 
                    product={{
                      id: product.id,
                      name: product.name,
                      price: product.price,
                      storeId: product.storeId
                    }} 
                  />
                )}
                
                <div className="flex items-center gap-2 text-sm text-gray-600 mt-4">
                  <ShieldCheck className="w-4 h-4 text-gray-400" />
                  <span>Secure transaction</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                  <Truck className="w-4 h-4 text-gray-400" />
                  <span>Ships from FoodCommerce</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
