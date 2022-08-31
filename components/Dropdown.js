import React from 'react'
import {
  Bars3Icon,
} from "@heroicons/react/24/outline"
function Dropdown(props) {
    function toggleDropdown(){
        document.getElementById("dropdown").classList.toggle("hidden");
    }
    return (
        <div>
            <div className="relative inline-block">
                <div>
                <button type="button" id="menu-button" onClick={()=>toggleDropdown()} aria-expanded="true" aria-haspopup="true">
                    {props.toggleBtn}
                </button>
                </div>
                <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none hidden lg:hidden" id="dropdown" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabIndex="-1">
                <div className="py-1" role="none">
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-0">Search</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-1">Notifications</a>
                    <a href="#" className="text-gray-700 block px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-2">Profile Settings</a>
                    <hr />
                    <form method="POST" action="#" role="none">
                    <button type="submit" className="text-gray-700 block w-full text-left px-4 py-2 text-sm" role="menuitem" tabIndex="-1" id="menu-item-3">Sign out</button>
                    </form>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Dropdown
