import { Route, Routes } from "react-router-dom"
import './index.css'
import Layout from "./features/layout/Layout"
import Home from "./features/home/Home"

function App() {
 
  return (
   <Routes>
    <Route path="/" element={<h1>Home</h1>} />
    <Route path="/home" element={<Layout />}>
      <Route index element={<Home />} />
    </Route>
   </Routes>

  )
}

export default App
