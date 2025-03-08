import React from "react";

const Header = ({ showSignIn }) => {
  return (
    <div className="absolute left-1/2 transform -translate-x-1/2 w-[822px] h-[80px] flex justify-between my-2 mx-auto">
      <div className=" w-37 h-10 ">
        <img
          className="object-cover"
          src="https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>

      <div className="flex wrap text-white ">
        <div>
          <select
            name="Languages"
            id="langs"
            className="bg-transparent border  m-2 px-3 py-1.5 rounded-md"
          >
            <option value="en-IN" className="text-black hover:text-white">
              English
            </option>
            <option value="bn-IN" className="text-black hover:text-white">
              বাংলা
            </option>
          </select>
        </div>
        <div>
          {showSignIn && (
            <button className="bg-[#E50914] m-2 px-3 py-1.5 rounded-md">
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Header;
