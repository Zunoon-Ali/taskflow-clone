import React from 'react';
import { FaYoutube } from 'react-icons/fa';

function MeetTask() {
  return (
    <div>
      <section
        id="meetTask"
        className="min-h-screen w-[95vw] overflow-x-hidden my-3 md:my-12 px-5 py-3 md:py-8 shadow-xl shadow-gray-400 mx-auto bg-white"
      >
        <div className="meetTask flex flex-col items-center justify-center gap-6">
          <div className="meetTaskHeading flex flex-row items-center justify-center gap-2 min-h-[200px] p-4 w-full mx-auto">
            <FaYoutube className="text-4xl md:text-6xl text-gray-500 mt-1" />
            <h1 className="text-4xl md:text-6xl font-semibold">
              Meet<b className="text-blue-500"> Task Flow</b>
            </h1>
          </div>
          <iframe
            src="https://www.youtube.com/embed/y_pYHAaGPLg"
            frameBorder="0"
            className="md:w-3/4 w-full aspect-video"
            title="TaskFlow Introduction"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </div>
  );
}

export default MeetTask;
