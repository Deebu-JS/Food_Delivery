"use client"

import { useCartStore } from "@/store/useCartStore"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function CheckoutPage() {
  const { items, getTotal, clearCart } = useCartStore()
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const subtotal = getTotal()
  const tax = subtotal * 0.08
  const deliveryFee = subtotal > 50 ? 0 : 5.99
  const total = subtotal + tax + deliveryFee

  const handlePlaceOrder = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      // In a real app, you'd send this to an API that processes payment
      // and creates the order in the database.
      // Demo: Always route to demo vendor
      const orderPayload = {
        items: items.map(item => ({ ...item, storeId: "demo-vendor" })),
        total,
        vendorOverride: "demo-vendor"
      }
      console.log("Processing order for demo vendor:", orderPayload)
      
      await new Promise(resolve => setTimeout(resolve, 2000)) // Mock delay
      
      clearCart()
      router.push("/orders/success")
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your cart is empty</h1>
        <button onClick={() => router.push("/")} className="bg-yellow-400 font-bold px-6 py-2 rounded-full">Go Shopping</button>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Checkout</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-6">
          <form id="checkout-form" onSubmit={handlePlaceOrder} className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-bold mb-4">1. Delivery Address</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <input required type="text" placeholder="Full Name" className="border rounded-md px-3 py-2 w-full" />
                <input required type="text" placeholder="Phone Number" className="border rounded-md px-3 py-2 w-full" />
                <input required type="text" placeholder="Street Address" className="border rounded-md px-3 py-2 w-full md:col-span-2" />
                <input required type="text" placeholder="City" className="border rounded-md px-3 py-2 w-full" />
                <input required type="text" placeholder="Zip Code" className="border rounded-md px-3 py-2 w-full" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm border">
              <h2 className="text-xl font-bold mb-4">2. Payment Method</h2>
              <div className="space-y-3">
                <label className="flex items-center gap-3 p-3 border rounded-md cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" defaultChecked className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">Credit / Debit Card</span>
                </label>
                <label className="flex items-center gap-3 p-3 border rounded-md cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">UPI / Net Banking</span>
                </label>
                <label className="flex items-center gap-3 p-3 border rounded-md cursor-pointer hover:bg-gray-50">
                  <input type="radio" name="payment" className="w-4 h-4 text-blue-600" />
                  <span className="font-medium">Cash on Delivery</span>
                </label>
              </div>
            </div>
          </form>
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm border sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            <div className="space-y-4 mb-6">
              <div className="text-sm border-b pb-4 mb-4">
                <div className="flex justify-between mb-2">
                  <span>Items ({items.length}):</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                  <span>Shipping & handling:</span>
                  <span>{deliveryFee === 0 ? "Free" : `$${deliveryFee.toFixed(2)}`}</span>
                </div>
                <div className="flex justify-between">
                  <span>Total before tax:</span>
                  <span>${(subtotal + deliveryFee).toFixed(2)}</span>
                </div>
                <div className="flex justify-between mt-2">
                  <span>Estimated tax:</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
              </div>
              <div className="flex justify-between font-bold text-xl text-red-700">
                <span>Order Total:</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            <button 
              type="submit"
              form="checkout-form"
              disabled={loading}
              className="w-full bg-yellow-400 text-gray-900 font-bold px-4 py-3 rounded-md hover:bg-yellow-500 transition-colors shadow-sm disabled:opacity-50 flex justify-center items-center"
            >
              {loading ? (
                <div className="w-5 h-5 border-2 border-gray-900 border-t-transparent rounded-full animate-spin"></div>
              ) : (
                "Place your order"
              )}
            </button>
            <p className="text-xs text-gray-500 mt-4 text-center">
              By placing your order, you agree to our privacy notice and conditions of use.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
