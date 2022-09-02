import React from 'react'
import {
    PlusIcon
} from "@heroicons/react/24/outline";

function AddCategoryModal(props) {
    const [showModal, setShowModal] = React.useState(false);
    return (
        <>
        <button className="underline text-gray-500 pr-3" onClick={()=>setShowModal(true)}>
            +Add New
        </button>
        {showModal ? (
            <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
            >
                <div className="relative w-auto my-6 mx-auto max-w-4xl lg:min-w-[600px]">
                {/*content*/}
                <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex justify-between border-b border-solid">
                    <div className="flex items-start justify-between py-6 pl-10 border-b border-solid border-slate-200 rounded-t grow">
                        <h3 className="text-xl font-semibold pt-1">
                            Add Category
                        </h3>
                    </div>
                    <button  className="w-4 h-4 bg-slate-700 flex justify-center items-center text-white rounded-full text-[9px] m-2" onClick={()=> setShowModal(false)}>
                        x
                    </button>
                    </div>
                    {/*body*/}
                    <div className="flex justify-center items-center pt-8">
                        <div className="bg-blue-50 p-8 flex justify-center items-center rounded-xl">
                            <div className="bg-[#004064] flex justify-center items-center text-white px-2 py-2 rounded-lg">
                                <PlusIcon className='h-6 w-6' />
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col items-center  justify-center pt-3">
                        <p className="font-medium">Upload Icon</p>
                        <p className="text-xs text-gray-500">
                            Upload 1:1 ratio icon
                        </p>
                    </div>
                    {/*footer*/}
                    <div className="flex flex-col justify-center items-center space-y-5 mt-10 mb-10 px-10">
                        <input type="text" name="categoryName" id="categoryName" className="rounded-md border-2 border-slate-500 text-slate-800 w-48 p-3 text-xs" placeholder="Category's Name" />
                        <button className="bg-[#004064] rounded-md text-white w-48 py-3 text-xs" onClick={()=> setShowModal(false)}>
                            Add Category
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

export default AddCategoryModal
