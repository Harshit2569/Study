import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";

function AppRouter() {
  return (
  <>
  <Routes>
     <Route path="/" element={<Home />} />
  </Routes>
  </>
  )
}

export default AppRouter
