import React from 'react';
import { FaYoutube } from 'react-icons/fa';
import AppStoreBtn from './AppStoreBtn';

function Hero() {
    return (
        <section
            id="hero"
            className="mb-3 md:mb-8 py-5 md:py-6 min-h-screen w-full bg-white overflow-x-hidden"
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="hero-flex-div flex flex-col md:flex-row md:items-center justify-center px-4 md:px-8 gap-4">
                <div
                    className="hero-img w-full md:w-1/2"
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-duration="1200"
                >
                    <img src="./taskflow-hero.webp" alt="hero image" className="w-full" loading="lazy" />
                </div>

                <div
                    className="hero-content flex flex-col items-start md:text-left gap-4 md:mt-0 mt-8"
                    data-aos="fade-left"
                    data-aos-delay="400"
                    data-aos-duration="1200"
                >
                    <h1 className="font-semibold text-4xl md:text-5xl text-gray-900 md:w-[400px]">
                        Streamline your Task Flow
                    </h1>

                    <p className="font-medium md:text-2xl text-xl tracking-wide text-gray-800 leading-10 mb-4">
                        Task Flow concept. <br />
                        Multiple-project tasks. <br />
                        List & Board layouts. <br />
                        Enhanced Focus Timer.
                    </p>

                    <div
                        className="flex gap-4 flex-col"
                        data-aos="zoom-in-up"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <AppStoreBtn />
                        <a
                            href="#"
                            className="bg-[#4A4A4A] text-white px-8 py-3 rounded-lg flex items-center gap-2 w-full md:w-auto"
                        >
                            <b><FaYoutube className="text-xl text-white" /></b> Introduction Video
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Hero;
