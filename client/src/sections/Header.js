import React from "react";
import Search from "../SVGs/Search";
import Night from "../SVGs/Night";
import Day from "../SVGs/Day";

export const Header = () => {
  return (
    <div className="fixed top-0 w-full h-20 border-b shadow-sm border-gray-400 flex gap-10 justify-between items-center py-2 pl-4 pr-10">
      <div className=" m-auto pl-5 text-[40px] w-full h-full font-medium relative">
        <span className="absolute left-0 top-1/2 -translate-y-1/2 -rotate-90 text-[20px]">
          The
        </span>
        <span className="absolute left-8">SIREN</span>
      </div>
      <div className="flex gap-10 w-full justify-center items-center">
        <div className="w-fit text-[17px] h-full font-medium ">Categories</div>
        <div className="w-fit text-[17px] h-full font-medium ">Trending</div>
        <div className="w-fit text-[17px] h-full font-medium ">Latest</div>
        <div className="w-fit text-[17px] h-full font-medium ">Following</div>
      </div>
      <div className="flex w-full h-full justify-end">
        <div className="w-fit h-full font-medium p-4">
            {/* <Night/> */}
            <Day/>
        </div>
        <div className="w-20 h-full font-medium p-4">
          <Search />
        </div>
        <div className="w-32 flex justify-center items-center rounded-full text-[20px] h-[80%] mt-1 bg-gray-800 text-white font-medium p-4">
          Sign Up
        </div>
      </div>
    </div>
  );
};
