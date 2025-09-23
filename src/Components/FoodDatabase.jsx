"use client"

import { useState } from "react"

const mockFoodItems = [
  {
    id: "1",
    name: "Basmati Rice",
    category: "Grains",
    cuisine: "Indian",
    calories: 130,
    protein: 2.7,
    carbs: 28,
    fat: 0.3,
    fiber: 0.4,
    thermalProperty: "Cooling",
    digestibility: "Easy",
    rasa: ["Sweet"],
    virya: "Cold",
    vipaka: "Sweet",
    doshaEffect: { vata: "Neutral", pitta: "Pacifying", kapha: "Increasing" },
    description: "Long-grain aromatic rice, staple in Indian cuisine",
  },
  {
    id: "2",
    name: "Turmeric",
    category: "Spices",
    cuisine: "Indian",
    calories: 354,
    protein: 7.8,
    carbs: 65,
    fat: 10,
    fiber: 21,
    thermalProperty: "Heating",
    digestibility: "Moderate",
    rasa: ["Bitter", "Pungent"],
    virya: "Hot",
    vipaka: "Pungent",
    doshaEffect: { vata: "Pacifying", pitta: "Increasing", kapha: "Pacifying" },
    description: "Golden spice with anti-inflammatory properties",
  },
  {
    id: "3",
    name: "Coconut",
    category: "Fruits",
    cuisine: "Tropical",
    calories: 354,
    protein: 3.3,
    carbs: 15,
    fat: 33,
    fiber: 9,
    thermalProperty: "Cooling",
    digestibility: "Moderate",
    rasa: ["Sweet"],
    virya: "Cold",
    vipaka: "Sweet",
    doshaEffect: { vata: "Pacifying", pitta: "Pacifying", kapha: "Increasing" },
    description: "Tropical fruit rich in healthy fats",
  },
  {
    id: "4",
    name: "Ginger",
    category: "Spices",
    cuisine: "Asian",
    calories: 80,
    protein: 1.8,
    carbs: 18,
    fat: 0.8,
    fiber: 2,
    thermalProperty: "Heating",
    digestibility: "Easy",
    rasa: ["Pungent"],
    virya: "Hot",
    vipaka: "Sweet",
    doshaEffect: { vata: "Pacifying", pitta: "Increasing", kapha: "Pacifying" },
    description: "Warming spice excellent for digestion",
  },
  {
    id: "5",
    name: "Spinach",
    category: "Vegetables",
    cuisine: "International",
    calories: 23,
    protein: 2.9,
    carbs: 3.6,
    fat: 0.4,
    fiber: 2.2,
    thermalProperty: "Cooling",
    digestibility: "Easy",
    rasa: ["Sweet", "Astringent"],
    virya: "Cold",
    vipaka: "Pungent",
    doshaEffect: { vata: "Increasing", pitta: "Pacifying", kapha: "Neutral" },
    description: "Leafy green vegetable rich in iron and vitamins",
  },
  {
    id: "6",
    name: "Almonds",
    category: "Nuts",
    cuisine: "International",
    calories: 579,
    protein: 21,
    carbs: 22,
    fat: 50,
    fiber: 12,
    thermalProperty: "Heating",
    digestibility: "Moderate",
    rasa: ["Sweet"],
    virya: "Hot",
    vipaka: "Sweet",
    doshaEffect: { vata: "Pacifying", pitta: "Increasing", kapha: "Increasing" },
    description: "Nutrient-dense nuts, excellent for brain health",
  },
  {
    id: "7",
    name: "Quinoa",
    category: "Grains",
    cuisine: "International",
    calories: 222,
    protein: 8,
    carbs: 39,
    fat: 3.6,
    fiber: 5,
    thermalProperty: "Neutral",
    digestibility: "Easy",
    rasa: ["Sweet"],
    virya: "Cold",
    vipaka: "Sweet",
    doshaEffect: { vata: "Pacifying", pitta: "Neutral", kapha: "Neutral" },
    description: "Complete protein grain, gluten-free superfood",
  },
  {
    id: "8",
    name: "Ghee",
    category: "Dairy",
    cuisine: "Indian",
    calories: 900,
    protein: 0,
    carbs: 0,
    fat: 100,
    fiber: 0,
    thermalProperty: "Heating",
    digestibility: "Easy",
    rasa: ["Sweet"],
    virya: "Hot",
    vipaka: "Sweet",
    doshaEffect: { vata: "Pacifying", pitta: "Pacifying", kapha: "Increasing" },
    description: "Clarified butter, sacred in Ayurveda",
  },
  {
    id: "9",
    name: "Cardamom",
    category: "Spices",
    cuisine: "Indian",
    calories: 311,
    protein: 11,
    carbs: 68,
    fat: 6.7,
    fiber: 28,
    thermalProperty: "Cooling",
    digestibility: "Easy",
    rasa: ["Sweet", "Pungent"],
    virya: "Cold",
    vipaka: "Sweet",
    doshaEffect: { vata: "Pacifying", pitta: "Pacifying", kapha: "Pacifying" },
    description: "Queen of spices, excellent for digestion",
  },
  {
    id: "10",
    name: "Sweet Potato",
    category: "Vegetables",
    cuisine: "International",
    calories: 86,
    protein: 1.6,
    carbs: 20,
    fat: 0.1,
    fiber: 3,
    thermalProperty: "Heating",
    digestibility: "Easy",
    rasa: ["Sweet"],
    virya: "Hot",
    vipaka: "Sweet",
    doshaEffect: { vata: "Pacifying", pitta: "Neutral", kapha: "Increasing" },
    description: "Root vegetable rich in beta-carotene",
  },
  {
    id: "11",
    name: "Lentils (Moong Dal)",
    category: "Legumes",
    cuisine: "Indian",
    calories: 347,
    protein: 24,
    carbs: 59,
    fat: 1.2,
    fiber: 16,
    thermalProperty: "Cooling",
    digestibility: "Easy",
    rasa: ["Sweet", "Astringent"],
    virya: "Cold",
    vipaka: "Sweet",
    doshaEffect: { vata: "Neutral", pitta: "Pacifying", kapha: "Neutral" },
    description: "Easy to digest protein source",
  },
  {
    id: "12",
    name: "Cinnamon",
    category: "Spices",
    cuisine: "International",
    calories: 247,
    protein: 4,
    carbs: 81,
    fat: 1.2,
    fiber: 53,
    thermalProperty: "Heating",
    digestibility: "Easy",
    rasa: ["Sweet", "Pungent"],
    virya: "Hot",
    vipaka: "Sweet",
    doshaEffect: { vata: "Pacifying", pitta: "Increasing", kapha: "Pacifying" },
    description: "Warming spice that balances blood sugar",
  },
  {
    id: "13",
    name: "Avocado",
    category: "Fruits",
    cuisine: "International",
    calories: 160,
    protein: 2,
    carbs: 9,
    fat: 15,
    fiber: 7,
    thermalProperty: "Cooling",
    digestibility: "Moderate",
    rasa: ["Sweet"],
    virya: "Cold",
    vipaka: "Sweet",
    doshaEffect: { vata: "Pacifying", pitta: "Pacifying", kapha: "Increasing" },
    description: "Creamy fruit rich in healthy monounsaturated fats",
  },
  {
    id: "14",
    name: "Fennel Seeds",
    category: "Spices",
    cuisine: "Indian",
    calories: 345,
    protein: 15.8,
    carbs: 52,
    fat: 14.9,
    fiber: 40,
    thermalProperty: "Cooling",
    digestibility: "Easy",
    rasa: ["Sweet", "Pungent"],
    virya: "Cold",
    vipaka: "Sweet",
    doshaEffect: { vata: "Pacifying", pitta: "Pacifying", kapha: "Neutral" },
    description: "Digestive spice that freshens breath",
  },
  {
    id: "15",
    name: "Pomegranate",
    category: "Fruits",
    cuisine: "Mediterranean",
    calories: 83,
    protein: 1.7,
    carbs: 19,
    fat: 1.2,
    fiber: 4,
    thermalProperty: "Cooling",
    digestibility: "Easy",
    rasa: ["Sweet", "Sour", "Astringent"],
    virya: "Cold",
    vipaka: "Sweet",
    doshaEffect: { vata: "Pacifying", pitta: "Pacifying", kapha: "Neutral" },
    description: "Antioxidant-rich fruit, excellent for heart health",
  },
  {
    id: "16",
    name: "Black Pepper",
    category: "Spices",
    cuisine: "International",
    calories: 251,
    protein: 10.4,
    carbs: 64,
    fat: 3.3,
    fiber: 26,
    thermalProperty: "Heating",
    digestibility: "Easy",
    rasa: ["Pungent"],
    virya: "Hot",
    vipaka: "Pungent",
    doshaEffect: { vata: "Pacifying", pitta: "Increasing", kapha: "Pacifying" },
    description: "King of spices, enhances nutrient absorption",
  },
]

