import React, { useState } from 'react';
import { FaYoutube } from 'react-icons/fa';

function MeetTask() {
  const [isIframeLoaded, setIsIframeLoaded] = useState(false);

  return (
    <div>
      <section
        id="meetTask"
        className="min-h-[50vh] md:min-h-screen w-[95vw] overflow-x-hidden my-6 py-6 md:px-5 shadow-xl shadow-gray-400 mx-auto bg-white"
        data-aos="fade-up"
        data-aos-duration="800"
      >
        <div className="meetTask flex flex-col items-center justify-center gap-4">

          <div
            className="meetTaskHeading flex flex-row items-center justify-center gap-4 md:justify-center md:min-h-[200px] md:px-4 w-full mx-auto px-2"
            data-aos="zoom-in-up"
            data-aos-delay="200"
            data-aos-duration="1000"
          >
            <FaYoutube className="text-6xl text-gray-500 md:mt-1 " />
            <h1 className="text-3xl md:text-5xl font-medium text-center md:ml-2">
              Meet&nbsp;<b className="text-blue-500">Task Flow</b>
            </h1>
          </div>

          <div
            className="md:w-3/4 w-full aspect-video relative flex flex-col items-center justify-center mt-5 md:mt-0 px-2"
            data-aos="fade-up"
            data-aos-delay="400"
            data-aos-duration="1000"
          >
            {isIframeLoaded ? (
              <iframe
                src="https://www.youtube.com/embed/y_pYHAaGPLg?autoplay=1"
                frameBorder="0"
                className="w-full h-full"
                title="TaskFlow Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            ) : (
              <div
                className="relative w-full h-full cursor-pointer group"
                onClick={() => setIsIframeLoaded(true)}
              >
                <img
                  src="https://img.youtube.com/vi/y_pYHAaGPLg/hqdefault.jpg"
                  alt="TaskFlow Video Preview"
                  className="w-2/3 h-full object-cover rounded-md"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 ease-in-out rounded-md">
                  <FaYoutube className="text-white text-6xl" />
                </div>
              </div>
            )}
          </div>

        </div>
      </section>
    </div>
  );
}

export default MeetTask;
