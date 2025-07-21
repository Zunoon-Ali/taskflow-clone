import React from 'react'
import Header from "./components/header"
import Hero from "./components/hero"

function App() {
  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  )
}

export default App
