import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4">Quberneu</h3>
          <p className="text-gray-400 mb-4">Built with ❤️ using React + Vite + Tailwind CSS</p>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">GitHub</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Documentation</a>
            <a href="#" className="text-gray-400 hover:text-white transition duration-300">Support</a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer