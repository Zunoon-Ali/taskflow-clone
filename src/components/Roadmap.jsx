import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

function Roadmap() {
    return (
        <div>
            <section id="roadmap" className='min-h-screen w-full overflow-x-hidden px-2 my-7 md:my-12 flex flex-col justify-center items-center'>
                <h1 className='text-5xl md:text-6xl font-semibold text-center text-gray-800 flex '>
                    <CiCirclePlus className='text-6xl md:text-7xl bg-blue-700  text-white rounded-full mr-5' />
                    Roadmap
                </h1>
                <div className="roadmapContainer flex flex-col items-center justify-center mx-auto md:w-3/4">
                    <p className='lead text-2xl md:text-2xl text-gray-800 md:my-24 my-12 tracking-wide'>Task Flow becomes even better with each new release</p>
                    <img src="./Roadmap.svg" alt=" Roadmap" className='w-full md:w-2/3 my-10' />
                    <p className='lead text-2xl md:text-2xl text-gray-800 md:my-24 my-12 tracking-wide px-4 md:px-24 md:text-center' >
                        We are very thankful to our users for suggesting new features and providing feedback!
                    </p>
                    <h2 className='text-2xl md:text-3xl text-gray-800 md:my-24 my-12 tracking-wide flex items-center    justify-center gap-5'>Stay Tuned
                        <FaTwitter className='text-4xl md:text-6xl text-gray-700 bg-gray-200 rounded-full p-2 md:p-4' />
                    </h2>

                </div>
            </section>
        </div>
    )
}

export default Roadmap
