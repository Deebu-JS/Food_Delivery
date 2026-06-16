"use client"

import Link from "next/link"
import { Search, Menu, User } from "lucide-react"
import { CartBadge } from "@/components/cart/CartBadge"
import { useState, useRef, useEffect } from "react"

export function Navbar() {
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [searchQuery, setSearchQuery] = useState("")
  const searchRef = useRef<HTMLDivElement>(null)

  // Close suggestions when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const suggestions = [
    "Fresh Apples",
    "Whole Milk",
    "Local Bakery Bread",
    "Burger Restaurant",
    "Organic Eggs"
  ].filter(s => s.toLowerCase().includes(searchQuery.toLowerCase()))

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background shadow-sm">
      <div className="container mx-auto flex h-16 items-center px-4 md:px-6">
        <Link href="/" className="mr-6 flex items-center space-x-2">
          <span className="font-bold sm:inline-block">FoodCommerce</span>
        </Link>
        <div className="flex flex-1 items-center space-x-2">
          <div className="w-full max-w-lg relative hidden md:block" ref={searchRef}>
            <input
              type="search"
              placeholder="Search products, restaurants, or categories..."
              value={searchQuery}
              onChange={(e) => {
                setSearchQuery(e.target.value)
                setShowSuggestions(true)
              }}
              onFocus={() => setShowSuggestions(true)}
              className="flex h-10 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring pl-4 pr-12"
            />
            <button 
              onClick={() => setShowSuggestions(true)}
              className="absolute right-0 top-0 h-10 w-10 flex items-center justify-center bg-blue-600 text-white rounded-r-md hover:bg-blue-700 transition-colors"
            >
              <Search className="h-4 w-4" />
            </button>

            {/* Suggestions Dropdown */}
            {showSuggestions && (
              <div className="absolute top-full left-0 right-0 mt-1 bg-white border rounded-md shadow-lg overflow-hidden z-50">
                {suggestions.length > 0 ? (
                  <ul className="py-2">
                    <li className="px-3 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider bg-gray-50">Suggestions</li>
                    {suggestions.map((suggestion, idx) => (
                      <li key={idx}>
                        <button 
                          className="w-full text-left px-4 py-2 text-sm hover:bg-blue-50 hover:text-blue-600 transition-colors flex items-center gap-2"
                          onClick={() => {
                            setSearchQuery(suggestion)
                            setShowSuggestions(false)
                          }}
                        >
                          <Search className="h-3 w-3 text-gray-400" />
                          {suggestion}
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="px-4 py-3 text-sm text-gray-500">
                    No results found for "{searchQuery}"
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
        <nav className="flex items-center space-x-4 ml-4">
          <Link href="/cart" className="relative p-2 flex items-center gap-2 hover:bg-accent rounded-md">
            <CartBadge />
          </Link>
          <Link href="/login" className="p-2 hover:bg-accent rounded-md">
            <User className="h-5 w-5" />
          </Link>
          <button className="md:hidden p-2 hover:bg-accent rounded-md">
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </div>
    </header>
  )
}
