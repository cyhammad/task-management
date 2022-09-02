import React, { useState } from 'react'
import {
    TrashIcon,
    EllipsisHorizontalIcon
} from '@heroicons/react/24/outline';

function User(props) {
  const [selected, setSelected] = useState(false);
  return (
    <>
      {selected? 
        <div className="bg-[#F4F5F8] mx-2 px-2 py-3 h-20 border-b border-gray-300 flex items-center gap-x-5 justify-between cursor-pointer" onClick={()=>setSelected(false)}>
          <input type="checkbox" name="selected" id="selected" className="w-4 h-4 checked:bg-blue-800" checked />
          <div className=" rounded-md bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={props.profileImage} alt="profile" className="h-10 cursor-pointer rounded-full" />
          </div>
          <p className="font-medium">{props.name}</p>
          <p className="text-gray-500 grow text-center ">{props.email}</p>
          <p className="text-gray-500 grow text-center">{props.phone}</p>
          <p className="bg-[#004064] text-white text-center px-4 py-1">{props.status}</p>
          <p className="text-gray-500 grow text-center ">{props.lastSeen}</p>
          <TrashIcon className="w-5 h-5 grow" />
          <EllipsisHorizontalIcon className="h-8 w-8" />
        </div>:
        <div className="mx-2 px-2 py-3 h-20 border-b border-gray-300 flex items-center gap-x-5 justify-between cursor-pointer" onClick={()=>setSelected(true)}>
          <input type="checkbox" name="selected" id="selected" className="w-4 h-4 checked:bg-blue-800" />
          <div className=" rounded-md bg-white">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={props.profileImage} alt="profile" className="h-10 cursor-pointer rounded-full" />
          </div>
          <p className="font-medium">{props.name}</p>
          <p className="text-gray-500 grow text-center ">{props.email}</p>
          <p className="text-gray-500 grow text-center">{props.phone}</p>
          <p className="bg-[#D5FFCE] text-amber-700 text-center px-4 py-1">{props.status}</p>
          <p className="text-gray-500 grow text-center ">{props.lastSeen}</p>
          <TrashIcon className="w-5 h-5 grow" />
          <EllipsisHorizontalIcon className="h-8 w-8" />
        </div>
      }
    </>
  )
}

export default User
