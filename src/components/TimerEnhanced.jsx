import React from 'react';
import { FaDotCircle } from "react-icons/fa";
import { GiSettingsKnobs } from "react-icons/gi";

function TimerEnhanced() {
    return (
        <div>
            <section
                id="timerEnhanced"
                className="my-3 md:my-12 min-h-screen w-full overflow-x-hidden md:py-12 py-3"
            >
                {/* Heading */}
                <div className="timerEnhancedHeading mb-16 w-11/12 md:w-1/2 mx-auto" data-aos="fade-up">
                    <h1 className="text-5xl md:text-7xl font-bold text-center text-gray-800 leading-tight">
                        Pomodoro Timer. <br /> Enhanced.
                    </h1>
                </div>

                {/* Container */}
                <div className="timerEnhancedContainer flex flex-col md:flex-row items-start justify-center mx-auto gap-5">

                    {/* Left Side */}
                    <div className="leftDiv flex flex-col items-center gap-5 w-full md:w-[35vw]" data-aos="fade-right">
                        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 flex items-center mb-10">
                            <FaDotCircle className="text-4xl md:text-5xl mr-4 bg-blue-700 text-white rounded-full border-3 border-blue-700" />
                            Simple. Focus.
                        </h1>
                        <img
                            src="./Focus-Timer-iPhone.webp"
                            alt="Focus Timer"
                            className="w-1/2 rounded-lg mt-12"
                        />
                    </div>

                    {/* Right Side */}
                    <div className="rightDiv flex flex-col items-start w-full md:w-[35vw] px-3 md:px-5 my-16 md:my-0" data-aos="fade-left">
                        <h1 className="text-3xl md:text-5xl font-semibold text-gray-800 flex items-center mb-8">
                            <GiSettingsKnobs className="text-4xl md:text-5xl mr-4 bg-blue-700 text-white rounded-full border-2 border-blue-700 p-1 -rotate-90" />
                            Flexible
                        </h1>

                        <h2 className="mb-4 leading-9 text-gray-800 text-lg md:text-2xl">
                            Need a moment to finish your focus?{" "}
                            <span className="font-bold text-blue-700">Postpone</span> will remind you in a few minutes.
                        </h2>
                        <h2 className="mb-6 leading-9 text-gray-800 text-lg md:text-2xl">
                            Often forget to get back to work?{" "}
                            <span className="text-orange-600 italic">Strict mode</span> will remind you when your break is over.
                        </h2>
                        <div className="rightImg flex items-center justify-center w-full my-10 md:my-0 p-7">
                            <img
                                src="./Focus-Timer-Flexible-iPhone.webp"
                                alt="Focus Timer Flexible"
                                className="w-2/3 rounded-lg "

                            />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default TimerEnhanced;
