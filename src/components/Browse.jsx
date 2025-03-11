import React from "react";
import { signOut } from "firebase/auth";
import { auth } from "../../utils/firebase";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";

const Browse = () => {
  const navigate = useNavigate();

  const user = useSelector((store) => store.user);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        navigate("/login");
      })
      .catch((error) => {
        console.log(error.message);
        <Error />;
      });
  };
  return (
    <div className="absolute z-10 left-1/2 transform -translate-x-1/2 w-[822px] h-[80px] flex justify-between my-2 mx-auto">
      <div className=" w-37 h-10 ">
        <img
          className="object-cover"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>

      <div className="flex gap-2.5 items-center">
        <h2>{user?.name}</h2>
        <button
          className="bg-[#E50914] m-2 px-3 py-1.5 rounded-md cursor-pointer text-white "
          onClick={handleSignout}
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Browse;
