import React, { useEffect, useRef, useState } from "react";
import music from "../Images/music.mp3";
import play from "../Images/play.svg";
import pause from "../Images/pause.svg";
import ReactPlayer from "react-player";
import { NavLink } from "react-bootstrap";

const Hero = () => {
  const [playing, setPlaying] = useState(false);
  const ref = useRef(null);

  const myFunc = () => {
    console.log("I was activated 5 seconds later");
    ref.current && ref.current.click();
  };

  useEffect(() => {
    const timeoutId = setTimeout(myFunc, 5000); // Trigger myFunc after 5 seconds

    return () => clearTimeout(timeoutId); // Cleanup the timeout when component unmounts
  }, []);

  const playMusic = () => {
    setPlaying(!playing);
  };

  useEffect(() => {
    console.log(playing);
  }, [playing]);

  return (
    <>
      <div className="mt-5 marginAdjust pb-5" data-aos="fade-down">
        <p className="heroP pt-5">THE BAIT</p>
        <h1 className="heroh1">
        Shibraium Plays: Unleashing Play-to-Earn Potential with SHIB Token
        </h1>
        <div className="heroh1">
        <NavLink  className="linkButton" href="https://master--baitwhitelist.netlify.app/">
            <button className="btn btn-success">PLAY AND WIN AIRDROP</button>
        </NavLink>
          </div> 
      </div>
    </>
  );
};

export default Hero;
