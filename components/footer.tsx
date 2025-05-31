import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-teal-800 to-teal-700 backdrop-blur-sm border-t border-teal-600/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center h-16">
          <p className="text-white">
            &copy; {new Date().getFullYear()} Booster Power. All rights reserved.
          </p>
          <p className="text-white">
            Designed and developed by Rajendar Kathiravel
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
