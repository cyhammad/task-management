import React from 'react'
import CommentsModal from './CommentsModal'

import {
    EllipsisHorizontalIcon
} from "@heroicons/react/24/outline"
import Link from 'next/link'
import TaskOptions from './TaskOptions'

function Project(props) {

    return (
        <div>
        <div className='px-5 pt-5 pb-1 bg-white m-3 rounded-xl w-80 mb-3'>
            <Link href="/projecttasks">
                <div className="flex justify-between items-center pb-4 cursor-pointer">
                    <div className="flex space-x-2 items-center">
                    <div className=" rounded-md bg-white">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img src={props.profileImage} alt="profile" className="h-10 cursor-pointer rounded-full" />
                    </div>
                    <h1>{props.name}</h1>
                    </div>
                    <span className={props.priority == "high"? "rounded-md text-white px-2 text-xs py-1 bg-red-500": props.priority == "mid"? "rounded-md text-white px-2 text-xs py-1 bg-yellow-500":"rounded-md text-white px-2 text-xs py-1 bg-blue-500"}>
                    {props.priority}
                    </span>
                </div>
            </Link>
            <div className="text-gray-400 pb-4">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam eos quos aut
            </div>
            <CommentsModal commentCount={props.commentCount} />
            <div className={props.taskNumber == undefined && props.remainingTime == undefined ? "hidden": "flex justify-between pb-4"}>
                <span className={props.taskNumber == undefined ? "opacity-0": "rounded-md bg-gray-700 text-white px-3 text-xs py-[4px] cursor-pointer"}>
                {props.taskNumber} task
                </span>
                <span className={props.remainingTime == undefined ? "opacity-0": "rounded-sm bg-gray-200 text-gray-500 px-1 text-xs py-[2px] cursor-pointer"}>
                Est. {props.remainingTime}
                </span>
            </div>
            <TaskOptions />
        </div>
        </div>
    )
}

export default Project
