"use client";

import {
  Box,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Spinner,
  Text,
} from "@chakra-ui/react";
import { memo, useRef, useState } from "react";
import { CiPause1, CiPlay1 } from "react-icons/ci";
import { MdFullscreen, MdGraphicEq } from "react-icons/md";

interface Props {
  src: string;
  className?: string;
}

const VideoComponent = ({ src, className }: Props) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLoaded, setIsLoaded] = useState("hidden");
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [display, changeDisplay] = useState("block");
  const [dragging, setDragging] = useState(false);

  const playPauseToggle = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, "0")}:${seconds
      .toString()
      .padStart(2, "0")}`;
  };

  const updateTime = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    const { currentTime, duration } = e.currentTarget;
    setCurrentTime(currentTime);
    setDuration(duration);
    setIsLoaded("block");
  };

  const setTimeLine = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!videoRef.current) return;

    const timeLineW = e.currentTarget.clientWidth;
    const newTime = (e.nativeEvent.offsetX / timeLineW) * duration;
    videoRef.current.currentTime = newTime;
  };

  const handleFullscreen = () => {
    videoRef.current?.requestFullscreen();
  };

  const handleMouseDown = () => {
    setDragging(true);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (dragging && videoRef.current) {
      const timeLineW = e.currentTarget.clientWidth;
      const newTime = (e.nativeEvent.offsetX / timeLineW) * duration;
      setCurrentTime(newTime);
      videoRef.current.currentTime = newTime;
    }
  };

  const handleMouseUp = () => {
    setDragging(false);
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const handleVolumeChange = (value: number) => {
    if (videoRef.current) {
      videoRef.current.volume = value / 100;
    }
  };

  return (
    <div
      className={`self-start container group border relative rounded-xl  basis-1/2 ${className} `}
    >
      <video
        width="100%"
        ref={videoRef}
        className={`w-full rounded-xl  transition-all duration-200 ease-in ${
          !isPlaying && "brightness-75"
        }`}
        onClick={playPauseToggle}
        onEnded={handleVideoEnd}
        onLoadedData={updateTime}
        onTimeUpdate={updateTime}
      >
        <source src={src} type="video/mp4" />
      </video>
      <button
        onClick={playPauseToggle}
        className="absolute inset-0 m-auto max-w-min"
      >
        <CiPlay1
          onClick={() => changeDisplay("none")}
          size="40"
          display={display}
          className={`fill-white play group-hover:opacity-100  transition-all   rounded-full ${
            isPlaying && "!opacity-0" && "hidden"
          }`}
        />
        <CiPause1
          size="40"
          className={`fill-white ${isLoaded} group-hover:opacity-100 opacity-0 transition-all pause  ${
            !isPlaying && "!opacity-0" && "hidden"
          }`}
        />
        <Spinner
          display={isPlaying && isLoaded == "hidden" ? "block" : "none"}
          className={`${isLoaded == "hidden" ? "block" : "hidden"}`}
        />
      </button>
      <Box
        display={isPlaying && isLoaded == "hidden" ? "block" : "none"}
        className={`absolute inset-0 w-full ${
          isLoaded == "hidden" ? "block" : "hidden"
        }`}
      ></Box>
      <div
        className={`${isLoaded} controls opacity-0 transition-all group-hover:opacity-100 absolute bottom-0 w-full px-7`}
      >
        <Box
          display={["none", "none", "block", "none"]}
          onClick={setTimeLine}
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
          onMouseLeave={handleMouseUp}
          className="w-full bg-gray-300 mb-[15px] h-[5px] rounded-xl relative timeline"
        >
          <Box
            className="bar rounded-xl relative "
            _before={{
              content: `""`,
              right: "-5%",
              top: 0,
              bottom: 0,
              my: "auto",
              h: "13px",
              w: "13px",
              position: "absolute",
              borderRadius: "50%",
              bg: "orange.500",
            }}
            bg="orange.500"
            h="100%"
            style={{ width: `${(currentTime / duration) * 100}%` }}
          ></Box>
        </Box>
        <div className="flex gap-5 h-[1rem] items-center">
          <Text
            display={["none", "block"]}
            className="remaining-time  text-white"
          >
            {formatTime(currentTime)}
          </Text>
          <Text display={["none", "block"]} className="text-white ">
            /
          </Text>
          <Text
            display={["none", "block"]}
            className="video-duration  text-white"
          >
            {formatTime(duration)}
          </Text>
          <Box
            display={["block", "block", "none", "block"]}
            onClick={setTimeLine}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            className="w-full bg-gray-300  h-[5px] rounded-xl relative timeline"
          >
            <Box
              className="bar rounded-xl relative "
              _before={{
                content: `""`,
                right: "-5%",
                top: 0,
                bottom: 0,
                my: "auto",
                h: "13px",
                w: "13px",
                position: "absolute",
                borderRadius: "50%",
                bg: "orange.500",
              }}
              bg="orange.500"
              h="100%"
              style={{ width: `${(currentTime / duration) * 100}%` }}
            ></Box>
          </Box>

          <Slider
            aria-label="volume-slider"
            min={0}
            max={100}
            defaultValue={50}
            onChange={handleVolumeChange}
            h="120px"
            ml={3}
          >
            <SliderTrack bg="red.100">
              <SliderFilledTrack bg="tomato" />
            </SliderTrack>
            <SliderThumb boxSize={6}>
              <Box color="tomato" as={MdGraphicEq} />
            </SliderThumb>
          </Slider>
          <button onClick={handleFullscreen}>
            <MdFullscreen className="block fill-white" size="30" />
          </button>
        </div>
        <button>
          <i className="fa fa-fast-backward"></i>
        </button>
        <button>
          <i className="fa fa-fast-forward"></i>
        </button>
        <button>
          <i className="fa fa-cloud-download"></i>
        </button>
      </div>
    </div>
  );
};

export default memo(VideoComponent);
