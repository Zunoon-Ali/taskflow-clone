import React from 'react'
import { BiHeartCircle } from "react-icons/bi";
import Flag from 'react-world-flags';


const cards = [
  {
    title: "Perfect To Do List for me!",
    review: 5,
    text: "I’ve been using Task Flow since it was launched. I’ve switched from the Todoist. It has some features that I have been looking for for a long time, like adding a project to multiple tasks, unlimited levels of subtasks, attachments, etc…",
    author: "Keptex –App Store",
    countryCode: "CA" 
  },
  {
    title: "Really Really Good",
    review: 4,
    text: "I love this app. Feel smooth and works as advertised. The simplistic look and feel is a nice touch. Settings menu is nice and straight forward. This app will definitely help you stay on track and be more productive…",
    author: "Mclaren_7 –App Store ",
    countryCode: "US"
  },
  {
    title: "Endlich!",
    review: 2,
    text: "Endlich eine handhabbare Lösung als Ersatz für das doch zu rudimentäre “Erinnerungen”. Einfach zu verstehen aber mächtig genug in den Funktionen. Und nicht zu überladen. Dabei noch bezahlbar…",
    author: "Jack MacB –App Store ",
    countryCode:"DE"
  },
]
function Testimonials() {
  return (
    <div>
      <section id="Testimonials" className='min-h-screen w-full overflow-x-hidden px-5 my-7 md:my-12 flex flex-col justify-center items-center bg-gray-100'>
        <h1 className='text-4xl md:text-6xl font-semibold mt-6 mb-16 text-center md:w-full flex items-center justify-center'>
          <BiHeartCircle className="text-4xl md:text-6xl mr-4 bg-blue-600 text-white rounded-full p-2" />
          Loved Around the World
        </h1>

        <div className="testimonialsContainer flex items-center flex-col md:flex-row justify-between gap-12">
          {
            cards.map((card, index) => {
              return (
                <div className="relative card w-[280px] bg-white shadow-xl h-[380px] text-black px-5 py-4 leading-7 overflow-hidden rounded-3xl" key={index}>
                  <div className="card-title text-xl text-gray-800 font-bold my-3">{card.title}</div>

                  {/* ⭐ Star Rating */}
                  <div className="card-review my-2 text-yellow-500 text-lg">
                    {
                      Array.from({ length: 5 }, (_, i) => (
                        <span key={i}>
                          {i < card.review ? '★' : '☆'}
                        </span>
                      ))
                    }
                  </div>

                  <div className="card-text text-md text-gray-500 my-3 font-semibold overflow-ellipsis">{card.text}</div>

                  <div className="card-detail mt-2 absolute bottom-4 right-8 text-lg text-gray-400">
                    <span className="card-author flex items-center justify-center gap-2">{card.author}
                         <Flag code={card.countryCode} style={{ width: '24px', height: '16px' }} />
                    </span>
                   
                  </div>
                </div>
              )
            })
          }
        </div>
      </section>
    </div>
  )
}

export default Testimonials
