import Nav from "./components/Nav"
import Countries from "./components/Countries"
import Bordercountry from "./components/Bordercountry"
import Results from "./components/Results"
import Footer from "./components/Footer"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
function App() {

  return (
    <div className="duration-300 bg-VeryLightGray dark:bg-DVeryDarkBlue w-full min-h-screen lg:h-full">

      <Nav />

      <Router>
        <Routes>
          <Route path="/" element={<Countries />} />
          <Route path="/results" element={<Results />} />
          <Route path="/results/bordercountry" element={<Bordercountry />} />
        </Routes>
      </Router>

      <Footer />
    </div>
  )
}

export default App
