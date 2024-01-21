import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/registration/Login"
import Home from "./pages/home/Home"
import TaskProvider from "./context/TaskProvider"
import Register from "./pages/registration/Register"


const App = () => {
  return (
    <>
      <TaskProvider>
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </Router>
      </TaskProvider>
    </>
  )
}

export default App
