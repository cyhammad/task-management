import React from 'react'
import {
    PaperAirplaneIcon,
    PaperClipIcon,
} from "@heroicons/react/24/solid"

function OpenedMessage() {
  return (
    <div className='flex flex-col justify-end h-full'>
        <div className="mt-5 px-5 py-6 border border-gray-200 rounded-md flex mx-2 bg-white">
            <input type="text" className="bg-inherit w-full focus:outline-none" placeholder="Type Message ..." />
            <PaperClipIcon className="h-7 w-7 mr-3 text-gray-500 hover:text-black cursor-pointer" />
            <PaperAirplaneIcon className="h-7 w-7 mr-3 text-gray-500 hover:text-black cursor-pointer" />
        </div>
    </div>
  )
}

export default OpenedMessage
