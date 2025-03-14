import React, { useRef, useState } from "react";
import { backGroundIMG } from "../../utils/constatnt";
import Header from "./Header";
import { checkValidData } from "../../utils/validate";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../../utils/firebase";

import { useDispatch } from "react-redux";
import { addUser } from "../../utils/store/userSlice";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    const errorMessage = checkValidData(
      email.current.value,
      password.current.value,
      !isSignInForm && name.current.value
    );
    setErrorMessage(errorMessage);
    if (errorMessage) return;

    //Sign Up process
    !isSignInForm &&
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          console.log(user);

          //updating profile->adding username to user data
          updateProfile(auth.currentUser, {
            displayName: name.current.value,
            photoURL: null,
          })
            .then(() => {
              // Profile updated! now update local redux store also
              const { uid, email, displayName } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, name: displayName }));
            })
            .catch((error) => {
              const errorCode = error.code;
              setErrorMessage(errorCode);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          //const errorMessage = error.message;
          setErrorMessage(errorCode);
        });

    //Sign in process
    isSignInForm &&
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          //const errorMessage = error.message;
          console.log(error);
          setErrorMessage(errorCode);
        });
  };

  return (
    <div className="relative overflow-hidden">
      {/* Header */}
      <Header />

      {/* Form */}
      <form
        onSubmit={(e) => e.preventDefault()}
        action=""
        className="w-6/7 md:w-2/7 absolute z-20 px-12 py-8 bg-black opacity-80 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-2">
          {isSignInForm ? "Sign in" : "Sign Up"}
        </h1>

        {!isSignInForm && (
          <input
            type="text"
            ref={name}
            placeholder="Full Name"
            className="p-4 my-4 w-full border rounded-md "
          />
        )}

        <input
          type="text"
          ref={email}
          placeholder="Email Address"
          className="p-4 my-4 w-full border  rounded-md"
        />

        <input
          type="password"
          ref={password}
          placeholder="Password"
          className="p-4 my-4 w-full border rounded-md"
        />

        <p className="text-red-500">{errorMessage}</p>

        <button
          className="p-4 my-6 bg-red-700 w-full rounded-lg cursor-pointer"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign in" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>

      {/* Background Image and Overlay */}
      <div>
        <img
          src={backGroundIMG}
          alt="Movies-Poster"
          className="w-full h-screen object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-40"></div>
      </div>
    </div>
  );
};

export default Login;
