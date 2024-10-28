"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[20px]">Welcome to my website</h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[800px] w-auto h-auto"
        >
          <span>
            Through
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              this website{" "}
            </span>
            you can learn about:
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-300 my-5 max-w-[600px]"
        >
          <div className="flex flex-row max-w-[125px] gap-2">
            <div className="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 rounded-full text-center">
              Introduction
            </div>
            <div className="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-full text-center">
              Experience
            </div>
            <div className="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-400 rounded-full text-center">
              Projects
            </div>
            <div className="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-300 rounded-full text-center">
              Skills
            </div>
            <div className="p-2 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-200 rounded-full text-center">
              Hobbies
            </div>
          </div>
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
        >
          Learn More!
        </motion.a>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center flex-col"
      >
        <Image
          src="/images/euler.png"
          alt="work icons"
          height={500}
          width={500}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
