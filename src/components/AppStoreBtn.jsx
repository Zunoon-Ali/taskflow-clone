import React from 'react'
import { FaApple } from 'react-icons/fa'


function AppStoreBtn({className}) {
    return (
        <div><a href='#' className={`flex items-center gap-1 bg-black text-white md:px-6 py-2 px-0 rounded-lg  w-full md:w-auto ${className}`}>
            <div className="apple-logo">
                <FaApple className=' text-3xl md:text-4xl' />
            </div>
            <div className="btn-text">
                <p className='text-xs'>Download on the</p>
                <p className='text-2xl'>App Store</p>
            </div>
        </a>

        </div>
    )
}

export default AppStoreBtn
