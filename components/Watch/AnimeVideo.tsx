import React from "react";

interface Props {
  src: string;
}

const AnimeVideo = ({ src }: Props) => {
  return (
    <iframe
      allowFullScreen
      src={src}
      height="500px"
      className="w-full 2xl:w-[1200px]"
    />
  );
};

export default AnimeVideo;
