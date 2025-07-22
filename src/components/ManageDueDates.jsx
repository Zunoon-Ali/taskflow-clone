import React from 'react';
import { FaInbox } from 'react-icons/fa';

function ManageDueDates() {
    return (
        <div>
            <section
                id="manageDueDates"
                className="my-3 md:my-12 min-h-screen w-full overflow-x-hidden"
            >
                <div className="manageDueDatesContainer  flex flex-col gap-4 bg-white w-[90%] md:w-3/4 mx-auto shadow-xl  px-4 py-4 rounded-2xl">

                    <div className="dueDateHeading flex flex-col gap-4 w-[90%] md:w-3/4 mx-auto md:px-5 md:py-8 rounded-xl">
                        <div className="flex items-center gap-4">
                            <FaInbox className="text-4xl md:text-6xl text-white bg-blue-500 rounded-full p-1 md:p-3" />
                            <h1 className="text-3xl md:text-5xl font-bold text-gray-800">
                                <b> Manage</b> Due Dates
                            </h1>
                        </div>
                        <p className="text-xl md:text-2xl text-gray-700 font-semibold">
                            Stuck with moving due dates for long-term tasks every next day?
                        </p>
                    </div>

                    <div className="manageDueDateContent flex flex-col md:flex-row justify-between gap-6 w-[90%] md:w-3/4 mx-auto mt-12">
                        <div className="text flex flex-col items-start text-lg md:text-xl text-gray-800 md:w-1/2">
                            <p className='text-2xl text-gray-700 leading-10 mt-5 mb-24'>
                                My Task Flow <strong className="text-blue-500">time-based sections</strong> are perfect
                                for dealing with long-term tasks without using due dates.
                            </p>
                            <p className='text-2xl text-gray-700 leading-10 mb-5'>
                                Add a task to the <strong className="text-blue-500">Today</strong> section. When you’re
                                done for today, move it to the <strong className="text-blue-500">Upcoming</strong> section.
                            </p>
                        </div>
                        <img
                            src="./Manage-Due-Dates-Images.webp"
                            alt="Task Flow Manage Due Dates"
                            className="w-full md:w-1/2 rounded-lg "
                        />
                    </div>
                </div>

            </section>
        </div>
    );
}

export default ManageDueDates;
