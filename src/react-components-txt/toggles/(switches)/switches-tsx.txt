"use client";
import clsx from "clsx";
import React, { useState } from "react";
import {
  FaBell,
  FaBellSlash,
  FaLock,
  FaPause,
  FaPlay,
  FaUnlock,
} from "react-icons/fa6";
import { IoMdMoon } from "react-icons/io";
import { MdWbSunny } from "react-icons/md";
import { PiSpeakerHighFill, PiSpeakerSlashFill } from "react-icons/pi";
import { BiSolidDislike, BiSolidLike } from "react-icons/bi";

const Switches = () => {
  const [Bell, setBell] = useState<boolean>(false);
  const [Mute, setMute] = useState<boolean>(true);
  const [Theme, setTheme] = useState<boolean>(false);
  const [Play, setPlay] = useState<boolean>(false);
  const [Like, setLike] = useState<boolean>(true);
  const [Lock, setLock] = useState<boolean>(false);

  return (
    <div className="space-x-2">
      <button
        className={clsx(
          "text-white aspect-square text-2xl p-2 rounded-xl",
          Bell ? "bg-cyan-500" : "bg-cyan-700"
        )}
        onClick={() => setBell(!Bell)}
      >
        {Bell ? <FaBell /> : <FaBellSlash />}
      </button>
      <button
        className={clsx(
          "text-white aspect-square text-2xl p-2 rounded-xl",
          Mute ? "bg-cyan-500" : "bg-cyan-700"
        )}
        onClick={() => setMute(!Mute)}
      >
        {Mute ? <PiSpeakerHighFill /> : <PiSpeakerSlashFill />}
      </button>
      <button
        className={clsx(
          "text-white aspect-square text-2xl p-2 rounded-xl",
          Theme ? "bg-cyan-500" : "bg-cyan-700"
        )}
        onClick={() => setTheme(!Theme)}
      >
        {Theme ? <MdWbSunny /> : <IoMdMoon />}
      </button>
      <button
        className={clsx(
          "text-white aspect-square text-2xl p-2 rounded-xl",
          Play ? "bg-cyan-500" : "bg-cyan-700"
        )}
        onClick={() => setPlay(!Play)}
      >
        {Play ? <FaPlay /> : <FaPause />}
      </button>
      <button
        className={clsx(
          "text-white aspect-square text-2xl p-2 rounded-xl",
          Like ? "bg-cyan-500" : "bg-cyan-700"
        )}
        onClick={() => setLike(!Like)}
      >
        {Like ? <BiSolidLike /> : <BiSolidDislike />}
      </button>
      <button
        className={clsx(
          "text-white aspect-square text-2xl p-2 rounded-xl",
          Lock ? "bg-cyan-500" : "bg-cyan-700"
        )}
        onClick={() => setLock(!Lock)}
      >
        {Lock ? <FaUnlock /> : <FaLock />}
      </button>
    </div>
  );
};

export default Switches;
