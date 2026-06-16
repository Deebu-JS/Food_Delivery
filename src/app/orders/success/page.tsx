import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

export default function OrderSuccessPage() {
  return (
    <div className="container mx-auto px-4 py-20 flex flex-col items-center justify-center text-center">
      <CheckCircle2 className="w-24 h-24 text-green-500 mb-6" />
      <h1 className="text-4xl font-bold mb-4">Order Placed Successfully!</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-lg">
        Thank you for shopping with FoodCommerce. Your order has been received and is being processed.
      </p>
      
      <div className="bg-gray-50 p-6 rounded-lg w-full max-w-md mb-8 border text-left">
        <h2 className="font-bold text-lg mb-2">Order Details</h2>
        <div className="text-sm text-gray-600 mb-1"><span className="font-medium">Order ID:</span> ORD-{Math.floor(Math.random() * 1000000)}</div>
        <div className="text-sm text-gray-600"><span className="font-medium">Status:</span> Payment Confirmed - Store Accepted</div>
      </div>

      <div className="flex gap-4">
        <Link href="/orders" className="bg-blue-600 text-white font-medium px-6 py-3 rounded-md hover:bg-blue-700 transition-colors">
          Track Order
        </Link>
        <Link href="/" className="bg-white border text-gray-900 font-medium px-6 py-3 rounded-md hover:bg-gray-50 transition-colors">
          Continue Shopping
        </Link>
      </div>
    </div>
  )
}
