import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./components/pages/Home/Home"
import Student from "./components/pages/developer/database/Student"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/database" element={<Student/>}/>
        </Routes>
      </Router>

    </>
  )
}
export default App