import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./pages/registration/Login"
import Home from "./pages/home/Home"
import TaskProvider from "./context/TaskProvider"
import Register from "./pages/registration/Register"
import axios from "axios"
import { Toaster } from "react-hot-toast"
import UserProvider from "./context/user/userProvider"


axios.defaults.baseURL = `https://task-club-backend.onrender.com`
axios.defaults.withCredentials = true

const App = () => {
  return (
    <>
      <UserProvider>
        <TaskProvider>
          <Toaster position="bottom-right" toastOptions={{ duration: 2000 }} />
          <Router>
            <Routes>
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/" element={<Home />} />
            </Routes>
          </Router>
        </TaskProvider>
      </UserProvider>

    </>
  )
}

export default App
