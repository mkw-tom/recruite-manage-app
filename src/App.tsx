import Home from "./pages/Home"
import Login from "./pages/Login"
import { BrowserRouter, Router, Route, Routes, Outlet } from "react-router-dom"
import './index.css'
import Header from "./component/common/Header"
import Profile from "./pages/Profile"
// import Login from "./pages/login"


const App = () => {
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/profile" element={<Profile />} />
          <Route path="/" element={<Home />}/>
          <Route path="login" element={<Login />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
