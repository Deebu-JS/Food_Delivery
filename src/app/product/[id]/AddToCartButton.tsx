"use client"

import { useCartStore } from "@/store/useCartStore"
import { useState } from "react"
import { ShoppingCart } from "lucide-react"

export function AddToCartButton({ product }: { product: { id: string, name: string, price: number, storeId: string } }) {
  const addItem = useCartStore(state => state.addItem)
  const [added, setAdded] = useState(false)

  const handleAdd = () => {
    addItem({ ...product, quantity: 1 })
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <button
      onClick={handleAdd}
      className="w-full bg-yellow-400 hover:bg-yellow-500 text-gray-900 font-bold py-3 px-4 rounded-full flex items-center justify-center gap-2 transition-colors shadow-sm"
    >
      <ShoppingCart className="w-5 h-5" />
      {added ? "Added to Cart!" : "Add to Cart"}
    </button>
  )
}
