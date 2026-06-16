import Link from "next/link"
import { Star, MapPin, Clock } from "lucide-react"

const RESTAURANTS = [
  { id: 1, name: "Burger Joint", rating: 4.5, time: "20-30 min", distance: "1.2 mi", category: "American", image: "🍔" },
  { id: 2, name: "Sushi Paradise", rating: 4.8, time: "35-45 min", distance: "2.5 mi", category: "Japanese", image: "🍣" },
  { id: 3, name: "Pizza Hut", rating: 4.2, time: "25-40 min", distance: "0.8 mi", category: "Italian", image: "🍕" },
  { id: 4, name: "Green Salad Bowl", rating: 4.6, time: "15-25 min", distance: "0.5 mi", category: "Healthy", image: "🥗" },
  { id: 5, name: "Spicy Curry House", rating: 4.7, time: "30-45 min", distance: "3.1 mi", category: "Indian", image: "🍛" },
  { id: 6, name: "Taco Fiesta", rating: 4.4, time: "20-35 min", distance: "1.5 mi", category: "Mexican", image: "🌮" },
]

export default function RestaurantsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Food Delivery</h1>
      
      {/* Filters */}
      <div className="flex gap-4 overflow-x-auto pb-4 mb-8">
        <button className="bg-gray-900 text-white px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium">All</button>
        <button className="bg-white border hover:bg-gray-50 px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium">Offers</button>
        <button className="bg-white border hover:bg-gray-50 px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium">Under 30 Min</button>
        <button className="bg-white border hover:bg-gray-50 px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium">Top Rated</button>
        <button className="bg-white border hover:bg-gray-50 px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium">American</button>
        <button className="bg-white border hover:bg-gray-50 px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium">Healthy</button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {RESTAURANTS.map((restaurant) => (
          <Link href={`/restaurants/${restaurant.id}`} key={restaurant.id} className="group">
            <div className="bg-white rounded-xl shadow-sm border overflow-hidden hover:shadow-md transition-shadow">
              <div className="h-40 bg-orange-100 flex items-center justify-center text-6xl relative">
                {restaurant.image}
              </div>
              <div className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="font-bold text-lg group-hover:text-blue-600 truncate">{restaurant.name}</h3>
                  <div className="flex items-center bg-green-100 text-green-800 text-xs px-2 py-1 rounded-md font-bold">
                    <span>{restaurant.rating}</span>
                    <Star className="w-3 h-3 ml-1 fill-current" />
                  </div>
                </div>
                <p className="text-gray-500 text-sm mb-3">{restaurant.category}</p>
                <div className="flex items-center text-sm text-gray-500 gap-4">
                  <div className="flex items-center gap-1">
                    <Clock className="w-4 h-4" />
                    <span>{restaurant.time}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{restaurant.distance}</span>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
