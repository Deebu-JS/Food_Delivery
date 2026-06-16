"use client"

import { useCartStore } from "@/store/useCartStore"
import { useEffect, useState } from "react"
import { ShoppingCart } from "lucide-react"

export function CartBadge() {
  const [mounted, setMounted] = useState(false)
  const count = useCartStore((state) => state.items.reduce((total, item) => total + item.quantity, 0))

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <>
        <ShoppingCart className="h-5 w-5" />
        <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
          0
        </span>
      </>
    )
  }

  return (
    <>
      <ShoppingCart className="h-5 w-5" />
      <span className="absolute top-1 right-1 flex h-4 w-4 items-center justify-center rounded-full bg-blue-600 text-[10px] font-bold text-white">
        {count}
      </span>
    </>
  )
}
