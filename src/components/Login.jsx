import React from "react";
import { backGroundIMG } from "../../utils/constatnt";

import Header from "./Header";

const Login = () => {
  return (
    <div className="relative">
      <Header showSignIn={false} />
      <div>
        <img src={backGroundIMG} alt="Movies-Poster" />
      </div>
    </div>
  );
};

export default Login;
