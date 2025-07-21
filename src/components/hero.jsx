import React from 'react';
import { FaApple, FaYoutube } from 'react-icons/fa';

function Hero() {
    return (
        <section id="hero" className="mt-24">
            <div className="hero-flex-div flex flex-col md:flex-row md:items-center justify-center px-4 md:px-8 gap-4">
                <div className="hero-img w-full md:w-1/2">
                    <img src="./taskflow-hero.webp" alt="hero image" className="w-full" />
                </div>
                <div className="hero-content flex flex-col items-start md:text-left gap-4 md:mt-0 mt-8">
                    <h1 className="font-semibold text-4xl md:text-5xl text-gray-900">Streamline your Task Flow</h1>
                    <p className="font-semibold md:text-2xl text-xl tracking-wide text-gray-800 leading-14 md:mb-4">
                        Task Flow concept. <br />
                        Multiple-project tasks. <br />
                        List & Board layouts. <br />
                        Enhanced Focus Timer.
                    </p>
                    <div className="flex gap-4 flex-col">
                        <a href='#' className="flex items-center gap-1 bg-black text-white md:px-6 py-2 px-0 rounded-lg  w-3/4 md:w-auto">
                            <div className="apple-logo">
                                <FaApple className=' text-3xl md:text-4xl' />
                            </div>
                            <div className="btn-text">
                                <p className='text-xs'>Download on the</p>
                                <p className='text-2xl'>App Store</p>
                            </div>
                        </a>
                        <a href='#' className="bg-[#4A4A4A] text-white px-8 py-3 rounded-lg flex items-center gap-2 w-full md:w-auto"> <span><FaYoutube /></span> Introduction Video</a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
