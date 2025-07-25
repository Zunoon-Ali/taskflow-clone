import React from 'react';

function DarkMode() {
    return (
        <section id="darkMode" className='relative min-h-[60vh] w-full bg-black px-4 md:px-12 py-10 shadow-xl shadow-black -top-2'>

            <h1 className="text-4xl md:text-5xl font-semibold text-white text-center md:text-start md:absolute md:bottom-35 md:left-30 mb-12">
                <span className="text-orange-500 block">Dark Mode.</span>
                <span className="block">Turn Lights off.</span>
            </h1>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-screen-xl mx-auto px-10">

                {/* Column 1 */}
                <div className="flex flex-col-reverse md:flex-col items-center justify-center gap-4">
                    <img src="./Dark-Mode-iPad.webp" alt="Dark Mode" className="w-full md:w-90 hidden md:block" />
                    <img src="./Dark-Mode-iPhone-1.webp" alt="Dark Mode" className="w-3/4" />

                </div>

                {/* Column 2 */}
                <div className="flex flex-col items-center justify-center gap-4">
                    <img src="./Dark-Mode-iPhone-2.webp" alt="Dark Mode" className="w-3/4" />
                    <img src="./Dark-Mode-iPhone-3.webp" alt="Dark Mode" className="w-3/4" />
                </div>

                {/* Column 3 */}
                <div className="hidden md:flex flex-col items-center justify-center gap-4">
                    <img src="./Dark-Mode-iPhone-4.webp" alt="Dark Mode" className="w-3/4" />
                    <img src="./Dark-Mode-iPhone-5.webp" alt="Dark Mode" className="w-3/4" />
                    <img src="./Dark-Mode-iPhone-6.webp" alt="Dark Mode" className="w-3/4" />
                </div>

            </div>
        </section>
    );
}

export default DarkMode;
