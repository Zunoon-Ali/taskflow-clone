import React from 'react';
import { FaApple } from 'react-icons/fa';

function AppStoreBtn({ className }) {
    return (
        <div
            data-aos="zoom-in"
            data-aos-delay="300"
            data-aos-duration="800"
        >
            <a
                href="#"
                aria-label="Download on the App Store"
                className={`flex items-center justify-start gap-2 bg-black text-white rounded-lg w-2/3 md:w-3/4 px-1 py-3 transition-transform hover:scale-105 duration-300 ${className}`}
            >
                <FaApple className="text-3xl" />
                <div className="btn-text flex flex-col leading-tight">
                    <span className="text-xs">Download on the</span>
                    <span className="text-xl font-semibold">App Store</span>
                </div>
            </a>
        </div>
    );
}

export default AppStoreBtn;
