"use client"
import Image from "next/image";
import React, { useState} from "react";

const embedID = "0RKpf3rK57I";

const Embed = () => {
  const [imageClicked, setImageClicked] = useState(false);

  return (
    <div className="flex justify-center align-middle">
    <div className="h-[600px] w-[900px] relative bg-gray-600 flex justify-center align-middle">
      {!imageClicked ? (
        <div onClick={()=>{
            setImageClicked(true);
        }}><div className="w-[100%]">
          <Image
            src={`https://img.youtube.com/vi/FSNybHy5vJ0/sddefault.jpg`}
            layout="fill"
            alt="yt thumbnail"
            priority
          />
          <img id="play-button" className="h-[50px] w-[50px] z-100 " src="" alt="play button" />
        </div>
        </div>
      ) : (
        <iframe
          frameBorder="1"
          height="100%"
          width="100%"
          allowFullScreen
          src={
            imageClicked
              ? "https://www.youtube.com/embed/FSNybHy5vJ0?si=hZEhiYpkIkNlQn2N"
              : ""
          }
          title="youtube video"
        />
      )}
    </div>
    </div>
  );
};
export default Embed;
