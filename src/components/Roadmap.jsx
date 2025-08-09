import React from 'react'
import { CiCirclePlus } from "react-icons/ci";
import { FaTwitter } from "react-icons/fa";

function Roadmap() {
    return (
        <div>
            <section
                id="roadmap"
                className='min-h-screen w-full overflow-x-hidden px-2 my-6 py-6 flex flex-col justify-center items-center'
            >
                {/* Heading */}
                <h1
                    className='text-4xl  md:text-6xl font-semibold text-center text-gray-800 flex'
                    data-aos="fade-up"
                    data-aos-duration="800"
                >
                    <CiCirclePlus className='text-5xl md:text-7xl bg-blue-700 text-white rounded-full mr-1 md:mr-5 ' />
                    Roadmap
                </h1>

                {/* Content Container */}
                <div className="roadmapContainer flex flex-col items-center justify-center mx-auto md:w-3/4">

                    {/* Subheading */}
                    <p
                        className='text-xl md:text-2xl text-gray-800 md:mt-8 mb-6 mt-6 text-center'
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        Task Flow becomes even better with each new release
                    </p>

                    {/* Roadmap Image */}
                    <img
                        src="./Roadmap.svg"
                        alt=" Roadmap"
                        className='w-auto md:w-3/4 my-16'
                        data-aos="zoom-in"
                        data-aos-delay="400"
                        data-aos-duration="1000"
                        loading="lazy"
                    />

                    {/* Thank You Message */}
                    <p
                        className='text-center lead text-xl md:text-2xl text-gray-800 md:mt-8 mb-6 mt-6 tracking-wide px-2 md:px-24 md:text-center fonr-medium'
                        data-aos="fade-up"
                        data-aos-delay="600"
                        data-aos-duration="800"
                    >
                        We are very thankful to our users for suggesting new features and providing feedback!
                    </p>

                    {/* Final CTA */}
                    <h2
                        className='text-2xl md:text-3xl text-gray-800 md:mt-8 mt-5 mb-6 md:tracking-wide flex items-center justify-center gap-5'
                        data-aos="fade-up"
                        data-aos-delay="800"
                        data-aos-duration="800"
                    >
                        Stay Tuned
                        <FaTwitter className='text-5xl md:text-6xl text-gray-700 bg-gray-200 rounded-full p-2 md:p-4'/>
                    </h2>

                </div>
            </section>
        </div>
    );
}

export default Roadmap;
