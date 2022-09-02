import React, { useState } from 'react'
import {
  EllipsisHorizontalIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";

function TaskOptions() {
  const [showOptions, setShowOptions] = useState(false);
  return (
    <div className="flex flex-col items-end justify-end cursor-pointer relative" onClick={()=>setShowOptions(true)} >
      <EllipsisHorizontalIcon className="h-8 w-8" />
      <div className={showOptions ? "bg-[#282828] text-white text-center text-xs rounded absolute top-3": "hidden"} onMouseLeave={()=>setShowOptions(false)}>
        <p className="py-1 px-2 border-b border-white">View Details</p>
        <p className="py-1 px-2 border-b border-white">Update Status</p>
        <p className="py-1 px-2 border-b border-white">View Attachments</p>
        <p className="py-1 px-2 border-b border-white">Chat</p>
        <p className="py-1 px-2 border-b border-white">Delete</p>
      </div>
    </div>
  )
}

export default TaskOptions
