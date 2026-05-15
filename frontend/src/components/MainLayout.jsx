// components/MainLayout.jsx

import { Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import Home from "../pages/Home";
import Homee from "../pages/Profile";
import AddTask from "../pages/AddTask";

const MainLayout = ({ user }) => {
  return (
    <>
      <Navbar />
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: "82vh" }}>
        <Routes>
          <Route path="/" element={<Home user={user} />} />
          <Route path="/add" element={<AddTask />} />
          <Route path="/profile" element={<Homee user={user} />} />
          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
      </div>
    </>
  );
};

export default MainLayout;