import React from 'react'

function Message(props) {
  return (
    <div>
        <div className={props.opened == true ? "bg-slate-200 px-4 py-4 flex space-x-3 min-w-[240px]":"bg-white px-4 py-4 flex space-x-3 min-w-[240px]"}>
        <div className=" rounded-md bg-white">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={props.senderImage} alt="profile" className="h-10 cursor-pointer rounded-full" />
        </div>
        <div className="flex justify-between w-full">
            <div>   
                <p className='text-sm font-medium'>{props.sender}</p>
                <div className="flex space-x-2 pt-1">
                    <span className="text-[10px] text-gray-500">Lorem ipsum dolor sit amet.</span>
                </div>
            </div>
            <p className="text-[10px] font-medium">{props.messageTime}</p>
        </div>
      </div>
    </div>
  )
}

export default Message
