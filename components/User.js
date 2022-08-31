import React from 'react'
import {
    TrashIcon,
    EllipsisHorizontalIcon
} from '@heroicons/react/24/outline';

function User(props) {
  return (
    <div className="mx-2 px-2 py-3 h-20 border-b border-gray-300 flex items-center gap-x-5 justify-between">
        <input type="checkbox" name="selected" id="selected" className="w-4 h-4 checked:bg-blue-800" />
        <div className=" rounded-md bg-white">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={props.profileImage} alt="profile" className="h-10 cursor-pointer rounded-full" />
        </div>
        <p className="font-medium">{props.name}</p>
        <p className="text-gray-500 grow text-center ">{props.email}</p>
        <p className="text-gray-500 grow text-center">{props.phone}</p>
        <p className="bg-amber-200 text-amber-700 text-center px-4 py-1">{props.status}</p>
        <p className="text-gray-500 grow text-center ">{props.lastSeen}</p>
        <TrashIcon className="w-5 h-5 grow" />
        <EllipsisHorizontalIcon className="h-8 w-8" />
    </div>
  )
}

export default User
