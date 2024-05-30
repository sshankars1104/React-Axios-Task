import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";

import React from "react";
import Create from "./components/Create/Create";
import NavBar from "./components/NavBar/NavBar";
import Read from "./components/Read/Read";
import UpDate from "./components/UpDate/UpDate";
import NoPage from "./components/NoPage/NoPage"; 
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<Read />} />
        <Route path="create" element={<Create />} />
        <Route path="edit" element={<UpDate />} />
        <Route path="*" element={<NoPage />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;
