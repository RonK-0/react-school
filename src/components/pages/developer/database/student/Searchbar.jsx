import React from "react";
import { CiSearch } from "react-icons/ci";

const Searchbar = ({ setIsSeach, setKeyword }) => {
  const handleChange = async (e) => {
    if (e.target.value === "") {
      setIsSeach(false);
    } else {
      setIsSeach(true);
    }
    setKeyword(e.target.value);
  };

  return (
    // <form action="" className='relative'>
    //     <input type="text" placeholder='Search Student' className='p-1 px-3 pl-10 outline-none bg-secondary border-stone-800 rounded-md placeholder:text-white placeholder:opacity-20'  onChange={(e) => handleChange(e)}
    //     />
    //     <CiSearch className='absolute top-1 left-2 z-20 text-white text-2xl opacity-20'/>

    // </form>
    <form action="" className="relative">
      <input
        type="text"
        name=""
        id=""
        placeholder="Search Student"
        className="p-1 px-3 pl-10 bg-secondary border border-stone-800 rounded-md placeholder:text-white placeholder:opacity-20 text-content"
        onChange={(e) => handleChange(e)}
      />
      <CiSearch className="absolute ty-a left-2 z-[1] text-white text-2xl opacity-20" />
    </form>
  );
};

export default Searchbar;
