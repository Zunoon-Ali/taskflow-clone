import React , { useEffect } from 'react'
import AOS from "aos";
import "aos/dist/aos.css";

import Header from "./components/header"
import Hero from "./components/hero"
import MeetTask from "./components/MeetTask"
import BLBL from "./components/BLBL"
import TaskflowConcept from './components/TaskflowConcept'
import ManageDueDates from './components/ManageDueDates'
import MultipleProjectTask from './components/MultipleProjectTask'
import AvailableMacIphone from './components/AvailableMacIphone'
import SubstackAttachement from './components/SubstackAttachement';
import AddNotes from './components/AddNotes';

function App() {
    useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Header />
      <main className='flex flex-col gap-5'>
        <Hero />
        <MeetTask />
        <BLBL />
        <TaskflowConcept />
        <ManageDueDates />
        <MultipleProjectTask />
        <AvailableMacIphone />
        <SubstackAttachement />
        <AddNotes />
      </main>
    </div>
  );
}

export default App;
