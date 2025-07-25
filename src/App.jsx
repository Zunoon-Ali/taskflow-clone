import React, { useEffect } from 'react'


import Header from "./components/Header"
import Hero from "./components/Hero"
import MeetTask from "./components/MeetTask"
import BLBL from "./components/BLBL"
import TaskflowConcept from './components/TaskflowConcept'
import ManageDueDates from './components/ManageDueDates'
import MultipleProjectTask from './components/MultipleProjectTask'
import AvailableMacIphone from './components/AvailableMacIphone'
import SubstackAttachement from './components/SubstackAttachement';
import AddNotes from './components/AddNotes';
import TimerEnhanced from './components/TimerEnhanced';
import Spacer from './components/Spacer';
import DarkMode from './components/DarkMode';
import Roadmap from './components/Roadmap';
import Testimonials from './components/Testimonials';
import TaskDone from './components/TaskDone';
import Footer from './components/Footer';
import UpArrow from './components/UpArrow';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {

useEffect(() => {
  AOS.init({
    duration: 1000,       // smooth animation (in ms)
    easing: 'ease-in-out', // smooth easing curve
    once: false,           // repeat every time element comes into view
    mirror: false,          // if you want animation on scroll-up too
  });
  AOS.refresh();
}, []);


return (
  <div className="w-full min-h-screen overflow-hidden">
    <Header />
    <main className='flex flex-col'>
      <Hero />
      <UpArrow />
      <MeetTask />
      <BLBL />
      <TaskflowConcept />
      <ManageDueDates />
      <MultipleProjectTask />
      <AvailableMacIphone />
      <SubstackAttachement />
      <AddNotes />
      <TimerEnhanced />
      <Spacer />
      <DarkMode />
      <Spacer rotate={"rotate-180"} />
      <Roadmap />
      <Testimonials />
      <TaskDone />
      <Footer />
    </main>
  </div>
);
}

export default App;
