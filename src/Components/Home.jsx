import React,{useContext, useEffect} from 'react'

import LeftNav from "./LeftNav"
import {Context} from "../context/Contextapi";
import VideoCard from "./VideoCard";
import "./home.css"
const Home = () => {
  
  const {loading, searchResult} = useContext(Context)

console.log(searchResult)
  useEffect(() => {
    document.getElementById("root").classList.remove("custom-h")
  }, [])

  return (
    <div className="flex flex-row h-[calc(100%-56px)]">
      <LeftNav />
      <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
          {
          !loading && searchResult && searchResult?.map((item) => {
              if(item?.type !== "video") return false;
              return (
                <VideoCard 
                key={item?.video?.videoId}
                video={item?.video}
                 />
              )
            })
          }
        </div>
      </div>
  return (
    <div>
      da294
    </div>

// {/* <div className="flex flex-row h-[calc(100%-56px)]">
// <LeftNav />
// <div className="grow w-[calc(100%-240px)] h-full overflow-y-auto bg-black">
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 p-5">
//         {!loading &&
//             searchResult.map((item) => {
//                 if (item.type !== "video") return false;
//                 return (
//                     <VideoCard
//                         key={item?.video?.videoId}
//                         video={item?.video}
//                     />
//                 );
//             })}
//     </div>
// </div>
// </div> */}
</div>
  )
}

export default Home
