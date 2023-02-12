import Nav from "./components/Nav"
import Countries from "./components/Countries"
import Bordercountry from "./components/Bordercountry"
// import AllRegions from "./components/regions/AllRegions"
// import Africa from "./components/regions/Africa"
// import America from "./components/regions/America"
// import Europe from "./components/regions/Europe"
// import Asia from "./components/regions/Asia"
// import Oceania from "./components/regions/Oceania"
import Results from "./components/Results"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
function App() {
  
  return (
    <div className="duration-300 bg-VeryLightGray dark:bg-DVeryDarkBlue w-full min-h-full lg:h-full">

      <Nav />
      <main>
      <Router>
        <Routes>
          <Route path="/" element={ <Countries />}/>
          <Route path="/results" element={ <Results />}/>
          <Route path="/results/bordercountry" element={ <Bordercountry />}/>

        </Routes>
      </Router>
      </main>

    </div>
  )
}

export default App
