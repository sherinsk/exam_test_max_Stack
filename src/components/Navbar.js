import React, { useState } from "react";
import {Bars4Icon,XMarkIcon} from '@heroicons/react/24/outline'


function Navbar()
{
    const [nav,setNav]=useState(false);
    const handleclick=()=>{setNav(!nav)};
    return(
        <div className="w-screen h-[60px] sm:h-[80px]  z-10 bg-zinc-200 drop-shadow-lg fixed">
            <div className="px-2 flex justify-between items-center w-full h-full">
                <div className="flex items-center">
                    <h1 className="text-3xl font-bold mr-4 sm:text-4xl">Brand</h1>
                    
<form>   
    <label for="search" class="mb-2 text-sm font-medium text-black-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="search" class="block w-full p-4 ps-10 text-sm text-black-900 border border-gray-300 rounded-lg bg-white-100 focus:ring-blue-500 focus:border-blue-500 bg-white-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search" required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

                </div>
                <div className="hidden md:flex pr-4">
                    <button className="border-none bg-transparent text-black mr-4">Signin</button>
                    <button className="px-8 py-3">Signup</button>
                </div>
                <div className="md:hidden cursor-pointer" onClick={handleclick}>
                    {nav?<XMarkIcon className="w-10"/>:<Bars4Icon className='w-10' />}
                </div>
            </div>
            <ul className={!nav?'hidden':'md:hidden absolute bg-zinc-200 w-full px-1'}>
            <li className="border-b-2 border-zinc-300 w-full">Home</li>
            <li className="border-b-2 border-zinc-300 w-full">About</li>
            <li className="border-b-2 border-zinc-300 w-full">Support</li>
            <li className="border-b-2 border-zinc-300 w-full">Platform</li>
            <li className="border-b-2 border-zinc-300 w-full">Pricing</li>
            <div className="flex flex-col my-4">
                <button className="bg-transparent text-indigo-600 px-8 py-3 mb-4">Sign In</button>
                <button className="px-8 py-3">Sign Up</button>
            </div>
            </ul>
           
        </div>
    )
}

export default Navbar;