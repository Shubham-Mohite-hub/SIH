"use client"

/* 
  Create Recipe from Your Diet Chart
  - Pure React + Tailwind
  - No TypeScript, no shadcn/ui, no lucide-react
  - Mock data + basic generation logic
*/

import { useMemo, useState } from "react"

const MOCK_DIET_CHARTS = [
  {
    id: "priya-wl",
    name: "Priya's Weight Loss Plan",
    updatedAt: "2025-09-20T09:00:00Z",
    meals: [
      {
        id: "m1",
        time: "Breakfast",
        title: "Moong Dal Cheela with Mint Chutney",
        ingredients: ["split moong dal", "ginger", "green chili", "cumin", "salt", "ghee", "mint", "lemon"],
        instructions: [
          "Soak and grind moong dal to smooth batter.",
          "Season with spices; spread on hot tawa with a little ghee.",
          "Cook till golden; serve with mint chutney.",
        ],
        calories: 240,
      },
      {
        id: "m2",
        time: "Lunch",
        title: "Jeera Rice with Lauki Dal",
        ingredients: ["basmati rice", "cumin", "ghee", "bottle gourd", "toor dal", "turmeric", "salt"],
        instructions: [
          "Cook dal with lauki and turmeric.",
          "Temper cumin in ghee; add to dal.",
          "Serve with simple jeera rice.",
        ],
        calories: 420,
      },
      {
        id: "m3",
        time: "Dinner",
        title: "Vegetable Khichdi",
        ingredients: ["rice", "moong dal", "carrot", "peas", "turmeric", "cumin", "ghee", "salt"],
        instructions: [
          "Wash rice and dal.",
          "Saute cumin in ghee, add veggies, rice, and dal.",
          "Pressure cook till soft; season to taste.",
        ],
        calories: 380,
      },
    ],
  },
  {
    id: "rajesh-diabetes",
    name: "Rajesh's Diabetes Control",
    updatedAt: "2025-09-18T10:30:00Z",
    meals: [
      {
        id: "m4",
        time: "Breakfast",
        title: "Ragi Dosa with Coconut Chutney",
        ingredients: ["ragi flour", "curd", "water", "salt", "coconut", "green chili", "mustard seeds"],
        instructions: ["Mix ragi batter", "Spread thin dosa", "Serve with coconut chutney"],
        calories: 260,
      },
      {
        id: "m5",
        time: "Lunch",
        title: "Methi Paneer + Multigrain Roti",
        ingredients: ["paneer", "fresh methi", "onion", "tomato", "spices", "multigrain flour", "ghee"],
        instructions: ["Cook methi paneer gravy", "Knead multigrain dough", "Roast rotis with a touch of ghee"],
        calories: 500,
      },
    ],
  },
]

// Helper to turn array of strings into unique, sorted list
function uniq(arr) {
  return Array.from(new Set(arr)).sort((a, b) => a.localeCompare(b))
}

