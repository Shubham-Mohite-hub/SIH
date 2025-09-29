"use client"

import { useState } from "react"
import { Link } from "react-router-dom"

// Mock recipes data
const mockRecipes = [
  {
    id: "1",
    name: "Khichdi with Ghee",
    category: "Main Course",
    cuisine: "Indian",
    difficulty: "Easy",
    prepTime: 30,
    servings: 4,
    calories: 280,
    description: "Nourishing one-pot meal perfect for all doshas",
    thermalProperty: "Warming",
    doshaEffect: { vata: "Pacifying", pitta: "Neutral", kapha: "Neutral" },
    rasa: ["Sweet"],
    ingredients: [
      { name: "Basmati Rice", quantity: "1 cup", calories: 205 },
      { name: "Moong Dal", quantity: "1/2 cup", calories: 173 },
      { name: "Ghee", quantity: "2 tbsp", calories: 240 },
      { name: "Cumin Seeds", quantity: "1 tsp", calories: 8 },
    ],
    tags: ["Comfort Food", "Easy Digestion", "Tridoshic"],
    image: "/khichadi.jpg",
  },
  {
    id: "2",
    name: "Cooling Cucumber Raita",
    category: "Side Dish",
    cuisine: "Indian",
    difficulty: "Easy",
    prepTime: 10,
    servings: 2,
    calories: 120,
    description: "Refreshing yogurt-based side dish to cool Pitta",
    thermalProperty: "Cooling",
    doshaEffect: { vata: "Increasing", pitta: "Pacifying", kapha: "Increasing" },
    rasa: ["Sweet", "Astringent"],
    ingredients: [
      { name: "Cucumber", quantity: "1 large", calories: 16 },
      { name: "Yogurt", quantity: "1 cup", calories: 150 },
      { name: "Mint Leaves", quantity: "2 tbsp", calories: 2 },
      { name: "Black Salt", quantity: "1/2 tsp", calories: 0 },
    ],
    tags: ["Cooling", "Pitta Pacifying", "Summer"],
    image: "/raita.jpg",
  },
  {
    id: "3",
    name: "Golden Turmeric Milk",
    category: "Beverages",
    cuisine: "Ayurvedic",
    difficulty: "Easy",
    prepTime: 5,
    servings: 1,
    calories: 150,
    description: "Healing bedtime drink with anti-inflammatory properties",
    thermalProperty: "Warming",
    doshaEffect: { vata: "Pacifying", pitta: "Increasing", kapha: "Pacifying" },
    rasa: ["Sweet", "Bitter", "Pungent"],
    ingredients: [
      { name: "Milk", quantity: "1 cup", calories: 150 },
      { name: "Turmeric Powder", quantity: "1/2 tsp", calories: 4 },
      { name: "Honey", quantity: "1 tsp", calories: 21 },
      { name: "Ginger Powder", quantity: "1/4 tsp", calories: 1 },
    ],
    tags: ["Healing", "Anti-inflammatory", "Bedtime"],
    image: "/milk.jpg",
  },
  {
    id: "4",
    name: "Spiced Quinoa Salad",
    category: "Salads",
    cuisine: "Fusion",
    difficulty: "Medium",
    prepTime: 25,
    servings: 3,
    calories: 320,
    description: "Protein-rich salad with warming spices",
    thermalProperty: "Neutral",
    doshaEffect: { vata: "Pacifying", pitta: "Neutral", kapha: "Pacifying" },
    rasa: ["Sweet", "Pungent", "Bitter"],
    ingredients: [
      { name: "Quinoa", quantity: "1 cup", calories: 222 },
      { name: "Mixed Vegetables", quantity: "1 cup", calories: 50 },
      { name: "Olive Oil", quantity: "2 tbsp", calories: 240 },
      { name: "Cumin Powder", quantity: "1 tsp", calories: 8 },
    ],
    tags: ["Protein Rich", "Gluten Free", "Balanced"],
    image: "/salad.jpg",
  },
]

