import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect } from "react";
import { NavLink } from "react-router";
import { auth } from "../../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../../utils/store/userSlice";
import { useNavigate } from "react-router";

import { Logo } from "../../utils/constatnt";

const Header = ({ showSignIn, inBrowsePage }) => {
  const user = useSelector((store) => store.user); //subscribing to store

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

  return (
    <div className="absolute z-10 left-1/2 transform -translate-x-1/2 w-[822px] h-[80px] flex wrap justify-between my-2 mx-auto">
      <div className=" w-37 h-10 ">
        <img className="object-cover" src={Logo} alt="logo" />
      </div>

      <div className="flex wrap text-white ">
        <div>
          {!inBrowsePage && (
            <select
              name="Languages"
              id="langs"
              className="bg-transparent border  m-2 px-3 py-1.5 rounded-md cursor-pointer"
            >
              <option value="en-IN" className="text-black hover:text-white">
                English
              </option>
              <option value="bn-IN" className="text-black hover:text-white">
                বাংলা
              </option>
            </select>
          )}
        </div>

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
          {inBrowsePage && (
            <div className="flex gap-2.5 items-center text-black">
              <h2>{user?.name}</h2>
              <button
                className="bg-[#E50914] m-2 px-3 py-1.5 rounded-md cursor-pointer text-white "
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
