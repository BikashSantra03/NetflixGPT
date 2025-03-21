import { BrowserRouter, Routes, Route } from "react-router";
import Login from "./Login";
import Browse from "./Browse";
import DefaultPage from "./DefaultPage";
import Error from "./Error";
import UserProfile from "./UserProfile";

const Body = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/userprofile" element={<UserProfile />} />
        <Route path="/error" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Body;
