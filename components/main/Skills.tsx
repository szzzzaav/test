"use client";

import { Backend_skill, Skill_data } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-row items-center justify-center gap-3 h-full relative overflow-hidden pb-80 py-20"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div className="flex flex-row justify-around mt-4 gap-5 items-start">
        <div className="flex flex-row justify-start items-start flex-wrap">
          <motion.div
            variants={slideInFromRight(0.5)}
            className="cursive text-[50px] text-gray-200 mb-10 mt-[10px] text-center w-full flex items-center justify-center gap-11"
          >
            <span className="max-w-sm">
              Learned by<span className="text-cyan-500"> myself</span>
            </span>
          </motion.div>
          {Skill_data.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
        <div className="flex flex-row justify-start items-start flex-wrap ">
          <motion.div
            variants={slideInFromRight(0.5)}
            className="cursive text-[50px] text-gray-200 mb-10 mt-[10px] text-center w-full flex items-center justify-center gap-11"
          >
            <span>
              Learned from <span className="text-purple-500">university</span>
            </span>
          </motion.div>
          {Backend_skill.map((image, index) => (
            <SkillDataProvider
              key={index}
              src={image.Image}
              width={image.width}
              height={image.height}
              index={index}
            />
          ))}
        </div>
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
