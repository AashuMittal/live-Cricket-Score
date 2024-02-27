import React from 'react'

import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav class="bg-gray-800">
    <div class="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
      <div class="relative flex h-16 items-center justify-between">
        <div class="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
          <button type="button" class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
            <span class="absolute -inset-0.5"></span>
            <span class="sr-only">Open main menu</span>
            
            <svg class="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
            </svg>
            
  
           
            <svg class="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div class="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
          <div class="flex flex-shrink-0 items-center">
            <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500" alt=""></img>
          </div>
          <div class="hidden sm:ml-6 sm:block">
            <div class="flex space-x-4">
          
            <Link to="" className="bg-gray-900 text-white rounded-md px-2 py-2 text-sm font-medium" aria-current="page">CrickLive</Link>
            <Link to="/" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-20 py-2 text-sm font-medium">Home</Link>
              <Link to="/live-score" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium">Live Score</Link>
              <Link to="/match" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium">All Match</Link>
              <Link to="/point-table" class="text-gray-300 hover:bg-gray-700 hover:text-white rounded-md px-10 py-2 text-sm font-medium">Point Table</Link>
            </div>
          </div>
        </div>
       
      </div>
    </div>
  
    
 
  </nav>
  )
}

export default Navbar;
