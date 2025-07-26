import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <section
            id='header'
            className='sticky top-0 left-0 bg-white z-50'
            data-aos="fade-down"
            data-aos-duration="800"
        >
            <div className="flex justify-around items-center px-0 md:px-5 md:py-6 py-2 w-full md:mt-0 mt-2">
                
                <div
                    className="logo"
                    data-aos="fade-right"
                    data-aos-delay="200"
                    data-aos-duration="800"
                >
                    <img
                        src="./task-flow-logo.png"
                        alt="Taskflow"
                        className='w-50 md:w-78 mr-0 md:mr-40 p-0 text-start'
                        loading="lazy"
                    />
                </div>

                <nav
                    className="nav-service-link relative"
                    data-aos="fade-left"
                    data-aos-delay="400"
                    data-aos-duration="800"
                >
                    <div className="hamburger block md:hidden">
                        <GiHamburgerMenu
                            className='text-4xl text-blue-500 bg-gray-300 p-2 rounded-sm'
                            onClick={() => setIsOpen(!isOpen)}
                        />
                    </div>

                    <ul className='md:flex gap-6 items-center hidden text-gray-700'>
                        <li><a href="#" className='font-semibold text-xl'>Support</a></li>
                        <li><a href="#" className='font-semibold text-xl'>FAQ's</a></li>
                        <li><a href="#" className='font-semibold text-xl'>What's New</a></li>
                    </ul>

                    {isOpen && (
                        <ul className='absolute right-10 top-0 rounded-md bg-white flex flex-col gap-6 shadow-lg shadow-gray-400 p-6 w-50 md:hidden z-50 overflow-hidden'>
                            <li><a href="#" className='font-semibold text-lg'>Support</a></li>
                            <li><a href="#" className='font-semibold text-lg'>FAQ's</a></li>
                            <li><a href="#" className='font-semibold text-lg'>What's New</a></li>
                        </ul>
                    )}
                </nav>
            </div>
        </section>
    );
}

export default Header;
