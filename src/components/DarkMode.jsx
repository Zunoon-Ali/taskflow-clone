import React from 'react'

function DarkMode() {
    return (
        <div>
            <section id="darkMode" className='min-h-screen w-full overflow-x-hidden px-5  bg-black shadow-gray-400'>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5 w-3/4 mx-auto">

                    <div className="Div1 flex flex-col-reverse items-center justify-center md:flex-col">
                        <img src="./Dark-Mode-iPad.webp" alt=" Dark Mode" className="w-full md:w-1/2  mb-6 hidden md:block" />
                        <img src="./Dark-Mode-iPhone-1.webp" alt=" Dark Mode" className="w-full md:w-1/2  mb-6" />
                        <h1 className="text-3xl md:text-4xl font-semibold text-white mt-6 mb-16 text-center md:w-full">
                            <span className="text-orange-500 block">Dark Mode.</span>
                            <span className="block">Turn Lights off.</span>
                        </h1>

                    </div>
                    <div className="Div2">
                        <img src="./Dark-Mode-iPhone-2.webp" alt=" Dark Mode" className="w-full md:w-1/2  mb-6" />
                        <img src="./Dark-Mode-iPhone-3.webp" alt=" Dark Mode" className="w-full md:w-1/2  mb-6 " />
                    </div>
                    <div className="Div3 hidden md:block">
                        <img src="./Dark-Mode-iPhone-4.webp" alt=" Dark Mode" className="w-full md:w-1/2  mb-6" />
                        <img src="./Dark-Mode-iPhone-5.webp" alt=" Dark Mode" className="w-full md:w-1/2  mb-6" />
                        <img src="./Dark-Mode-iPhone-6.webp" alt=" Dark Mode" className="w-full md:w-1/2  mb-6" />
                    </div>
                </div>

            </section>
        </div>
    )
}

export default DarkMode