export default function FoodDatabaseView() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [cuisineFilter, setCuisineFilter] = useState("all")
  const [thermalFilter, setThermalFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  const filteredFoodItems = mockFoodItems.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || item.category === categoryFilter
    const matchesCuisine = cuisineFilter === "all" || item.cuisine === cuisineFilter
    const matchesThermal = thermalFilter === "all" || item.thermalProperty === thermalFilter

    return matchesSearch && matchesCategory && matchesCuisine && matchesThermal
  })

  const categories = ["Grains", "Vegetables", "Fruits", "Spices", "Nuts", "Legumes", "Dairy", "Proteins"]
  const cuisines = ["Indian", "Asian", "Mediterranean", "International", "Tropical"]

  const getFilteredItemsByTab = () => {
    if (activeTab === "all") return filteredFoodItems
    if (activeTab === "grains") return filteredFoodItems.filter((item) => item.category === "Grains")
    if (activeTab === "vegetables") return filteredFoodItems.filter((item) => item.category === "Vegetables")
    if (activeTab === "spices") return filteredFoodItems.filter((item) => item.category === "Spices")
    return filteredFoodItems
  }

  return (
    <div className="space-y-6 p-6 max-w-7xl mx-auto">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">Food Database</h1>
          <p className="text-gray-600 text-pretty">
            Comprehensive database of {mockFoodItems.length.toLocaleString()}+ food items with Ayurvedic properties
          </p>
        </div>
        
      </div>

      {/* Search and Filters */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-lg font-semibold flex items-center gap-2">
            <span>🔍</span>
            Search & Filter
          </h2>
        </div>
        <div className="p-6">
          <div className="space-y-4">
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Search food items..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="grid gap-4 md:grid-cols-4">
              <select
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Categories</option>
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
              <select
                value={cuisineFilter}
                onChange={(e) => setCuisineFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Cuisines</option>
                {cuisines.map((cuisine) => (
                  <option key={cuisine} value={cuisine}>
                    {cuisine}
                  </option>
                ))}
              </select>
              <select
                value={thermalFilter}
                onChange={(e) => setThermalFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Properties</option>
                <option value="Heating">Heating</option>
                <option value="Cooling">Cooling</option>
                <option value="Neutral">Neutral</option>
              </select>
              <button
                onClick={() => {
                  setSearchTerm("")
                  setCategoryFilter("all")
                  setCuisineFilter("all")
                  setThermalFilter("all")
                }}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="space-y-4">
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg w-fit">
          {[
            { id: "all", label: "All Items" },
            { id: "grains", label: "Grains" },
            { id: "vegetables", label: "Vegetables" },
            { id: "spices", label: "Spices" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === tab.id ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {getFilteredItemsByTab().map((item) => (
            <FoodItemCard key={item.id} item={item} />
          ))}
        </div>

        {getFilteredItemsByTab().length === 0 && (
          <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
            <div className="py-12 text-center">
              <p className="text-gray-600">No food items found matching your criteria.</p>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function FoodItemCard({ item }) {
  return (
    <div className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1 h-96 flex flex-col">
      <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-4 rounded-t-lg">
        <div className="flex items-center justify-between">
          <div className="flex-1">
            <h3 className="font-bold text-lg text-balance leading-tight">{item.name}</h3>
            <p className="text-blue-100 text-sm mt-1">
              {item.category} • {item.cuisine}
            </p>
          </div>
          <span className="bg-white bg-opacity-20 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium">
            {item.calories} cal
          </span>
        </div>
      </div>

      <div className="p-4 flex-1 flex flex-col justify-between">
        {/* Ayurvedic Properties */}
        <div className="space-y-3">
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 font-medium">
              <span>🌡️</span>
              Thermal:
            </span>
            <span
              className={`px-2 py-1 text-xs rounded-full font-medium ${
                item.thermalProperty === "Heating"
                  ? "bg-red-100 text-red-700"
                  : item.thermalProperty === "Cooling"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-700"
              }`}
            >
              {item.thermalProperty}
            </span>
          </div>

          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-1 font-medium">
              <span>⚡</span>
              Digestibility:
            </span>
            <span className="text-gray-700 font-medium">{item.digestibility}</span>
          </div>

          <div className="text-sm">
            <span className="flex items-center gap-1 font-medium mb-2">
              <span>🍃</span>
              Rasa:
            </span>
            <div className="flex flex-wrap gap-1">
              {item.rasa.map((taste) => (
                <span
                  key={taste}
                  className="px-2 py-1 bg-green-100 text-green-700 text-xs rounded-full border font-medium"
                >
                  {taste}
                </span>
              ))}
            </div>
          </div>

          {/* Nutritional Info */}
          <div className="bg-gray-50 rounded-lg p-3">
            <div className="grid grid-cols-3 gap-2 text-xs">
              <div className="text-center">
                <p className="font-bold text-gray-900 text-sm">{item.protein}g</p>
                <p className="text-gray-600">Protein</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-900 text-sm">{item.carbs}g</p>
                <p className="text-gray-600">Carbs</p>
              </div>
              <div className="text-center">
                <p className="font-bold text-gray-900 text-sm">{item.fat}g</p>
                <p className="text-gray-600">Fat</p>
              </div>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-2 mt-4">
          <button className="flex-1 px-3 py-2 bg-blue-50 border border-blue-200 text-blue-700 rounded-lg hover:bg-blue-100 transition-colors text-sm font-medium flex items-center justify-center gap-2">
            <span>👁️</span>
            View
          </button>
          <button className="flex-1 px-3 py-2 bg-gray-50 border border-gray-200 text-gray-700 rounded-lg hover:bg-gray-100 transition-colors text-sm font-medium flex items-center justify-center gap-2">
            <span>✏️</span>
            Edit
          </button>
        </div>
      </div>
    </div>
  )
}
