"use client"

import { useCartStore } from "@/store/useCartStore"
import Image from "next/image"
import Link from "next/link"
import { Trash2, Plus, Minus } from "lucide-react"

export default function CartPage() {
  const { items, removeItem, updateQuantity, getTotal } = useCartStore()

  const subtotal = getTotal()
  const tax = subtotal * 0.08
  const deliveryFee = subtotal > 50 ? 0 : 5.99
  const total = subtotal + tax + deliveryFee

  if (items.length === 0) {
    return (
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-3xl font-bold mb-4">Your Shopping Cart is Empty</h1>
        <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Link href="/" className="bg-yellow-400 text-gray-900 font-bold px-8 py-3 rounded-full hover:bg-yellow-500 transition-colors">
          Start Shopping
        </Link>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-4">
          {items.map((item) => (
            <div key={item.id} className="flex flex-col sm:flex-row items-center gap-4 bg-white p-4 rounded-lg shadow-sm border">
              <div className="w-24 h-24 bg-gray-100 rounded-md flex-shrink-0 relative overflow-hidden">
                {item.image ? (
                  <Image src={item.image} alt={item.name} fill className="object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-400">No Image</div>
                )}
              </div>
              
              <div className="flex-1 text-center sm:text-left">
                <h3 className="font-semibold text-lg">{item.name}</h3>
                <p className="text-muted-foreground text-sm">Store ID: {item.storeId}</p>
                <div className="font-bold text-lg mt-2">${item.price.toFixed(2)}</div>
              </div>
              
              <div className="flex items-center gap-4">
                <div className="flex items-center border rounded-md">
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="p-2 hover:bg-gray-100 disabled:opacity-50"
                    disabled={item.quantity <= 1}
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="w-10 text-center font-medium">{item.quantity}</span>
                  <button 
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="p-2 hover:bg-gray-100"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
                
                <button 
                  onClick={() => removeItem(item.id)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-md"
                  aria-label="Remove item"
                >
                  <Trash2 className="w-5 h-5" />
                </button>
              </div>
            </div>
          ))}
        </div>
        
        <div className="lg:col-span-1">
          <div className="bg-white p-6 rounded-lg shadow-sm border sticky top-24">
            <h2 className="text-xl font-bold mb-4">Order Summary</h2>
            
            <div className="space-y-3 mb-6">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Delivery Fee</span>
                <span>{deliveryFee === 0 ? "Free" : `$${deliveryFee.toFixed(2)}`}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Estimated Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
              <div className="border-t pt-3 flex justify-between font-bold text-lg">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
            
            <Link 
              href="/checkout" 
              className="w-full block text-center bg-yellow-400 text-gray-900 font-bold px-4 py-3 rounded-full hover:bg-yellow-500 transition-colors shadow-sm"
            >
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}
