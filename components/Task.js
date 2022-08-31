import React from 'react';
import { faker } from "@faker-js/faker";
import {
  EllipsisHorizontalIcon,
  ChatBubbleOvalLeftEllipsisIcon,
} from "@heroicons/react/24/outline";
import TaskModal from './TaskModal';
import CommentsModal from './CommentsModal';

function Task(props) {
  return (
    <div className='px-5 pt-5 pb-1 bg-white m-3 rounded-xl w-80 mb-3'>
      <div className="flex justify-between items-center pb-4">
        <TaskModal name={props.name} profileImage={faker.image.avatar()} remainingTime={props.remainingTime} />
        <span className={props.priority == "high"? "rounded-md text-white px-2 text-xs py-1 bg-red-500": props.priority == "mid"? "rounded-md text-white px-2 text-xs py-1 bg-yellow-500":"rounded-md text-white px-2 text-xs py-1 bg-blue-500"}>
          {props.priority}
        </span>
      </div>
      <div className="text-gray-400 pb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam eos quos aut
      </div>
      <CommentsModal commentCount={props.commentCount} profileImage={faker.image.avatar()} />
      <div className={props.taskNumber == undefined && props.remainingTime == undefined ? "hidden": "flex justify-between pb-4"}>
        <span className={props.taskNumber == undefined ? "opacity-0": "rounded-md bg-gray-700 text-white px-3 text-xs py-[4px] cursor-pointer"}>
          {props.taskNumber} task
        </span>
        <span className={props.remainingTime == undefined ? "opacity-0": "rounded-sm bg-gray-200 text-gray-500 px-1 text-xs py-[2px] cursor-pointer"}>
          Est. {props.remainingTime}
        </span>
      </div>
      <div className="flex justify-end cursor-pointer">
        <EllipsisHorizontalIcon className="h-8 w-8" />
      </div>
    </div>
  )
}

export default Task
