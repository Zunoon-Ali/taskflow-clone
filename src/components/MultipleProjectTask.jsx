import React from 'react';
import { TbArrowFork } from 'react-icons/tb';

function MultipleProjectTask() {
    return (
        <section
            id="multipleProjectTask"
            className="my-6 md:my-12 min-h-screen w-[85vw] overflow-x-hidden mx-auto" 
            data-aos="fade-up"
        >
            <div className="multipleProjectContainer flex flex-col md:flex-row items-center justify-center bg-white rounded-xl  py-12 gap-8 shadow-xl shadow-gray-400 px-8">
                <div className="multipleProjectContent flex flex-col items-start md:items-center justify-center md:w-1/2 w-full">
                    <div className="multipleProjectHeading flex items-center gap-4 mb-6">
                        <TbArrowFork className="text-4xl md:text-6xl text-white bg-blue-500 rounded-full p-1 md:p-3" />
                        <h1 className="text-3xl md:text-5xl font-semibold text-gray-800">
                            Multiple Project Tasks
                        </h1>
                    </div> 
                    <p className="text-lg md:text-2xl text-gray-700 text-start leading-8">
                        Add a task to several projects.
                        <br /> Section and reorder within each project.
                        <br /><br />
                        <span className="text-gray-800 font-semibold">Flexible. Structured. <b>Done</b>.</span>
                    </p>
                </div>
                <img
                    src="./Multiple-Projects-iPhone.webp"
                    alt="Multiple project task on iPhone"
                    className="md:w-1/2 w-3/4 rounded-lg shadow-md"
                />
            </div>
        </section>
    );
}

export default MultipleProjectTask;
