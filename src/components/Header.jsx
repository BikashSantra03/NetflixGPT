import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { NavLink } from "react-router";
import { auth } from "../../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/store/userSlice";
import { useNavigate } from "react-router";

import { Logo } from "../../utils/constatnt";
import { toggleGptSearchView } from "../../utils/store/gptSlice";
import { SUPPORTED_LANGUAGES } from "../../utils/languageConstants";
import { changeLanguege } from "../../utils/store/langConfigSlice";

const Header = ({ showSignIn }) => {
  const user = useSelector((store) => store.user); //subscribing to store
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        //Signed In
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid: uid, email: email, name: displayName }));
        navigate("/browse");
      } else {
        //Signed Out
        dispatch(removeUser());
        navigate("/login");
      }
    });

    // Clean up the listener when the Header component unmounts otherwise multiple parallel listeners occures
    return () => unsubscribe();
  }, []);

  const handleSignout = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error.message);
        <Error />;
      });
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguege(e.target.value));
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  return (
    <div className="absolute z-10 left-1/2 transform -translate-x-1/2 w-11/12 h-[80px] flex wrap justify-between my-2 mx-auto">
      <div className=" w-45 h-20">
        <img className="object-cover" src={Logo} alt="logo" />
      </div>

      <div className="flex justify-center items-center gap-1 ">
        {showGptSearch && (
          <div>
            <select
              onChange={handleLanguageChange}
              className=" bg-gray-500 border p-2 rounded-md cursor-pointer"
            >
              {SUPPORTED_LANGUAGES.map((lan) => (
                <option
                  key={lan.lang}
                  value={lan.lang}
                  className="text-black hover:text-white"
                >
                  {lan.name}
                </option>
              ))}
            </select>
          </div>
        )}

        <div>
          {showSignIn && (
            <NavLink to="login">
              <button className="bg-[#E50914] m-2 px-3 py-1.5 rounded-md cursor-pointer">
                Sign In
              </button>
            </NavLink>
          )}
        </div>
        <div>
          {user && (
            <div className="flex gap-1 items-center text-black">
              <h2 onClick={() => navigate("/userprofile")}>{user?.name}</h2>
              <button
                onClick={handleGptSearchClick}
                className="py-2 px-4 mx-2 my-4 bg-purple-800 text-white font-medium rounded-md cursor-pointer"
              >
                {showGptSearch ? "Home Page" : "GPT Search"}
              </button>
              <button
                className="bg-[#E50914] py-2 px-2 mx-4 my-4 font-medium rounded-md cursor-pointer text-white "
                onClick={handleSignout}
              >
                SignOut
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
