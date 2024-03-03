"use client";
import { PlayIcon } from "@heroicons/react/24/outline";
import React, { useState } from "react";

const YouTubeVideo = () => {
  const [showVideo, setShowVideo] = useState(false);
  const onHandleTogglePlay = (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    setShowVideo((prev) => !prev);
  };
  return (
    <>
      {showVideo ? (
        <div
          className="fixed top-0 left-0 w-full h-full bg-slate-800/50"
          onClick={onHandleTogglePlay}
        >
          <div className="max-w-4xl mx-auto h-full flex items-center">
            <iframe
              allowFullScreen={true}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              title="You are my nafas"
              className="w-full h-[360px] md:h-3/4"
              src="https://www.youtube.com/embed/TCgAKoqHhu8?si=0xet3pEbyx2oaHDG"
              id="widget2"
            ></iframe>
          </div>
        </div>
      ) : (
        <div className="absolute bottom-2/4 translate-y-2/4 start-0 end-0 text-center">
          <a
            href="/"
            className="lightbox size-20 rounded-full shadow-lg  inline-flex items-center justify-center bg-white  text-indigo-600 "
            onClick={onHandleTogglePlay}
          >
            <PlayIcon className="h-20 w-20 bg-slate-700/10 rounded-full p-5 " />
          </a>
        </div>
      )}
    </>
  );
};

export default YouTubeVideo;
