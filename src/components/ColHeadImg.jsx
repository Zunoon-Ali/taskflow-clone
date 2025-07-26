import React from 'react'
import { ImAttachment } from 'react-icons/im'


function ColHeadImg({ className, imageSrc, heading, Icon ,imgClassName }) {
  return (
    <div>
      <div className={`py-3 px-2 md:px-4 gap-4 flex flex-col items-center justify-between md:justify-center flex-wrap  ${className}`} data-aos="fade-up">
        <h1 className="text-3xl md:text-4xl font-medium text-gray-800 mt-6 mb-16 flex items-center ">
          <Icon className="text-3xl md:text-4xl bg-blue-600 text-white rounded-full p-1 block md:inline-flex mr-3 " />
          {heading}
        </h1>
        <img
          src={imageSrc}
          alt={heading}
          className={`mb-6 ${imgClassName}`}
          loading="lazy"
        />
      </div>
    </div>
  );
}


export default ColHeadImg
