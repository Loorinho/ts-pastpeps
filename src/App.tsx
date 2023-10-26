import { Route, Routes } from "react-router-dom"
import './index.css'
import Layout from "./features/layout/Layout"
import Home from "./features/home/Home"
import Login from "./features/login/Login"

function App() {
 
  return (
   <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/home" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
   </Routes>

  )
}

export default App
