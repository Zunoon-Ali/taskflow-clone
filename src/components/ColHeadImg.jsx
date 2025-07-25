import React from 'react'
import { ImAttachment } from 'react-icons/im'


function ColHeadImg({ className, imageSrc, heading, Icon ,imgClassName }) {
  return (
    <div>
      <div className={`py-3 px-4 self-center flex flex-col items-center  ${className}`} data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl font-medium text-gray-800 mt-6 mb-16 leading-tight flex items-center ">
          <Icon className="text-4xl md:text-5xl mr-4 bg-blue-600 text-white rounded-full p-2" />
          {heading}
        </h1>
        <img
          src={imageSrc}
          alt={heading}
          className={`mb-6 ${imgClassName}`}
        />
      </div>
    </div>
  );
}


export default ColHeadImg
