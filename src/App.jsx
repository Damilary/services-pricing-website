// filepath: src/App.jsx
import { SpeedInsights } from "@vercel/speed-insights/react"
import './App.css'

function App() {
  return (
    <div className="min-h-screen bg-white py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white shadow-lg rounded-lg p-8">
          <h1 className="text-4xl font-bold text-center text-black mb-2">
            Our Services & Pricing
          </h1>
          <p className="text-center text-gray-600 mb-8">
            Estimate: $1 = ₦1400
          </p>

          {/* Content Creation Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Content Creation
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-black">
                  Single Promo Reel (30s - 60s)
                </h3>
                <p className="text-gray-700 mb-2">
                  Get a high-impact, short video to capture your audience\'s attention.
                </p>
                <p className="font-medium text-black">
                  Price: ₦12,000 ($8.57)
                </p>
              </div>
              
              <div className="border-l-4 border-blue-500 pl-4">
                <h3 className="font-semibold text-black">
                  Product Photography/Videography Set
                </h3>
                <p className="text-gray-700 mb-2">
                  Professional visuals to make your products stand out.
                </p>
                <p className="font-medium text-black">
                  Price: ₦50,000 ($35.71) per session
                </p>
                <p className="text-sm text-gray-600 italic">
                  Note: A package of 4 sessions monthly is available. Ts & Cs apply.
                </p>
              </div>
            </div>
          </section>

          {/* Branding & Web Design Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Branding & Web Design
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-black">
                  Logo Design (3 Concepts)
                </h3>
                <p className="text-gray-700 mb-2">
                  Receive three unique logo concepts to build your brand identity.
                </p>
                <p className="font-medium text-black">
                  Price: ₦25,000 ($17.86) – ₦75,000 ($53.57) (depending on complexity)
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-black">
                  One Landing Page
                </h3>
                <p className="text-gray-700 mb-2">
                  A custom-designed page to convert visitors into customers.
                </p>
                <p className="font-medium text-black">
                  Price: ₦80,000 ($57.14) and up (depending on complexity)
                </p>
              </div>
              
              <div className="border-l-4 border-green-500 pl-4">
                <h3 className="font-semibold text-black">
                  Bumpa Setup and Management
                </h3>
                <p className="text-gray-700 mb-2">
                  I\'ll set up and manage your Bumpa store, with 24/7 support included.
                </p>
                <p className="font-medium text-black">
                  Price: ₦70,000 ($50.00) monthly
                </p>
              </div>
            </div>
          </section>

          {/* Ad Campaigns Section */}
          <section className="mb-8">
            <h2 className="text-2xl font-semibold text-black mb-4">
              Ad Campaigns
            </h2>
            <div className="space-y-4">
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-black">
                  WhatsApp Ads
                </h3>
                <p className="text-gray-700 mb-2">
                  A strategic ad service to reach your customers directly on WhatsApp.
                </p>
                <p className="font-medium text-black">
                  Price: ₦7,000 ($5.00) daily or ₦140,000 ($100.00) per month for 5 days weekly
                </p>
                <p className="text-sm text-gray-600 italic">
                  This covers ads with a link, a link and picture, or a link and video.
                </p>
              </div>
              
              <div className="border-l-4 border-purple-500 pl-4">
                <h3 className="font-semibold text-black">
                  Ad Campaign Setup
                </h3>
                <p className="text-gray-700 mb-2">
                  I\'ll set up your campaign for success, so you just need to provide the budget.
                </p>
                <p className="font-medium text-black">
                  Setup Fee: ₦20,000 ($14.29)
                </p>
                <p className="text-sm text-gray-600 italic">
                  Note: This fee does not include your ad spend. The minimum recommended budget is ₦140,000 ($100.00) to see effective results. DM me to learn more.
                </p>
              </div>
            </div>
          </section>

          {/* Contact Section */}
          <section className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-lg text-gray-700">
              Ready to get started? DM me to discuss your project!
            </p>
          </section>
        </div>
      </div>
      <SpeedInsights />
    </div>
  )
}

export default App