export default function CreateRecipeFromDietChart() {
  const [selectedChartId, setSelectedChartId] = useState(MOCK_DIET_CHARTS[0]?.id || "")
  const selectedChart = useMemo(() => MOCK_DIET_CHARTS.find((c) => c.id === selectedChartId) || null, [selectedChartId])

  const [selectedMealIds, setSelectedMealIds] = useState([])
  const [title, setTitle] = useState("")
  const [description, setDescription] = useState("")
  const [servings, setServings] = useState(2)
  const [prepTime, setPrepTime] = useState(10)
  const [cookTime, setCookTime] = useState(20)
  const [ingredients, setIngredients] = useState([])
  const [steps, setSteps] = useState([])
  const [tags, setTags] = useState(["diet-generated"])

  const totalCalories = useMemo(() => {
    if (!selectedChart) return 0
    return selectedChart.meals
      .filter((m) => selectedMealIds.includes(m.id))
      .reduce((sum, m) => sum + (m.calories || 0), 0)
  }, [selectedChart, selectedMealIds])

  function toggleMeal(id) {
    setSelectedMealIds((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  function generateFromSelection() {
    if (!selectedChart) return

    const picked = selectedChart.meals.filter((m) => selectedMealIds.includes(m.id))
    if (picked.length === 0) return

    const mergedIngredients = uniq(picked.flatMap((m) => m.ingredients || []))
    const mergedSteps = picked.flatMap((m) => m.instructions || []).map((s, i) => `${i + 1}. ${s}`)

    const titleSuggestion =
      picked.length === 1
        ? picked[0].title
        : `${picked[0].time}–${picked[picked.length - 1].time} combo (${picked.length} dishes)`

    setTitle(title || titleSuggestion)
    setDescription(
      description || "Auto-generated from your diet chart selections. Adjust ingredients and steps as needed.",
    )
    setIngredients(ingredients.length ? ingredients : mergedIngredients)
    setSteps(steps.length ? steps : mergedSteps)
    setTags((t) => uniq([...t, "diet-chart", "auto"]))

    // Basic defaults
    setServings(servings || 2)
    setPrepTime(prepTime || 10)
    setCookTime(cookTime || 20)
  }

  function resetForm() {
    setSelectedMealIds([])
    setTitle("")
    setDescription("")
    setServings(2)
    setPrepTime(10)
    setCookTime(20)
    setIngredients([])
    setSteps([])
    setTags(["diet-generated"])
  }

  function handleAddIngredient() {
    setIngredients((prev) => [...prev, ""])
  }
  function handleChangeIngredient(i, val) {
    setIngredients((prev) => prev.map((x, idx) => (idx === i ? val : x)))
  }
  function handleRemoveIngredient(i) {
    setIngredients((prev) => prev.filter((_, idx) => idx !== i))
  }

  function handleAddStep() {
    setSteps((prev) => [...prev, ""])
  }
  function handleChangeStep(i, val) {
    setSteps((prev) => prev.map((x, idx) => (idx === i ? val : x)))
  }
  function handleRemoveStep(i) {
    setSteps((prev) => prev.filter((_, idx) => idx !== i))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const payload = {
      title,
      description,
      servings,
      prepTime,
      cookTime,
      ingredients: ingredients.filter(Boolean),
      steps: steps.filter(Boolean),
      tags,
      source: { type: "diet-chart", chartId: selectedChartId, mealIds: selectedMealIds },
    }
    // Replace with real API later
    console.log("[v0] Recipe payload:", payload)
    alert("Recipe drafted from diet chart! Check console for payload.")
  }

  return (
    <div className="min-h-screen bg-cyan-50">
      <header className="sticky top-0 z-10 bg-cyan-50 border-b border-cyan-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-cyan-900 text-balance">Create Recipe from Your Diet Chart</h1>
            <p className="text-sm text-cyan-800/80">
              Pick a chart, select meals, and auto-generate a recipe. Fine‑tune details before saving.
            </p>
          </div>
          <a
            href="/recipes"
            className="inline-flex items-center rounded-md border border-cyan-300 bg-white px-3 py-2 text-sm font-medium text-cyan-800 hover:bg-cyan-100"
          >
            Back to Recipes
          </a>
        </div>
      </header>

      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left column: Select chart + meals */}
          <section className="lg:col-span-1">
            <div className="bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 border-l-cyan-500">
              <div className="px-5 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-cyan-900">1. Choose Diet Chart</h2>
              </div>
              <div className="p-5 space-y-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">Diet Chart</label>
                <select
                  value={selectedChartId}
                  onChange={(e) => {
                    setSelectedChartId(e.target.value)
                    setSelectedMealIds([])
                  }}
                  className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                >
                  {MOCK_DIET_CHARTS.map((c) => (
                    <option key={c.id} value={c.id}>
                      {c.name}
                    </option>
                  ))}
                </select>

                {selectedChart ? (
                  <>
                    <div className="flex items-center justify-between mt-2">
                      <p className="text-sm text-gray-600">
                        Updated: {new Date(selectedChart.updatedAt).toLocaleString()}
                      </p>
                      <span className="text-xs rounded-full bg-emerald-50 text-emerald-800 px-2 py-1 border border-emerald-200">
                        {selectedChart.meals.length} meals
                      </span>
                    </div>

                    <div className="mt-4">
                      <h3 className="text-sm font-medium text-gray-900 mb-2">Select Meals</h3>
                      <ul className="space-y-2 max-h-80 overflow-auto pr-1">
                        {selectedChart.meals.map((m) => {
                          const checked = selectedMealIds.includes(m.id)
                          return (
                            <li
                              key={m.id}
                              className={`rounded-md border p-3 transition-colors ${
                                checked
                                  ? "border-emerald-400 bg-emerald-50"
                                  : "border-gray-200 bg-white hover:bg-cyan-50"
                              }`}
                            >
                              <label className="flex items-start gap-3 cursor-pointer">
                                <input
                                  type="checkbox"
                                  className="mt-1 h-4 w-4 rounded border-gray-300 text-cyan-600 focus:ring-cyan-500"
                                  checked={checked}
                                  onChange={() => toggleMeal(m.id)}
                                />
                                <div className="flex-1">
                                  <div className="flex items-center justify-between">
                                    <p className="font-medium text-gray-900">
                                      {m.time}: {m.title}
                                    </p>
                                    {typeof m.calories === "number" && (
                                      <span className="text-xs text-amber-700">{m.calories} kcal</span>
                                    )}
                                  </div>
                                  {m.ingredients?.length ? (
                                    <p className="mt-1 text-sm text-gray-600 line-clamp-2">
                                      {m.ingredients.slice(0, 6).join(", ")}
                                      {m.ingredients.length > 6 ? "…" : ""}
                                    </p>
                                  ) : null}
                                </div>
                              </label>
                            </li>
                          )
                        })}
                      </ul>

                      <div className="mt-4 flex items-center justify-between">
                        <button
                          type="button"
                          onClick={generateFromSelection}
                          className="inline-flex items-center rounded-md bg-cyan-600 px-3 py-2 text-sm font-medium text-white hover:bg-cyan-700"
                        >
                          Generate from Selected
                        </button>
                        <span className="text-sm text-amber-800">
                          Total: <strong className="text-amber-900">{totalCalories}</strong> kcal
                        </span>
                      </div>
                    </div>
                  </>
                ) : (
                  <p className="text-sm text-gray-600">No diet chart selected.</p>
                )}
              </div>
            </div>
          </section>

          {/* Right column: Recipe editor */}
          <section className="lg:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-gray-200 rounded-lg shadow-sm border-l-4 border-l-amber-500"
            >
              <div className="px-5 py-4 border-b border-gray-200">
                <h2 className="text-lg font-semibold text-amber-900">2. Edit Recipe Details</h2>
              </div>

              <div className="p-5 space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Title</label>
                    <input
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      placeholder="e.g., Moong Cheela Combo"
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Tags</label>
                    <input
                      value={tags.join(", ")}
                      onChange={(e) =>
                        setTags(
                          e.target.value
                            .split(",")
                            .map((t) => t.trim())
                            .filter(Boolean),
                        )
                      }
                      placeholder="comma separated, e.g., light, high-protein"
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <textarea
                    rows={3}
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    placeholder="Short description for this combined recipe…"
                    className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                  />
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Servings</label>
                    <input
                      type="number"
                      min={1}
                      value={servings}
                      onChange={(e) => setServings(Number(e.target.value))}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Prep (min)</label>
                    <input
                      type="number"
                      min={0}
                      value={prepTime}
                      onChange={(e) => setPrepTime(Number(e.target.value))}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Cook (min)</label>
                    <input
                      type="number"
                      min={0}
                      value={cookTime}
                      onChange={(e) => setCookTime(Number(e.target.value))}
                      className="w-full rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                    />
                  </div>
                  <div className="flex items-end">
                    <div className="text-sm text-gray-700">
                      <div>
                        <span className="text-gray-600">Total time:</span> <strong>{prepTime + cookTime} min</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Ingredients */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-900">Ingredients</h3>
                    <button
                      type="button"
                      onClick={handleAddIngredient}
                      className="inline-flex items-center rounded-md border border-amber-300 bg-amber-50 px-2.5 py-1.5 text-xs font-medium text-amber-900 hover:bg-amber-100"
                    >
                      Add ingredient
                    </button>
                  </div>
                  <ul className="space-y-2">
                    {ingredients.map((ing, i) => (
                      <li key={i} className="flex gap-2">
                        <input
                          value={ing}
                          onChange={(e) => handleChangeIngredient(i, e.target.value)}
                          placeholder={`Ingredient ${i + 1}`}
                          className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveIngredient(i)}
                          className="rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                  {ingredients.length === 0 && (
                    <p className="text-sm text-gray-600">
                      No ingredients yet. Click “Generate from Selected” or “Add ingredient”.
                    </p>
                  )}
                </div>

                {/* Steps */}
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-sm font-medium text-gray-900">Steps</h3>
                    <button
                      type="button"
                      onClick={handleAddStep}
                      className="inline-flex items-center rounded-md border border-amber-300 bg-amber-50 px-2.5 py-1.5 text-xs font-medium text-amber-900 hover:bg-amber-100"
                    >
                      Add step
                    </button>
                  </div>
                  <ul className="space-y-2">
                    {steps.map((st, i) => (
                      <li key={i} className="flex gap-2">
                        <textarea
                          rows={2}
                          value={st}
                          onChange={(e) => handleChangeStep(i, e.target.value)}
                          placeholder={`Step ${i + 1}`}
                          className="flex-1 rounded-md border border-gray-300 bg-white px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500"
                        />
                        <button
                          type="button"
                          onClick={() => handleRemoveStep(i)}
                          className="rounded-md border border-gray-300 bg-white px-2.5 py-1.5 text-xs font-medium text-gray-700 hover:bg-gray-50"
                        >
                          Remove
                        </button>
                      </li>
                    ))}
                  </ul>
                  {steps.length === 0 && (
                    <p className="text-sm text-gray-600">No steps yet. Click “Generate from Selected” or “Add step”.</p>
                  )}
                </div>

                {/* Actions */}
                <div className="flex items-center justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={resetForm}
                    className="rounded-md border border-cyan-300 bg-white px-4 py-2 text-sm font-medium text-cyan-800 hover:bg-cyan-100"
                  >
                    Reset
                  </button>
                  <button
                    type="submit"
                    className="rounded-md bg-emerald-600 px-4 py-2 text-sm font-medium text-white hover:bg-emerald-700"
                  >
                    Save Draft
                  </button>
                </div>
              </div>
            </form>
          </section>
        </div>
      </main>
    </div>
  )
}

// Named export (optional)
export { CreateRecipeFromDietChart }
