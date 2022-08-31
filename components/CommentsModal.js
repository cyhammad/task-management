import React from 'react'
import {faker} from "@faker-js/faker"

import {
    ChatBubbleOvalLeftEllipsisIcon,
    PaperAirplaneIcon,
    ArrowUturnLeftIcon,
  } from "@heroicons/react/24/outline";
import {
    HandThumbUpIcon
  } from "@heroicons/react/24/solid";

function CommentsModal(props) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <div>
            <div className={props.commentCount == undefined ? "hidden": "flex space-x-2 items-center cursor-pointer"} onClick={()=>setShowModal(true)}>
                <div className=" rounded-md bg-white">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={faker.image.avatar()} alt="profile" className="h-4 cursor-pointer rounded-full" />
                </div>
                <p className="text-xs flex items-center text-gray-400 my-2">
                    {props.commentCount} comments
                    <ChatBubbleOvalLeftEllipsisIcon className="h-3 w-3 ml-1"/>
                </p>
            </div>
            {showModal ? (
                <>
                    <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
                    >
                    <div className="relative w-auto my-6 mx-auto max-w-4xl lg:min-w-[70vw]">
                        {/*content*/}
                        <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex justify-between border-b border-solid">
                            <div className="flex justify-between items-center py-6 pl-10 border-b border-solid border-slate-200 rounded-t grow">
                                <div className=" rounded-md bg-white">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={props.profileImage} alt="profile" className="h-10 cursor-pointer rounded-full" />
                                </div>
                                <div className="px-5 py-4 grow border border-blue-200 rounded-md flex mx-2 bg-white">
                                    <input type="text" className="bg-inherit w-full focus:outline-none" placeholder="Type Comment ..." />
                                    <PaperAirplaneIcon className="h-7 w-7 mr-3 text-gray-500 hover:text-black cursor-pointer" />
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
                                <h1 className="font-medium">Beyond Solution</h1>
                                <p className="text-xs text-gray-500 pt-1">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                </p>
                            </div>
                        </div>
                        <div className='flex space-x-1 items-center mx-28 mt-2'>
                            <ArrowUturnLeftIcon className='w-3 h-3' />
                            <p className="text-[10px]">Reply</p>
                            <HandThumbUpIcon className='w-3 h-3 text-blue-500' />
                            <p className="text-[10px]">1 Like</p>
                        </div>
                        <div className="flex space-x-5 items-center cursor-pointer mx-20 pt-5" onClick={()=>setShowModal(true)}>
                            <div className=" rounded-md bg-white">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={props.profileImage} alt="profile" className="h-10 cursor-pointer rounded-full" />
                            </div>
                            <div>
                                <h1 className="font-medium">Beyond Solution</h1>
                                <p className="text-xs text-gray-500 pt-1">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                </p>
                            </div>
                        </div>
                        <div className='flex space-x-1 items-center mx-36 mt-2'>
                            <ArrowUturnLeftIcon className='w-3 h-3' />
                            <p className="text-[10px]">Reply</p>
                            <HandThumbUpIcon className='w-3 h-3 text-blue-500' />
                            <p className="text-[10px]">1 Like</p>
                        </div>
                        <div className="flex space-x-5 items-center cursor-pointer mx-20 pt-5" onClick={()=>setShowModal(true)}>
                            <div className=" rounded-md bg-white">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img src={props.profileImage} alt="profile" className="h-10 cursor-pointer rounded-full" />
                            </div>
                            <div>
                                <h1 className="font-medium">Beyond Solution</h1>
                                <p className="text-xs text-gray-500 pt-1">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit
                                </p>
                            </div>
                        </div>
                        <div className='flex space-x-1 items-center mx-36 mt-2'>
                            <ArrowUturnLeftIcon className='w-3 h-3' />
                            <p className="text-[10px]">Reply</p>
                            <HandThumbUpIcon className='w-3 h-3 text-blue-500' />
                            <p className="text-[10px]">1 Like</p>
                        </div>
                        {/*footer*/}
                        <div className="mb-10">
                            <div className="flex space-x-5 items-center cursor-pointer mx-20 pt-5" onClick={()=>setShowModal(true)}>
                                <div className=" rounded-md bg-white">
                                    {/* eslint-disable-next-line @next/next/no-img-element */}
                                    <img src={props.profileImage} alt="profile" className="h-10 cursor-pointer rounded-full" />
                                </div>
                                <div className="px-5 py-4 grow border border-blue-200 rounded-md flex mx-2 bg-white">
                                    <input type="text" className="bg-inherit w-full focus:outline-none" placeholder="Reply   ..." />
                                </div>
                            </div>
                        </div>
                        </div>
                    </div>
                    </div>
                    <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
                </>
                ) : null}
        </div>

    )
}

export default CommentsModal
