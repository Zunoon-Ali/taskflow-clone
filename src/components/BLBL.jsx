import React from 'react';
import { FaSpotify } from 'react-icons/fa';

function BLBL() {
    return (
        <div>
            <section
                id="blbl"
                className='my-3 md:my-12 min-h-screen w-[95vw] overflow-x-hidden bg-white shadow-xl shadow-gray-400 md:py-6 py-3 mx-auto'
                data-aos="fade-up"
                data-aos-duration="800"
            >
                <div
                    className="blbl-heading flex items-center justify-center gap-4 px-5 md:px-12"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                >
                    <FaSpotify className="text-blue-500 text-6xl -rotate-90" />
                    <h1 className='text-4xl md:text-6xl font-semibold text-black md:w-auto w-full text-center'>
                        Beautiful <b className='text-blue-500'>List</b> & <b className='text-blue-500'>Board</b> Layouts
                    </h1>
                </div>

                <div className="flex flex-col md:flex-row px-5 items-center justify-center mx-auto">

                    <div
                        className="blblContent flex flex-col items-center justify-center gap-4 md:w-[350px]"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <p className='text-xl md:text-2xl text-gray-800 mt-4'>
                            Select a layout that perfectly matches your project.
                        </p>
                        <p className='text-xl md:text-2xl text-gray-800 mt-2 mb-8'>
                            <b className='text-blue-500'>Sectioned</b> List and <b className='text-blue-500'>Board pipeline</b> (Kanban) are here to suit your workflow.
                        </p>
                    </div>

                    <img
                        src="./taskflow-list-board.webp"
                        alt="list of boards"
                        className='w-full md:w-1/2 my-8'
                        data-aos="fade-left"
                        data-aos-delay="400"
                        data-aos-duration="1000"
                    />
                </div>
            </section>
        </div>
    );
}

export default BLBL;
