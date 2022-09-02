import React from "react";
import {
  PaperClipIcon
} from '@heroicons/react/24/outline';

export default function TaskModal(props) {
  const [showModal, setShowModal] = React.useState(false);
  return (
    <>
      <div className="flex justify-between items-center pb-4 cursor-pointer"  onClick={()=>setShowModal(true)}>
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
      <div className="text-gray-400 pb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea quibusdam eos quos aut
      </div>
      {showModal ? (
        <>
          <div
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
          >
            <div className="relative w-auto my-6 mx-auto max-w-4xl">
              {/*content*/}
              <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex justify-between border-b border-solid">
                  <div className="flex items-start justify-between py-6 pl-10 border-b border-solid border-slate-200 rounded-t grow">
                    <h3 className="text-xl font-semibold pt-1">
                      Task Details
                    </h3>
                    <div className="flex space-x-2 pt-2">
                      <span className={props.remainingTime == undefined ? "opacity-0": "rounded-sm bg-gray-100 text-gray-500 px-3 text-xs py-[3px] cursor-pointer"}>
                        Est. {props.remainingTime}
                      </span>
                      <span className="rounded-sm bg-gray-100 text-gray-500 px-3 text-xs py-[3px] cursor-pointer">
                        View Attachments
                      </span>
                      <PaperClipIcon className="h-5 w-5 text-gray-500" />
                    </div>
                  </div>
                  <button  className="w-4 h-4 bg-slate-700 flex justify-center items-center text-white rounded-full text-[9px] m-2" onClick={()=> setShowModal(false)}>
                    x
                  </button>
                </div>
                {/*body*/}
                <div className="flex space-x-5 items-center cursor-pointer mx-12 pt-5" onClick={()=>setShowModal(true)}>
                  <div className=" rounded-md bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={props.profileImage} alt="profile" className="h-10 cursor-pointer rounded-full" />
                  </div>
                  <div>
                    <h1 className="font-medium text-lg">{props.name}</h1>
                    <p className="text-sm text-gray-500 pt-1">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit
                    </p>
                  </div>

                </div>
                <div className="mx-28 pt-5">
                    <p className="font-medium text-sm">Description</p>
                    <p className="text-xs text-gray-500 pt-1">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, beatae, aut esse ut fugit mollitia voluptates, dolorum odit ullam delectus voluptatem amet. In incidunt, earum esse, illum nobis ab id distinctio facilis laudantium assumenda atque, sequi repudiandae? Quidem quo odio alias asperiores temporibus, vitae provident similique, qui neque nobis ad.
                    </p>
                </div>
                <div className="mx-28 pt-5">
                    <p className="font-medium text-sm">Due Date</p>
                    <div className="flex text-xs items-center space-x-2 pt-5">
                      <span>15</span>
                      <span className="bg-slate-800 py-[10px] px-1 text-[10px] text-white rounded-lg">Aug</span>
                      <span>22</span>
                    </div>
                </div>
                {/*footer*/}
                <div className="flex justify-center space-x-5 mt-36 mb-10">
                  <button className="bg-slate-800 rounded-md text-white w-48 py-3 text-xs" onClick={()=> setShowModal(false)}>
                    Mark Complete
                  </button>
                  <button className="rounded-md border-2 border-slate-500 text-slate-800 w-48 py-3 text-xs" onClick={()=> setShowModal(false)}>
                    Send Files
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
}