import React from 'react';
import AppStoreBtn from './AppStoreBtn';
import { IoMdArrowDropup } from "react-icons/io";
import { FaCreativeCommonsPdAlt } from "react-icons/fa";

function TaskDone() {
    return (
        <section id="taskDone" className='my-3 md:my-12 min-h-screen w-full overflow-x-hidden bg-white md:py-12 py-3'>
            <div className="TaskDoneContainer flex flex-col items-center justify-center gap-5 md:mb-24 mb-6">
                <h1 className="text-3xl md:text-4xl text-gray-800 mt-6 mb-8 md:mb-16 leading-tight flex items-center font-bold">
                    Get Tasks&nbsp;<b>Done</b>
                </h1>

                <div className="getTaskDoneContent flex flex-col md:flex-row items-start md:items-center justify-evenly md:mx-auto gap-4 md:gap-6 w-full md:w-1/2 px-4">
                    <h2 className='text-3xl md:text-4xl text-gray-800 leading-tight font-bold'>
                        Get <b>Task Flow</b>.<br />It’s free.
                    </h2>
                    <AppStoreBtn className='w-full md:w-auto px-4' />
                </div>
            </div>

            <div className="btn w-full flex items-end justify-center mt-16 md:mt-24">
                <button className='flex items-center justify-center gap-3 text-orange-500 border border-orange-500 px-6 py-2 rounded-md'>
                    <span>
                        <FaCreativeCommonsPdAlt className='text-xl md:text-3xl text-white bg-orange-700 rounded-full p-1' />
                    </span>
                    <p className='text-sm md:text-md text-orange-500 text-start'>
                        Feature On <br />
                        <span className='font-semibold text-xl'>Product Hunt</span>
                    </p>
                    <p className='flex flex-col items-center justify-center gap-1'>
                        <IoMdArrowDropup className='text-2xl text-orange-500' />
                        <span className='text-md'>85</span>
                    </p>
                </button>
            </div>
        </section>
    );
}

export default TaskDone;
