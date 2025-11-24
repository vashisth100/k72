import React from "react";
import Video from "../components/home/video";
import Toptext from "../components/home/toptext";
import Bottomtext from "../components/home/bottomtext";

function Home() {
  return (
    <div className="text-white">
      <div className="h-screen w-screen fixed">
        <Video />
      </div>
      <div className="h-screen w-screen relative pb-5 overflow-hidden flex flex-col justify-between">
        <Toptext />
        <Bottomtext />
      </div>
    </div>
  );
}

export default Home;
