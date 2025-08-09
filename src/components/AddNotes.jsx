import React from 'react';
import { IoCalendar } from "react-icons/io5";
import { IoFlagSharp } from "react-icons/io5";
import ColHeadImg from './ColHeadImg';

function AddNotes() {
    return (
        <div>
            <section
                id="setDueDatesAndPriorities"
                className='my-3 md:my-12 min-h-screen w-full overflow-x-hidden md:py-12 py-3'
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div className="addNotesContainer flex flex-col md:flex-row items-center justify-between mx-auto gap-5 max-w-6xl px-5">

                    <div
                        className="setDueDates flex flex-wrap flex-col items-center justify-center w-[98vw] md:w-[38vw] bg-white shadow-lg shadow-gray-400 rounded-xl my-5 overflow-hidden flex-grow h-full py-5"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <ColHeadImg
                            imageSrc="./Set-Due-Dates-iPhone.webp"
                            heading="Set Due Dates"
                            Icon={IoCalendar}
                            imgClassName={"w-full md:w-[20vw]"}
                        />
                    </div>

                    <div
                        className="addNotesPriorities flex flex-col items-center justify-center w-[98vw] md:w-[38vw] bg-white shadow-lg shadow-gray-400 rounded-xl my-5 overflow-hidden flex-grow h-full py-4"
                        data-aos="fade-left"
                        data-aos-delay="400"
                        data-aos-duration="1000"
                    >
                        <ColHeadImg
                            imageSrc="./Add-Notes-and-Priorities-iPhone.webp"
                            heading="Add Notes and Priorities"
                            Icon={IoFlagSharp}
                            imgClassName={"md:w-[20vw] w-3/4"}
                        />
                    </div>

                </div>
            </section>
        </div>
    );
}

export default AddNotes;