export default function RecipesViewComponent() {
  const [searchTerm, setSearchTerm] = useState("")
  const [categoryFilter, setCategoryFilter] = useState("all")
  const [cuisineFilter, setCuisineFilter] = useState("all")
  const [difficultyFilter, setDifficultyFilter] = useState("all")
  const [activeTab, setActiveTab] = useState("all")

  const filteredRecipes = mockRecipes.filter((recipe) => {
    const matchesSearch = recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesCategory = categoryFilter === "all" || recipe.category === categoryFilter
    const matchesCuisine = cuisineFilter === "all" || recipe.cuisine === cuisineFilter
    const matchesDifficulty = difficultyFilter === "all" || recipe.difficulty === difficultyFilter

    return matchesSearch && matchesCategory && matchesCuisine && matchesDifficulty
  })

  const categories = ["Main Course", "Side Dish", "Beverages", "Salads", "Desserts", "Snacks"]
  const cuisines = ["Indian", "Ayurvedic", "Fusion", "International"]

  const clearFilters = () => {
    setSearchTerm("")
    setCategoryFilter("all")
    setCuisineFilter("all")
    setDifficultyFilter("all")
  }

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-balance">Recipes</h1>
          <p className="text-gray-600 text-pretty">
            Ayurvedic recipes with detailed nutritional analysis and dosha effects
          </p>
        </div>
        <div className="flex items-center gap-2">
          {/* existing "Add Recipe" button */}
          <Link to="/recipes/add">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <span>+</span>
              Add Recipe
            </button>
          </Link>
          {/* new "Create from Diet Chart" button */}
          <Link to="/recipes/create-from-diet-chart">
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transition-colors">
              <span>🧾</span>
              Create Recipe from your Diet Chart
            </button>
          </Link>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid gap-4 md:grid-cols-4">
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-4">
            <div className="flex items-center gap-2">
              <span className="text-gray-500">👨‍🍳</span>
              <div>
                <div className="text-2xl font-bold">{mockRecipes.length}</div>
                <p className="text-sm text-gray-500">Total Recipes</p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-4">
            <div className="text-2xl font-bold">8</div>
            <p className="text-sm text-gray-500">Categories</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-4">
            <div className="text-2xl font-bold">220</div>
            <p className="text-sm text-gray-500">Avg Calories</p>
          </div>
        </div>
        <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
          <div className="p-4">
            <div className="text-2xl font-bold">15</div>
            <p className="text-sm text-gray-500">Avg Prep Time</p>
          </div>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="p-4 border-b border-gray-200">
          <h3 className="text-lg font-semibold flex items-center gap-2">
            <span>🔍</span>
            Search & Filter
          </h3>
        </div>
        <div className="p-4">
          <div className="space-y-4">
            <div className="relative">
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400">🔍</span>
              <input
                type="text"
                placeholder="Search recipes..."
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
                value={difficultyFilter}
                onChange={(e) => setDifficultyFilter(e.target.value)}
                className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                <option value="all">All Levels</option>
                <option value="Easy">Easy</option>
                <option value="Medium">Medium</option>
                <option value="Hard">Hard</option>
              </select>
              <button
                onClick={clearFilters}
                className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition-colors"
              >
                Clear Filters
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Recipe Categories Tabs */}
      <div>
        <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg mb-4">
          <button
            onClick={() => setActiveTab("all")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "all" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            All Recipes
          </button>
          <button
            onClick={() => setActiveTab("main")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "main" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Main Course
          </button>
          <button
            onClick={() => setActiveTab("beverages")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "beverages" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Beverages
          </button>
          <button
            onClick={() => setActiveTab("sides")}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              activeTab === "sides" ? "bg-white text-gray-900 shadow-sm" : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Side Dishes
          </button>
        </div>

        <div className="space-y-4">
          {activeTab === "all" && <RecipeGrid recipes={filteredRecipes} />}
          {activeTab === "main" && (
            <RecipeGrid recipes={filteredRecipes.filter((recipe) => recipe.category === "Main Course")} />
          )}
          {activeTab === "beverages" && (
            <RecipeGrid recipes={filteredRecipes.filter((recipe) => recipe.category === "Beverages")} />
          )}
          {activeTab === "sides" && (
            <RecipeGrid recipes={filteredRecipes.filter((recipe) => recipe.category === "Side Dish")} />
          )}
        </div>
      </div>
    </div>
  )
}

function RecipeGrid({ recipes }) {
  if (recipes.length === 0) {
    return (
      <div className="bg-white border border-gray-200 rounded-lg shadow-sm">
        <div className="py-12 text-center">
          <p className="text-gray-500">No recipes found matching your criteria.</p>
        </div>
      </div>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {recipes.map((recipe) => (
        <div
          key={recipe.id}
          className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow overflow-hidden"
        >
          <div className="aspect-video relative">
            <img
              src={recipe.image || "/placeholder.svg?height=200&width=300"}
              alt={recipe.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-2 right-2">
              <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded-full text-xs font-medium">
                {recipe.calories} cal
              </span>
            </div>
          </div>
          <div className="p-4 pb-3">
            <div className="flex items-center justify-between mb-3">
              <div>
                <h3 className="font-semibold text-gray-900">{recipe.name}</h3>
                <p className="text-sm text-gray-500">
                  {recipe.category} • {recipe.cuisine}
                </p>
              </div>
              <span className="border border-gray-300 px-2 py-1 rounded-full text-xs font-medium">
                {recipe.difficulty}
              </span>
            </div>
          </div>
          <div className="px-4 pb-4 space-y-3">
            <p className="text-sm text-gray-600 line-clamp-2">{recipe.description}</p>

            {/* Recipe Info */}
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-1">
                <span>⏱️</span>
                <span>{recipe.prepTime} min</span>
              </div>
              <div className="flex items-center gap-1">
                <span>👥</span>
                <span>{recipe.servings} servings</span>
              </div>
              <span
                className={`px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1 ${
                  recipe.thermalProperty === "Warming" ? "bg-red-100 text-red-800" : "bg-blue-100 text-blue-800"
                }`}
              >
                <span>🌡️</span>
                {recipe.thermalProperty}
              </span>
            </div>

            {/* Ayurvedic Properties */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <span className="flex items-center gap-1">
                  <span>🍃</span>
                  Rasa:
                </span>
                <div className="flex gap-1">
                  {recipe.rasa.map((taste) => (
                    <span key={taste} className="border border-gray-300 px-2 py-1 rounded-full text-xs">
                      {taste}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-1">
              {recipe.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="border border-gray-300 px-2 py-1 rounded-full text-xs">
                  {tag}
                </span>
              ))}
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <a href={`/recipes/${recipe.id}`} className="flex-1">
                <button className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <span>👁️</span>
                  View Recipe
                </button>
              </a>
              <a href={`/recipes/${recipe.id}/edit`} className="flex-1">
                <button className="w-full border border-gray-300 px-3 py-2 rounded-lg text-sm hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                  <span>✏️</span>
                  Edit
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export { RecipesViewComponent as RecipesView }
