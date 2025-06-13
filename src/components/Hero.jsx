import React from 'react'

const Hero = () => {
  const handleGetStarted = () => {
    alert('Welcome to Quberneu! 🚀')
  }

  return (
    <div className="bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Welcome to
            <span className="text-blue-600"> Quberneu</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            A modern landing page built with React, Vite and Tailwind CSS. 
            Fast, responsive, and ready for your next project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleGetStarted}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition duration-300 shadow-lg hover:shadow-xl"
            >
              Get Started
            </button>
            <button className="bg-white text-blue-600 border-2 border-blue-600 px-8 py-3 rounded-lg text-lg font-semibold hover:bg-blue-50 transition duration-300">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero