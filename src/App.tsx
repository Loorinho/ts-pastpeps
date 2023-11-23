import { Route, Routes } from "react-router-dom";
import "./index.css";
import Layout from "./features/layout/Layout";
import Home from "./features/home/Home";
import Login from "./features/login/Login";
import UploadPaper from "./features/upload-paper/UploadPaper";
import Register from "./features/registration/Register";
import ViewPdf from "./features/pdf/ViewPdf";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/register" element={<Register />} />

      <Route element={<Layout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/upload" element={<UploadPaper />} />
        <Route path="/pdf/view" element={<ViewPdf />} />
      </Route>
    </Routes>
  );
}

export default App;
