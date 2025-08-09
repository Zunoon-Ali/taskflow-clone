import React from 'react';
import AppStoreBtn from './AppStoreBtn';
import { IoMdArrowDropup } from "react-icons/io";
import { FaCreativeCommonsPdAlt } from "react-icons/fa";

function TaskDone() {
    return (
        <section
            id="taskDone"
            className='relative mt-6 mb-2 min-h-[95vh] w-full overflow-x-hidden bg-white pt-6 pb-2'
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1000"
        >
            <div
                className="TaskDoneContainer flex flex-col items-center justify-center gap-2 md:gap-5 md:mb-24 mb-6"
                data-aos="zoom-in"
                data-aos-delay="200"
                data-aos-duration="1000"
            >
                <h1 className="text-4xl md:text-6xl text-gray-800 mt-6 mb-8 md:mb-16 flex items-center justify-center font-medium ">
                    Get Tasks&nbsp;<b> Done</b>
                </h1>

                <div
                    className="getTaskDoneContent flex flex-col flex-wrap md:flex-row items-start md:items-center justify-evenly md:mx-auto gap-4 md:gap-6 w-full md:w-1/2 px-2 pl-12"
                    data-aos="fade-left"
                    data-aos-delay="300"
                    data-aos-duration="900"
                >
                    <h2 className='text-2xl md:text-4xl text-gray-800  md:pl-2 font-medium'>
                        Get <b>Task Flow</b>.<br />It’s free.
                    </h2>
                    <AppStoreBtn className='w-full md:w-auto px-3 my-8 md:my-0' />
                </div>
            </div>

            <div
                className="btn w-full absolute bottom-10 left-10 md:-left-20 transform md:translate-x-1/2"
                data-aos="fade-up"
                data-aos-delay="400"
                data-aos-duration="900"
            >
                <button className='flex items-center justify-center gap-3 text-orange-500 border border-orange-500 px-4 py-1 rounded-md cursor-pointer md:w-auto w-[260px]'>
                    <span>
                        <FaCreativeCommonsPdAlt className='text-xl md:text-3xl text-white bg-orange-700 rounded-full p-1' />
                    </span>
                    <p className='text-sm md:text-md text-orange-500 text-start'>
                        Feature On <br />
                        <span className='font-semibold text-xl'>Product Hunt</span>
                    </p>
                    <p className='flex flex-col items-center justify-center'>
                        <IoMdArrowDropup className='text-2xl text-orange-500' />
                        <span className='text-md'>85</span>
                    </p>
                </button>
            </div>
        </section>
    );
}

export default TaskDone;
