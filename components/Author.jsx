import React from "react";
import Image from "next/image";

const Author = ({ author }) => {
  return (
    <div className="mt-20 mb-8 p-12 relative text-center rounded-lg bg-black bg-opacity-20">
      <div className="left-0 right-0 -top-14 absolute">
        <Image unoptimized src={author.photo.url} alt={author.name} height="100px" width="100px" className="align-middle rounded-full" />
      </div>
      <h3 className="my-4 text-xl font-bold text-white">{author.name}</h3>
      <p className="text-white text-lg">{author.bio}</p>
    </div>
  );
};

export default Author;
