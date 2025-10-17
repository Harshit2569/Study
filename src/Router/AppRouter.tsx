import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import SignUp from "../Pages/Singup";
import Login from "../Pages/Login";


function AppRouter() {
  return (
  <>
  <Routes>
     <Route path="/" element={<Home />} />
     <Route path="/signup" element={<SignUp />} />
     <Route path="/login" element={<Login />} />
  </Routes>
  </>
  )
}

export default AppRouter
