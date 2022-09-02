import React, { useEffect } from 'react'
import faker from "@faker-js/faker";
import Task from './Task';
import {
    ChevronUpIcon
} from '@heroicons/react/24/outline';

function TaskColumn(props) {
    return (
        <div className="bg-gradient-to-b from-[#F4F5F8] to-slate-50 pt-7 w-fit mt-5 rounded-md">
            <div className="flex justify-between items-center px-5 font-medium">
                <h1 className="flex items-center">
                    {props.name}
                    <div className={props.nCount == undefined ? "opacity-0": "w-5 h-5 flex items-center justify-center rounded-full bg-red-500 text-xs text-white ml-3"}>
                        {props.nCount}
                    </div>
                </h1>
                <button className="text-xs">
                    View all
                </button>
            </div>
            {props.children}
            <div className="flex flex-col items-center text-xs text-gray-600 pb-5 mb-5 cursor-pointer">
                <ChevronUpIcon className="w-5 h-5" />
                View more
            </div>
        </div>
    )
}

export default TaskColumn
