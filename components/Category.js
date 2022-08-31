import React from 'react'
import {
    GlobeAltIcon,
    TrashIcon,
    PencilIcon,
} from "@heroicons/react/24/outline";

function Category(props) {
  return (
    <div>
      <div className="bg-white px-4 py-2 flex space-x-3 rounded-lg min-w-[240px]">
        <div className="bg-blue-500 p-1 rounded-lg text-white">
            <GlobeAltIcon className="w-10 h-10" />
        </div>
        <div>
            <p className='text-sm font-medium'>{props.name}</p>
            <div className="flex space-x-2 pt-1">
                <button className='flex items-center space-x-1 text-xs pt-1 text-gray-500 hover:text-black'>
                    <TrashIcon className='w-4 h-4'/>
                    <span className='pt-[1px] underline'>
                        Delete
                    </span>
                </button>
                <button className='flex items-center space-x-1 text-xs pt-1 text-gray-500 hover:text-black'>
                    <PencilIcon className='w-4 h-4'/>
                    <span className='pt-[1px] underline'>
                        Edit
                    </span>
                </button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Category
