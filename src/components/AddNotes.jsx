import React from 'react';
import { IoCalendar } from "react-icons/io5";
import { IoFlagSharp } from "react-icons/io5";

function AddNotes() {
    return (
        <div>
            <section id="setDueDatesAndPriorities" className='my-3 md:my-12 min-h-screen w-full overflow-x-hidden  md:py-12 py-3'>
                <div className="addNotesContainer flex flex-col md:flex-row items-center justify-between mx-auto gap-5 max-w-6xl">
                    <div className="setDueDates flex flex-col items-center justify-between w-full md:w-1/2 bg-white shadow-lg shadow-gray-400 rounded-xl my-5 overflow-hidden" >
                        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-6 mb-16 leading-tight flex items-center ">
                            <IoCalendar className="text-4xl md:text-5xl mr-4 bg-blue-600 text-white rounded-full p-2" />
                            Set Due Dates
                        </h1>
                        <img
                            src="./Set-Due-Dates-iPhone.webp"
                            alt="Set Due Dates"
                            className="w-1/2  mb-6"
                        />
                    </div>
                    <div className="addNotesPriorities flex flex-col items-center justify-between w-full md:w-1/2 bg-white shadow-lg shadow-gray-400 rounded-xl my-5">
                        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-6 mb-16 leading-tight flex items-center ">
                            <IoFlagSharp className="text-4xl md:text-5xl mr-4 bg-blue-600 text-white rounded-full p-2" />
                            Add Notes and Priorities
                        </h1>
                        <img
                            src="./Add-Notes-and-Priorities-iPhone.webp"
                            alt="Add Notes and Priorities"
                            className="w-1/2  mb-6"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default AddNotes;
