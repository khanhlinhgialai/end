import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

const MotionLink = motion(Link);
const Logo = () => {
  return (
    <div className="flex items-center justify-center mt-2 ">
      <MotionLink
        href="/"
        className="w-20 h-20 bg-dark text-light flex items-center justify-center
        rounded-full text-2xl font-bold border border-solid border-transparent dark:border-light
        dark:shadow-[0_0_2px_#fff,inset_0_0_2px_#fff,0_0_5px_#08f,0_0_15px_#08f,0_0_30px_#08f]
        "
        whileHover={{ 
          scale: 1.2,
          backgroundColor: ["#121212", "rgba(131,58,180,1)","rgba(30,139,195,1)","rgba(252,176,69,1)","rgba(131,58,180,1)", "#121212"],
          transition: {duration:1, repeat: Infinity}
         }}
      >
    <Image 
     src='https://hotelkhanhlinh.vn/_ipx/w_256,q_75/%2Flogotv.png?url=%2Flogotv.png&w=256&q=75'
    width={100}
    height={60}
    alt=""
    priority={true}
        />
      </MotionLink>
    </div>
  );
};

export default Logo;
