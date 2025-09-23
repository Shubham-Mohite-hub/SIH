"use client"

import { useState } from "react"

export default function CreateDietChart() {
  const [currentStep, setCurrentStep] = useState(1)
  const [formData, setFormData] = useState({
    // Personal Information
    name: "",
    age: "",
    gender: "",
    height: "",
    weight: "",
    activityLevel: "",

    // Health Information
    healthConditions: [],
    allergies: [],
    medications: "",

    // Ayurvedic Dosha Assessment
    vataScore: 0,
    pittaScore: 0,
    kaphaScore: 0,
    dominantDosha: "",

    // Dietary Preferences
    dietType: "",
    foodPreferences: [],
    dislikedFoods: [],
    mealTiming: "",
    cookingTime: "",
    budget: "",

    // Goals
    healthGoals: [],
    weightGoal: "",
    timeframe: "",
  })

  const doshaQuestions = [
    {
      question: "What is your body frame?",
      options: [
        { text: "Thin, light frame", dosha: "vata", score: 2 },
        { text: "Medium, muscular frame", dosha: "pitta", score: 2 },
        { text: "Large, heavy frame", dosha: "kapha", score: 2 },
      ],
    },
    {
      question: "How is your appetite?",
      options: [
        { text: "Variable, sometimes forget to eat", dosha: "vata", score: 2 },
        { text: "Strong, get irritable when hungry", dosha: "pitta", score: 2 },
        { text: "Steady, can skip meals easily", dosha: "kapha", score: 2 },
      ],
    },
    {
      question: "What is your sleep pattern?",
      options: [
        { text: "Light sleeper, difficulty falling asleep", dosha: "vata", score: 2 },
        { text: "Sound sleeper, moderate sleep needs", dosha: "pitta", score: 2 },
        { text: "Deep sleeper, need lots of sleep", dosha: "kapha", score: 2 },
      ],
    },
    {
      question: "How do you handle stress?",
      options: [
        { text: "Get anxious and worried", dosha: "vata", score: 2 },
        { text: "Get irritated and angry", dosha: "pitta", score: 2 },
        { text: "Remain calm and withdrawn", dosha: "kapha", score: 2 },
      ],
    },
    {
      question: "What is your skin type?",
      options: [
        { text: "Dry, rough, thin", dosha: "vata", score: 2 },
        { text: "Warm, oily, sensitive", dosha: "pitta", score: 2 },
        { text: "Thick, oily, smooth", dosha: "kapha", score: 2 },
      ],
    },
  ]

  const handleInputChange = (field, value) => {
    setFormData((prev) => ({
      ...prev,
      [field]: value,
    }))
  }

  const handleArrayChange = (field, value, checked) => {
    setFormData((prev) => ({
      ...prev,
      [field]: checked ? [...prev[field], value] : prev[field].filter((item) => item !== value),
    }))
  }

  const handleDoshaAnswer = (questionIndex, option) => {
    const newFormData = { ...formData }
    newFormData[`${option.dosha}Score`] += option.score

    // Calculate dominant dosha after all questions
    const vata = newFormData.vataScore
    const pitta = newFormData.pittaScore
    const kapha = newFormData.kaphaScore

    if (vata >= pitta && vata >= kapha) {
      newFormData.dominantDosha = "Vata"
    } else if (pitta >= kapha) {
      newFormData.dominantDosha = "Pitta"
    } else {
      newFormData.dominantDosha = "Kapha"
    }

    setFormData(newFormData)
  }

  const nextStep = () => {
    if (currentStep < 5) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    console.log("Diet Chart Data:", formData)
    alert("Diet chart preferences saved! (Check console for data)")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-orange-50 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-green-800 mb-2">Create Your Personalized Diet Chart</h1>
          <p className="text-gray-600">Based on Ayurvedic principles and your personal preferences</p>
        </div>

        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">Step {currentStep} of 5</span>
            <span className="text-sm text-gray-600">{Math.round((currentStep / 5) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-green-600 h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / 5) * 100}%` }}
            ></div>
          </div>
        </div>

        {/* Form Container */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          {/* Step 1: Personal Information */}
          {currentStep === 1 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Personal Information</h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Age</label>
                  <input
                    type="number"
                    value={formData.age}
                    onChange={(e) => handleInputChange("age", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your age"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Gender</label>
                  <select
                    value={formData.gender}
                    onChange={(e) => handleInputChange("gender", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Height (cm)</label>
                  <input
                    type="number"
                    value={formData.height}
                    onChange={(e) => handleInputChange("height", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter height in cm"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Weight (kg)</label>
                  <input
                    type="number"
                    value={formData.weight}
                    onChange={(e) => handleInputChange("weight", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter weight in kg"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Activity Level</label>
                  <select
                    value={formData.activityLevel}
                    onChange={(e) => handleInputChange("activityLevel", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select activity level</option>
                    <option value="sedentary">Sedentary (little to no exercise)</option>
                    <option value="light">Light (light exercise 1-3 days/week)</option>
                    <option value="moderate">Moderate (moderate exercise 3-5 days/week)</option>
                    <option value="active">Active (hard exercise 6-7 days/week)</option>
                    <option value="very-active">Very Active (very hard exercise, physical job)</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 2: Health Information */}
          {currentStep === 2 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Health Information</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Health Conditions (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Diabetes",
                      "Hypertension",
                      "Heart Disease",
                      "Thyroid Issues",
                      "PCOD/PCOS",
                      "Digestive Issues",
                      "Arthritis",
                      "None",
                    ].map((condition) => (
                      <label key={condition} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.healthConditions.includes(condition)}
                          onChange={(e) => handleArrayChange("healthConditions", condition, e.target.checked)}
                          className="mr-2 text-green-600 focus:ring-green-500"
                        />
                        <span className="text-sm text-gray-700">{condition}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Food Allergies (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {["Nuts", "Dairy", "Gluten", "Eggs", "Seafood", "Soy", "None"].map((allergy) => (
                      <label key={allergy} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.allergies.includes(allergy)}
                          onChange={(e) => handleArrayChange("allergies", allergy, e.target.checked)}
                          className="mr-2 text-green-600 focus:ring-green-500"
                        />
                        <span className="text-sm text-gray-700">{allergy}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Current Medications (if any)</label>
                  <textarea
                    value={formData.medications}
                    onChange={(e) => handleInputChange("medications", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    rows="3"
                    placeholder="List any medications you're currently taking"
                  />
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Dosha Assessment */}
          {currentStep === 3 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Ayurvedic Dosha Assessment</h2>
              <p className="text-gray-600 mb-6">
                Answer these questions to determine your dominant dosha (body constitution)
              </p>

              <div className="space-y-6">
                {doshaQuestions.map((q, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-lg">
                    <h3 className="font-medium text-gray-800 mb-3">{q.question}</h3>
                    <div className="space-y-2">
                      {q.options.map((option, optIndex) => (
                        <label key={optIndex} className="flex items-center cursor-pointer">
                          <input
                            type="radio"
                            name={`question-${index}`}
                            onChange={() => handleDoshaAnswer(index, option)}
                            className="mr-3 text-green-600 focus:ring-green-500"
                          />
                          <span className="text-gray-700">{option.text}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                ))}

                {formData.dominantDosha && (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                    <h3 className="font-semibold text-green-800 mb-2">Your Dominant Dosha: {formData.dominantDosha}</h3>
                    <p className="text-green-700 text-sm">
                      {formData.dominantDosha === "Vata" &&
                        "Vata types benefit from warm, moist, grounding foods and regular meal times."}
                      {formData.dominantDosha === "Pitta" &&
                        "Pitta types benefit from cooling, less spicy foods and avoiding excessive heat."}
                      {formData.dominantDosha === "Kapha" &&
                        "Kapha types benefit from light, warm, spicy foods and avoiding heavy, oily meals."}
                    </p>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Step 4: Dietary Preferences */}
          {currentStep === 4 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Dietary Preferences</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Diet Type</label>
                  <select
                    value={formData.dietType}
                    onChange={(e) => handleInputChange("dietType", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select diet type</option>
                    <option value="vegetarian">Vegetarian</option>
                    <option value="vegan">Vegan</option>
                    <option value="non-vegetarian">Non-Vegetarian</option>
                    <option value="eggetarian">Eggetarian</option>
                    <option value="jain">Jain</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Food Preferences (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Spicy Food",
                      "Sweet Food",
                      "Sour Food",
                      "Bitter Food",
                      "Salty Food",
                      "Raw Foods",
                      "Cooked Foods",
                      "Fermented Foods",
                    ].map((pref) => (
                      <label key={pref} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.foodPreferences.includes(pref)}
                          onChange={(e) => handleArrayChange("foodPreferences", pref, e.target.checked)}
                          className="mr-2 text-green-600 focus:ring-green-500"
                        />
                        <span className="text-sm text-gray-700">{pref}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Foods to Avoid (Select all that apply)
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {[
                      "Onion",
                      "Garlic",
                      "Mushrooms",
                      "Very Spicy",
                      "Very Sweet",
                      "Fried Foods",
                      "Processed Foods",
                      "None",
                    ].map((dislike) => (
                      <label key={dislike} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.dislikedFoods.includes(dislike)}
                          onChange={(e) => handleArrayChange("dislikedFoods", dislike, e.target.checked)}
                          className="mr-2 text-green-600 focus:ring-green-500"
                        />
                        <span className="text-sm text-gray-700">{dislike}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Preferred Meal Timing</label>
                    <select
                      value={formData.mealTiming}
                      onChange={(e) => handleInputChange("mealTiming", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select meal timing</option>
                      <option value="early">Early (6-7 AM, 12-1 PM, 6-7 PM)</option>
                      <option value="regular">Regular (7-8 AM, 1-2 PM, 7-8 PM)</option>
                      <option value="late">Late (8-9 AM, 2-3 PM, 8-9 PM)</option>
                      <option value="flexible">Flexible timing</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Cooking Time Available</label>
                    <select
                      value={formData.cookingTime}
                      onChange={(e) => handleInputChange("cookingTime", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select cooking time</option>
                      <option value="minimal">Minimal (15-30 minutes)</option>
                      <option value="moderate">Moderate (30-60 minutes)</option>
                      <option value="extensive">Extensive (1+ hours)</option>
                      <option value="meal-prep">Prefer meal prep on weekends</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Budget Range (per month)</label>
                  <select
                    value={formData.budget}
                    onChange={(e) => handleInputChange("budget", e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                  >
                    <option value="">Select budget range</option>
                    <option value="low">₹3,000 - ₹5,000</option>
                    <option value="medium">₹5,000 - ₹8,000</option>
                    <option value="high">₹8,000 - ₹12,000</option>
                    <option value="premium">₹12,000+</option>
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 5: Goals */}
          {currentStep === 5 && (
            <div>
              <h2 className="text-2xl font-semibold text-gray-800 mb-6">Health & Wellness Goals</h2>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Health Goals (Select all that apply)
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {[
                      "Weight Loss",
                      "Weight Gain",
                      "Muscle Building",
                      "Better Digestion",
                      "Increased Energy",
                      "Better Sleep",
                      "Stress Management",
                      "Immunity Boost",
                      "Skin Health",
                      "Hair Health",
                    ].map((goal) => (
                      <label key={goal} className="flex items-center">
                        <input
                          type="checkbox"
                          checked={formData.healthGoals.includes(goal)}
                          onChange={(e) => handleArrayChange("healthGoals", goal, e.target.checked)}
                          className="mr-2 text-green-600 focus:ring-green-500"
                        />
                        <span className="text-sm text-gray-700">{goal}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Weight Goal</label>
                    <select
                      value={formData.weightGoal}
                      onChange={(e) => handleInputChange("weightGoal", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select weight goal</option>
                      <option value="lose-fast">Lose weight quickly (1-2 kg/month)</option>
                      <option value="lose-steady">Lose weight steadily (0.5-1 kg/month)</option>
                      <option value="maintain">Maintain current weight</option>
                      <option value="gain-lean">Gain lean muscle</option>
                      <option value="gain-weight">Gain weight overall</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Timeframe</label>
                    <select
                      value={formData.timeframe}
                      onChange={(e) => handleInputChange("timeframe", e.target.value)}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    >
                      <option value="">Select timeframe</option>
                      <option value="1-month">1 Month</option>
                      <option value="3-months">3 Months</option>
                      <option value="6-months">6 Months</option>
                      <option value="1-year">1 Year</option>
                      <option value="long-term">Long-term lifestyle change</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex justify-between mt-8 pt-6 border-t border-gray-200">
            <button
              onClick={prevStep}
              disabled={currentStep === 1}
              className={`px-6 py-2 rounded-md font-medium ${
                currentStep === 1
                  ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                  : "bg-gray-500 text-white hover:bg-gray-600"
              }`}
            >
              Previous
            </button>

            {currentStep < 5 ? (
              <button
                onClick={nextStep}
                className="px-6 py-2 bg-green-600 text-white rounded-md font-medium hover:bg-green-700"
              >
                Next
              </button>
            ) : (
              <button
                onClick={handleSubmit}
                className="px-6 py-2 bg-orange-600 text-white rounded-md font-medium hover:bg-orange-700"
              >
                Create Diet Chart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
