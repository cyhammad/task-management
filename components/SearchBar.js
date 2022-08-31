import React from "react";
import {
    MagnifyingGlassIcon,
  } from "@heroicons/react/24/outline"
  
function SearchBar() {
  return (
    <div>
      <div className="max-w-xs">
        <div className="mt-1 relative p-3 rounded-md">
          <div className="absolute inset-y-0 pl-3 flex items-center pointer-events-none">
            <MagnifyingGlassIcon className="h-5 w-5" />
          </div>
          <input
            className="bg-gray-50 h-8 pl-10 block w-full border-gray-300 rounded-md focus:ring-black focus:border-black"
            type="search"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
