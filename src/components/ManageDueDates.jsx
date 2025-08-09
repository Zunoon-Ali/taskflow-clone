import React from 'react';
import { FaInbox } from 'react-icons/fa';

function ManageDueDates() {
    return (
        <div>
            <section
                id="manageDueDates"
                className="my-6 py-6 min-h-screen w-full overflow-x-hidden px-1 md:px-5"
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div
                    className="manageDueDatesContainer flex flex-col gap-4 bg-white w-full mx-auto shadow-xl shadow-gray-400 px-4 py-4 rounded-2xl flex-wrap"
                >
                    <div
                        className="dueDateHeading flex flex-col gap-4 w-[90%] md:w-3/4 mx-auto px-2 md:px-5 md:py-8 rounded-xl"
                        data-aos="fade-up"
                        data-aos-delay="0"
                        data-aos-duration="1000"
                    >
                        <div className="flex items-center gap-4">
                            <FaInbox className="text-4xl md:text-6xl text-white bg-blue-500 rounded-full p-1 md:p-3" />
                            <h1 className="text-3xl md:text-5xl font-medium text-gray-800">
                                <b> Manage</b> Due Dates
                            </h1>
                        </div>
                        <p className="text-2xl text-gray-700 font-medium">
                            Stuck with moving due dates for long-term tasks every next day?
                        </p>
                    </div>

                    <div
                        className="manageDueDateContent flex flex-col md:flex-row justify-between gap-6 w-full md:w-3/4 mx-auto mt-6 md:mt-10 md:px-0"
                    >
                        <div
                            className="text flex flex-col items-start text-lg md:text-xl text-gray-800 md:w-1/2 font-medium"
                            data-aos="fade-right"
                            data-aos-delay="200"
                            data-aos-duration="1000"
                        >
                            <p className='text-xl md:text-2xl text-gray-700 leading-8 mt-5 mb-16'>
                                My Task Flow <b className="text-blue-500">time-based sections</b> are perfect
                                for dealing with long-term tasks without using due dates.
                            </p>
                            <p className='text-xl md:text-2xl text-gray-700 leading-8 mb-5'>
                                Add a task to the <b className="text-blue-500">Today</b> section. When you’re
                                done for today, move it to the <b className="text-blue-500">Upcoming</b> section.
                            </p>
                        </div>

                        <img
                            src="./Manage-Due-Dates-Images.webp"
                            alt="Task Flow Manage Due Dates"
                            className="w-3/4 md:w-1/2 rounded-lg"
                            data-aos="fade-left"
                            data-aos-delay="400"
                            data-aos-duration="1000"
                            loading="lazy"
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ManageDueDates;
