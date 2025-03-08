import React from "react";
import { BrowserRouter, Routes,Route } from "react-router";
import Login from "./Login"
import Browse from "./Browse"
import DefaultPage from "./DefaultPage";
const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/browse" element={<Browse/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
