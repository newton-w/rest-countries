import Nav from "./components/Nav"
import Countries from "./components/Countries"
import Results from "./components/Results"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { useState } from 'react'
function App() {
  const [input, setInput] = useState('')
  const [data, setData] = useState()

  return (
    <div className="duration-300 bg-VeryLightGray dark:bg-DVeryDarkBlue w-full min-h-full lg:h-full">
      <Router>
        <Nav />
        <main>
          <Routes>
            <Route path="/" element={<Countries setInput={setInput} input={input} data={data} setData={setData} />} />
            <Route path="/results" element={<Results input={input} />} />
          </Routes>
        </main>
      </Router>
    </div>
  )
}

export default App
