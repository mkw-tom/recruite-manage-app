import Home from "./pages/Home"
import Login from "./pages/Login"
import { BrowserRouter, Router, Route, Routes, Outlet, Navigate } from "react-router-dom"
import './index.css'
import Header from "./component/common/Header"
import Profile from "./pages/Profile"
import { useAuth } from "./context/AuthContext"
// import Login from "./pages/login"


const App = () => {
  const {user} = useAuth()
  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/profile" element={user ? <Profile /> : <Navigate to="/" />} />
          <Route path="/home" element={user ? <Home />: <Navigate to="/"/>} />
          <Route path="/" element={user ? <Navigate to="/home" />: <Login />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
