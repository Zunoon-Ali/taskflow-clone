import React from 'react'
import { ImAttachment } from 'react-icons/im'
import { TbDragDrop2 } from 'react-icons/tb'
import { FaExchangeAlt } from 'react-icons/fa';
import { TbArrowFork } from 'react-icons/tb';
import ColHeadImg from './ColHeadImg';


function SubstackAttachement() {
  return (
    <div>
      <section id='substackAttachment' className='my-3 md:my-12 min-h-screen w-full overflow-x-hidden  md:py-12 py-3'>
        <div className="substackAttachmentContainer flex flex-col md:flex-row items-center justify-between mx-auto gap-5 max-w-6xl">
          <ColHeadImg className="leftSubstackAttachment min-h-[400px] flex flex-col items-center justify-between w-full md:2/3 bg-white shadow-lgrounded-xl my-5 overflow-hidden flex-grow h-full" imageSrc="./Subtasks-and-Attachments-iPhone.webp" heading="Subtasks and Attachments" Icon={ImAttachment} />
          <div className="rightDragDrop min-h-[400px] flex flex-col items-center justify-between w-full md:w-1/2 bg-white shadow-lg shadow-gray-400 rounded-xl my-5" >
            <div className="dragDrop mt-4 mb-5">
              <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-6 mb-10 leading-tight flex items-center ">

                <TbDragDrop2 className="text-4xl md:text-5xl mr-4 bg-blue-600 text-white rounded-full p-2" />
                Drag and Drop</h1>
              <img src="./Drag-and-Drop-iPhone.webp" alt="Drag and Drop" className="w-full md:w-3/4 mb-6" />

            </div>
            <div className="swipAction mb-5 ">

              <h1 className="text-3xl md:text-4xl font-semibold text-gray-800 mt-6 mb-10 leading-tight flex items-center ">
                <FaExchangeAlt className="text-4xl md:text-5xl mr-4 bg-blue-600 text-white rounded-full p-2" />
                Swipe actions</h1>
              <img src="./Swipe-actions-iPhone.webp" alt="Drag and Drop" className="w-full md:w-3/4" />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SubstackAttachement
