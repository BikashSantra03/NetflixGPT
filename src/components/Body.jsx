import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
import DefaultPage from "./DefaultPage";
import Error from "./Error";

import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../../utils/store/userSlice";

const Body = () => {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (user) => {
    if (user) {
      const { uid, email, displayName } = user;
      dispatch(addUser({ uid: uid, email: email, name: displayName }));
    } else {
      dispatch(removeUser());
    }
  });
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
