import Home from "./pages/Home"
import Login from "./pages/Login"
import { BrowserRouter, Router, Route, Routes, Outlet } from "react-router-dom"
import './index.css'
// import Login from "./pages/login"


const App = () => {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="login" element={<Login />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
