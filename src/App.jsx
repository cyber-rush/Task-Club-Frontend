import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/registration/Login"
import Signup from "./pages/registration/Signup"
import Home from "./pages/home/Home"
import TaskProvider from "./context/TaskProvider"


const App = () => {
  return (
    <>
      <TaskProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </TaskProvider>
    </>
  )
}

export default App
