import React from 'react';
import { TbArrowFork } from 'react-icons/tb';

function TaskflowConcept() {
    return (
        <div>
            <section
                id="taskFlowConcept"
                className='my-3 md:my-8 min-h-screen w-[95vw] overflow-x-hidden md:px-4 rounded-lg py-3 md:py-6 mx-auto'
                data-aos="fade-up"
                data-aos-duration="1000"
            >
                <div
                    className="taskflowConceptHeading px-3"
                    data-aos="fade-up"
                    data-aos-delay="0"
                    data-aos-duration="1000"
                >
                    <h1 className='text-5xl md:text-6xl font-semibold text-center text-gray-800'>
                        My Task Flow Concept
                    </h1>
                </div>

                <div
                    className="narrowTaskflow my-12 bg-white w-full mx-auto shadow-xl shadow-gray-400 rounded-xl flex flex-col md:flex-row items-center justify-center gap-4 px-3 md:py-8"
                >
                    <div
                        className="flex flex-col items-center justify-center gap-4"
                        data-aos="fade-right"
                        data-aos-delay="200"
                        data-aos-duration="1000"
                    >
                        <div className="taskflowNarrowHeading flex items-center justify-center gap-4 px-6">
                            <TbArrowFork className='text-7xl text-white bg-blue-500 rounded-full p-2 font-bold transform rotate-180' />
                            <h1 className='text-4xl md:text-5xl font-semibold text-gray-800'>
                                <b className='text-blue-500'>Narrow</b> your Task Flow
                            </h1>
                        </div>
                        <p className='text-xl md:text-2xl text-gray-800 mt-4 px-6 md:px-10'>
                            Don’t waste time browsing projects to select the next task to do.
                            <br /><br />
                            Add tasks that you are about to complete from different projects to My Task Flow and get things done!
                        </p>
                    </div>

                    <img
                        src="./taskflow-Narrow-Your.webp"
                        alt="Visual of narrowing down task flow"
                        className='w-full md:w-1/2'
                        data-aos="fade-left"
                        data-aos-delay="400"
                        data-aos-duration="1000"
                    />
                </div>
            </section>
        </div>
    );
}

export default TaskflowConcept;
