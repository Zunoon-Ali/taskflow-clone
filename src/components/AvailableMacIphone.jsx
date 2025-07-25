import React from 'react';

function AvailableMacIphone() {
    return (
        <section
            id="availableMacIphone"
            className="my-3 md:my-12 min-h-screen w-full overflow-x-hidden px-4 mx-auto" 
            data-aos="fade-up"
            data-aos-duration="1000"
        >
            <div className="availableMacIphoneContainer bg-white w-full text-center flex flex-col items-center rounded-xl shadow-xl shadow-gray-400 py-8">
                <h1
                    className="text-4xl md:text-6xl font-semibold text-gray-800 mt-6 mb-16 leading-tight"
                    data-aos="zoom-in-up"
                    data-aos-delay="200"
                    data-aos-duration="1000"
                >
                    Available on{' '}
                    <span className="text-blue-500 font-bold">Mac</span>,{' '}
                    <span className="text-blue-500 font-bold">iPad</span>, and{' '}
                    <span className="text-blue-500 font-bold">iPhone</span>
                </h1>
                <img
                    src="./avaible-on-mac-iphone.webp"
                    alt="Available on Mac, iPad, and iPhone"
                    className="w-full md:w-3/4 max-w-5xl mb-6 object-contain"
                    data-aos="fade-up"
                    data-aos-delay="400"
                    data-aos-duration="1000"
                />
            </div>
        </section>
    );
}

export default AvailableMacIphone;
