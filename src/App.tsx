import { Route, Routes } from "react-router-dom"
import './index.css'
import Layout from "./features/layout/Layout"
import Home from "./features/home/Home"
import Login from "./features/login/Login"
import UploadPaper from "./features/upload-paper/UploadPaper"

function App() {
 
  return (
   <Routes>
    <Route path="/" element={<Login />} />
    <Route element={<Layout />}>
      <Route path="/home" element={<Home />} />
      <Route path="/upload" element={<UploadPaper />} />

    </Route>
   </Routes>

  )
}

export default App
