import Link from "next/link"
import { Package, Truck, CheckCircle, MapPin } from "lucide-react"

export default function OrdersPage() {
  const activeOrder = {
    id: "ORD-123456",
    status: "OUT_FOR_DELIVERY",
    items: 3,
    total: 35.97,
    date: "Today, 12:30 PM",
    eta: "1:15 PM"
  }

  const pastOrders = [
    { id: "ORD-987654", date: "May 12, 2026", total: 124.50, items: 12, status: "Delivered" },
    { id: "ORD-543210", date: "April 28, 2026", total: 18.99, items: 2, status: "Delivered" },
  ]

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <h1 className="text-3xl font-bold mb-8">Your Orders</h1>

      {/* Active Order Tracking */}
      <div className="bg-white rounded-xl shadow-sm border p-6 mb-8">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h2 className="text-xl font-bold">Arriving {activeOrder.eta}</h2>
            <p className="text-muted-foreground">Order #{activeOrder.id}</p>
          </div>
          <div className="text-right">
            <p className="font-medium">${activeOrder.total.toFixed(2)} • {activeOrder.items} items</p>
            <Link href={`/orders/${activeOrder.id}`} className="text-blue-600 hover:underline text-sm">View details</Link>
          </div>
        </div>

        {/* Live Tracking Map Placeholder */}
        <div className="w-full h-48 bg-blue-50 rounded-lg mb-6 flex items-center justify-center border border-blue-100 relative overflow-hidden">
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
          <div className="flex items-center gap-2 text-blue-800 font-medium z-10 bg-white px-4 py-2 rounded-full shadow-sm">
            <MapPin className="w-4 h-4" /> Live Map Tracking Active
          </div>
        </div>

        {/* Timeline Progress Bar */}
        <div className="relative pt-8 pb-4">
          <div className="absolute top-1/2 left-0 w-full h-1 bg-gray-200 -translate-y-1/2"></div>
          <div className="absolute top-1/2 left-0 w-3/4 h-1 bg-green-500 -translate-y-1/2 transition-all duration-1000"></div>
          
          <div className="relative flex justify-between">
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center z-10 shadow-sm">
                <CheckCircle className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium mt-2 text-green-700">Placed</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center z-10 shadow-sm">
                <Package className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium mt-2 text-green-700">Packed</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-green-500 text-white flex items-center justify-center z-10 shadow-sm">
                <Truck className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium mt-2 text-green-700">Out for Delivery</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-gray-200 text-gray-400 flex items-center justify-center z-10">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-xs font-medium mt-2 text-gray-500">Delivered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Past Orders */}
      <h2 className="text-2xl font-bold mb-4">Past Orders</h2>
      <div className="space-y-4">
        {pastOrders.map(order => (
          <div key={order.id} className="bg-white rounded-lg shadow-sm border p-4 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-gray-50 transition-colors">
            <div>
              <div className="font-medium">{order.date}</div>
              <div className="text-sm text-gray-500">Order #{order.id}</div>
            </div>
            <div className="flex flex-row md:flex-col justify-between md:items-end gap-2 md:gap-0">
              <div className="font-bold">${order.total.toFixed(2)}</div>
              <div className="text-sm text-gray-500">{order.items} items • <span className="text-green-600 font-medium">{order.status}</span></div>
            </div>
            <div className="flex gap-2">
              <button className="px-4 py-2 bg-yellow-400 font-medium rounded-md text-sm hover:bg-yellow-500 transition-colors w-full md:w-auto">
                Reorder
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
