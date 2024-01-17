import React from "react";
import { easeInOut, motion } from "framer-motion";
const TransitionEffect = () => {
  return (
    <>
      <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-30 bg-primary dark:bg-primaryDark"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        exit={{x: ['0%','100%'], width: ['0%','100%']}}
      />
          <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-20 bg-light"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{delay:0.2, duration: 0.8, ease: "easeInOut" }}
      />
          <motion.div
        className="fixed top-0 bottom-0 right-full w-screen h-screen z-10 bg-dark dark:bg-yellow-400"
        initial={{ x: "100%", width: "100%" }}
        animate={{ x: "0%", width: "0%" }}
        transition={{delay:0.4, duration: 0.8, ease: "easeInOut" }}
      />
    </>
  );
};

export default TransitionEffect;
