import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/registration/Login"
import Signup from "./pages/registration/Signup"


const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </Router>
    </>
  )
}

export default App
