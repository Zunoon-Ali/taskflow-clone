import React from 'react'
import { BiHeartCircle } from "react-icons/bi";

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
    countryCode: "DE"
  },
]

function Testimonials() {
  return (
    <div>
      <section id="Testimonials" className='min-h-screen w-full overflow-x-hidden px-2 md:px-5  flex flex-col justify-center items-center bg-gray-100 my-6 py-6'>

        {/* Section Heading */}
        <h1
          className='text-4xl md:text-6xl font-medium mt-6 mb-16 text-center md:w-full flex items-center justify-center'
          data-aos="fade-up"
          data-aos-duration="800"
        >
          <BiHeartCircle className="text-5xl md:text-6xl mr-0 md:mr-4 bg-red-600 text-white rounded-full p-1" />
          Loved Around the World
        </h1>

        {/* Testimonial Cards */}
        <div className="testimonialsContainer flex items-center flex-col md:flex-row justify-center gap-12 flex-wrap px-2">
          {
            cards.map((card, index) => (
              <div
                className="relative card w-full md:w-[300px] md:h-[450px] h-auto bg-white shadow-xl text-black px-2 md:px-5 py-10 leading-7 overflow-hidden rounded-xl"
                key={index}
                data-aos="zoom-in-up"
                data-aos-delay={index * 200}
                data-aos-duration="1000"
              >
                <div className="card-title text-xl text-gray-800 font-bold mt-3 mb-10">
                  {card.title}
                </div>

                {/* Star Rating */}
                <div className="card-review my-6 text-[orange] text-2xl md:text-3xl">
                  {Array.from({ length: 5 }, (_, i) => (
                    <span key={i} className='font-extrabold rounded-lg'>
                      {i < card.review ? '★' : '☆'}
                    </span>
                  ))}
                </div>

                <div className="card-text text-md text-gray-500 my-10 font-semibold overflow-ellipsis">
                  {card.text}
                </div>

                {/* Author + Flag */}
                <div className="card-detail mt-2 absolute bottom-6 md:bottom-3 right-6 text-lg text-gray-400">
                  <span className="card-author flex items-center gap-4">
                    {card.author}
                    <img
                      src={`https://flagcdn.com/24x18/${card.countryCode.toLowerCase()}.png`}
                      width={24}
                      height={18}
                      alt={`${card.countryCode} flag`}
                    />
                  </span>
                </div>
              </div>
            ))
          }
        </div>
      </section>
    </div>
  )
}

export default Testimonials
