import React from 'react'
import { ImAttachment } from 'react-icons/im'

function ColHeadImg({ className, imageSrc, heading, Icon }) {
  return (
    <div>
      <div className={className}>
        <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-6 mb-16 leading-tight flex items-center ">
          <Icon className="text-4xl md:text-5xl mr-4 bg-blue-600 text-white rounded-full p-2" />
          {heading}
        </h1>
        <img
          src={imageSrc}
          alt={heading}
          className="w-2/3 mb-6"
        />
      </div>
    </div>
  );
}


export default ColHeadImg
