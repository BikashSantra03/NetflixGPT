import React from "react";
import { language } from "../../utils/languageConstants";
import { useSelector } from "react-redux";

const GptSearchBar = () => {
  const langSelector = useSelector((store) => store.langConfig.lang);
  return (
    <div className="flex justify-center pt-[10%]">
      <form
        action=""
        onSubmit={(e) => e.preventDefault()}
        className="w-1/2 grid grid-cols-12  bg-black"
      >
        <input
          type="text"
          placeholder={language[langSelector].gptSearPlaceHolder}
          className="p-4 m-4 col-span-9 bg-white"
        />
        <button className="m-4 py-3 px-4 col-span-3 bg-red-700 text-white rounded-lg cursor-pointer">
          {language[langSelector].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
