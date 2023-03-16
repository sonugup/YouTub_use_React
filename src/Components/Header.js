import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ytLogo from "../img/yt-logo.png";
import ytLogomobile from "../img/yt-logo-mobile.png";
import { SlMenu } from "react-icons/sl";
import { IoIosSearch } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { FiBell } from "react-icons/fi";
import { CgClose } from "react-icons/cg";
import { Context } from "../context/Contextapi";
// import "./home.css"
import Loader from "../shared/Loader";

const Header = () => {
  const [searchq, setSearchq] = useState("");

  const { loading, mobileM, setMobleM } = useContext(Context);

  const navigate = useNavigate();

  const searchQueryHand = (e) => {
    if ((e?.key === "Enter" || e === "searchButton") && searchq?.length > 0) {
      navigate(`/searchResult/${searchq}`);
    }
  };

  const mobileMenuToggle = () => {
    setMobleM(!mobileM);
  };

  const { pathname } = useLocation();
  const pageName = pathname?.split("/")?.filter(Boolean)?.[0];
  return (

//     <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5 bg-black dark:bg-black">
//     {loading && <Loader />}

//     <div className="flex h-5 items-center">
//         {pageName !== "video" && (
//             <div
//                 className="flex md:hidden md:mr-6 cursor-pointer items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
//                 onClick={mobileMenuToggle}
//             >
//                 {mobileM ? (
//                     <CgClose className="text-white text-xl" />
//                 ) : (
//                     <SlMenu className="text-white text-xl" />
//                 )}
//             </div>
//         )}
//         <Link to="/" className="flex h-5 items-center">
//             <img
//                 className="h-full hidden dark:md:block"
//                 src={ytLogo}
//                 alt="Youtube"
//             />
//             <img
//                 className="h-full md:hidden"
//                 src={ytLogomobile}
//                 alt="Youtube"
//             />
//         </Link>
//     </div>
//     <div className="group flex items-center">
//         <div className="flex h-8 md:h-10 md:ml-10 md:pl-5 border border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
//             <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
//                 <IoIosSearch className="text-white text-xl" />
//             </div>
//             <input
//                 type="text"
//                 className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-64 lg:w-[500px]"
//                 onChange={(e) => setSearchq(e.target.value)}
//                 onKeyUp={searchQueryHand}
//                 placeholder="Search"
//                 value={searchq}
//             />
//         </div>
//         <button
//             className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center justify-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1]"
//             onClick={() => searchQueryHand("searchButton")}
//         >
//             <IoIosSearch className="text-white text-xl" />
//         </button>
//     </div>
//     <div className="flex items-center">
//         <div className="hidden md:flex">
//             <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
//                 <RiVideoAddLine className="text-white text-xl cursor-pointer" />
//             </div>
//             <div className="flex items-center justify-center ml-2 h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
//                 <FiBell className="text-white text-xl cursor-pointer" />
//             </div>
//         </div>
//         <div className="flex h-8 w-8 overflow-hidden rounded-full md:ml-4">
//             <img src="https://xsgames.co/randomusers/assets/avatars/female/67.jpg" />
//         </div>
//     </div>
// </div>

    <div className="sticky top-0 z-10 flex flex-row items-center justify-between h-14 px-4 md:px-5  bg-black dark:bg-black">
      {loading && <Loader />}
      <div className="flex h-5 items-center">
        {pageName !== "video" && (
          <div
            className="flex md:hidden md:mr-6 cursor-pointer justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]"
            onClick={mobileMenuToggle}
          >
           {mobileM ? (
      <CgClose className="text-white text-xl" />
      ) : (
          <SlMenu className="text-white text-xl" />
      )}
          </div>
        )}

        <Link to="/" className="flex h-4 items-center">
          <img
            className="h-full  dark:md:block"
            src={ytLogo}
            alt="Youtube"
          />
          <img className="h-full md:hidden" src={ytLogomobile} alt="youtub" />
        </Link>
        
        
      </div>
      <div>
        <div className="group flex items-center">
            <div className="flex h-8 md:ml-10 md:pl-5 border-[#303030] rounded-l-3xl group-focus-within:border-blue-500 md:group-focus-within:ml-5 md:group-focus-within:pl-0">
                <div className="w-10 items-center justify-center hidden group-focus-within:md:flex">
                    <IoIosSearch className=" text-white text-xl" />
                </div>
                <input 
                className="bg-transparent outline-none text-white pr-5 pl-5 md:pl-0 w-44 md:group-focus-within:pl-0 md:w-[500px] "
                onChange={(e) => setSearchq(e.target.value)}
                onKeyUp={searchQueryHand}
                value={searchq}
                placeholder="search"
                 />
                 
            </div>
            <button className="w-[40px] md:w-[60px] h-8 md:h-10 flex items-center border border-l-0 border-[#303030] rounded-r-3xl bg-white/[0.1] ">
                 <IoIosSearch className=" text-white text-xl" />
                 </button>
        </div>
        </div>
        <div className="flex items-center ">
            <div className="hidden md:flex">
                <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                    <RiVideoAddLine className="text-white text-xl cursor-pointer"/>
                </div>
                <div className="flex items-center justify-center h-10 w-10 rounded-full hover:bg-[#303030]/[0.6]">
                    <FiBell className="text-white text-xl cursor-pointer"/>
                </div>
                <div className="flex overflow-hidden  h-7 w-7 rounded-full md:ml-4">
                    <img  src="https://yt3.ggpht.com/m1uSiMOzvvXZgQ-xAAg46aedC43w6WDLvEZquxc5E3KqmL9vpNCp1EgsQSHDKNlQFlBPdUHsmdM=s88-c-k-c0x00ffffff-no-rj-mo" />
                </div>

            </div>

        </div>
    </div>
  );
};

export default Header;
