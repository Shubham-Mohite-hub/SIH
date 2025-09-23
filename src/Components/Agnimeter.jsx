"use client"

export default function AgnimeterPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-green-50">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-orange-800 mb-4">Agnimeter Guide</h1>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Understanding your digestive fire through Ayurvedic principles for optimal health and wellness
          </p>
        </div>

        {/* What is Agnimeter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-orange-700 mb-6 border-b-2 border-orange-200 pb-3">
            What is an Agnimeter?
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed mb-6">
            The Agnimeter is a modern assessment tool inspired by Ayurvedic principles. It helps measure the strength
            and balance of your digestive fire. By understanding your Agni, you can make informed dietary and lifestyle
            choices tailored to your body type and needs.
          </p>
        </div>

        {/* Types of Agni Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-orange-700 mb-6 border-b-2 border-orange-200 pb-3">Types of Agni</h2>
          <p className="text-gray-700 text-lg mb-6">Ayurveda classifies Agni into four main types:</p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-green-50 rounded-xl p-6 border-l-4 border-green-500">
              <h3 className="text-xl font-bold text-green-700 mb-3">Sama Agni</h3>
              <p className="text-gray-700">Balanced digestion; ideal and healthy.</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-l-4 border-blue-500">
              <h3 className="text-xl font-bold text-blue-700 mb-3">Vishama Agni</h3>
              <p className="text-gray-700">Irregular digestion; often associated with Vata imbalance.</p>
            </div>

            <div className="bg-red-50 rounded-xl p-6 border-l-4 border-red-500">
              <h3 className="text-xl font-bold text-red-700 mb-3">Tikshna Agni</h3>
              <p className="text-gray-700">Sharp and fast digestion; often associated with Pitta imbalance.</p>
            </div>

            <div className="bg-yellow-50 rounded-xl p-6 border-l-4 border-yellow-500">
              <h3 className="text-xl font-bold text-yellow-700 mb-3">Manda Agni</h3>
              <p className="text-gray-700">Slow or weak digestion; often associated with Kapha imbalance.</p>
            </div>
          </div>
        </div>

        {/* Why Use Agnimeter Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-orange-700 mb-6 border-b-2 border-orange-200 pb-3">
            Why Use the Agnimeter?
          </h2>
          <p className="text-gray-700 text-lg mb-6">Using the Agnimeter can help you:</p>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-700">Assess your digestive strength and weaknesses</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-700">Identify imbalances in your metabolism</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-700">Get personalized diet and lifestyle recommendations</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-700">Improve digestion, energy levels, and overall well-being</p>
            </div>
          </div>
        </div>

        {/* How It Works Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-3xl font-bold text-orange-700 mb-6 border-b-2 border-orange-200 pb-3">How It Works</h2>
          <p className="text-gray-700 text-lg mb-6">The Agnimeter typically evaluates:</p>

          <div className="space-y-4 mb-6">
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-700">Appetite and hunger patterns</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-700">Digestive comfort (bloating, acidity, heaviness)</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-700">Bowel movement regularity</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-700">Energy levels after meals</p>
            </div>
            <div className="flex items-start space-x-3">
              <div className="w-2 h-2 bg-orange-500 rounded-full mt-3 flex-shrink-0"></div>
              <p className="text-gray-700">Food preferences and cravings</p>
            </div>
          </div>

          <p className="text-gray-700 text-lg">
            After completing the assessment, it categorizes your Agni and provides suggestions for dietary habits, meal
            timings, and lifestyle practices to balance your digestive fire.
          </p>
        </div>

        {/* Daily Diet Chart Section */}
        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold text-orange-700 mb-6 border-b-2 border-orange-200 pb-3">
            Daily Diet Chart – Normal Healthy Person
          </h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-orange-100">
                  <th className="border border-orange-200 px-4 py-3 text-left font-bold text-orange-800">Time</th>
                  <th className="border border-orange-200 px-4 py-3 text-left font-bold text-orange-800">Meal</th>
                  <th className="border border-orange-200 px-4 py-3 text-left font-bold text-orange-800">
                    Recommended Foods / Notes
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="border border-orange-200 px-4 py-3 font-semibold text-orange-700">6:00 – 7:00 AM</td>
                  <td className="border border-orange-200 px-4 py-3 font-medium">Early Morning</td>
                  <td className="border border-orange-200 px-4 py-3">
                    Warm water with lemon, soaked almonds (3–4), herbal tea (optional)
                  </td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="border border-orange-200 px-4 py-3 font-semibold text-orange-700">7:30 – 8:30 AM</td>
                  <td className="border border-orange-200 px-4 py-3 font-medium">Breakfast</td>
                  <td className="border border-orange-200 px-4 py-3">
                    Oatmeal, poha, upma, vegetable paratha, milk (optional), fresh fruits
                  </td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="border border-orange-200 px-4 py-3 font-semibold text-orange-700">10:30 – 11:00 AM</td>
                  <td className="border border-orange-200 px-4 py-3 font-medium">Mid-Morning Snack</td>
                  <td className="border border-orange-200 px-4 py-3">
                    Fresh fruits, coconut water, buttermilk, or sprouts salad
                  </td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="border border-orange-200 px-4 py-3 font-semibold text-orange-700">12:30 – 1:30 PM</td>
                  <td className="border border-orange-200 px-4 py-3 font-medium">Lunch</td>
                  <td className="border border-orange-200 px-4 py-3">
                    1–2 chapatis, cooked vegetables, dal (lentils), brown rice (optional), yogurt, salad
                  </td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="border border-orange-200 px-4 py-3 font-semibold text-orange-700">3:30 – 4:00 PM</td>
                  <td className="border border-orange-200 px-4 py-3 font-medium">Evening Snack</td>
                  <td className="border border-orange-200 px-4 py-3">Green tea, herbal tea, roasted seeds, or nuts</td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="border border-orange-200 px-4 py-3 font-semibold text-orange-700">6:30 – 7:30 PM</td>
                  <td className="border border-orange-200 px-4 py-3 font-medium">Dinner</td>
                  <td className="border border-orange-200 px-4 py-3">
                    Light meal: soup, khichdi, cooked vegetables, 1 chapati (avoid heavy rice)
                  </td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="border border-orange-200 px-4 py-3 font-semibold text-orange-700">8:00 – 8:30 PM</td>
                  <td className="border border-orange-200 px-4 py-3 font-medium">Post-Dinner</td>
                  <td className="border border-orange-200 px-4 py-3">
                    Warm milk with a pinch of turmeric (optional), light herbal infusion
                  </td>
                </tr>
                <tr className="hover:bg-orange-50 transition-colors">
                  <td className="border border-orange-200 px-4 py-3 font-semibold text-orange-700">Bedtime</td>
                  <td className="border border-orange-200 px-4 py-3 font-medium">Sleep</td>
                  <td className="border border-orange-200 px-4 py-3">
                    Ensure 7–8 hours of sleep, avoid late-night heavy meals
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer Note */}
        <div className="text-center mt-8 p-6 bg-orange-100 rounded-xl">
          <p className="text-orange-800 font-medium">
            Remember: This is a general guide. Individual dietary needs may vary based on your unique constitution,
            health conditions, and lifestyle. Consult with an Ayurvedic practitioner for personalized recommendations.
          </p>
        </div>
      </div>
    </div>
  )
}
