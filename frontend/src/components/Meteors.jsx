"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const Meteors = ({
  number,
  className
}) => {
  const meteors = new Array(number || 20).fill(true);
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="relative w-full h-full"
    >
      {meteors.map((el, idx) => {
        const meteorCount = number || 20;
        const delay = (idx * 2) % 20; // Stagger the animation
        
        return (
          <span
            key={"meteor" + idx}
            className={cn(
              "animate-meteor-effect absolute h-0.5 w-0.5 rotate-[45deg] rounded-[9999px] bg-slate-500 shadow-[0_0_0_1px_#ffffff10]",
              "before:absolute before:top-1/2 before:h-[1px] before:w-[50px] before:-translate-y-[50%] before:transform before:bg-gradient-to-r before:from-[#64748b] before:to-transparent before:content-['']",
              className
            )}
            style={{
              top: Math.floor(Math.random() * 50) - 200 + "px",
              left: Math.floor(Math.random() * 100) + idx * (100 / meteorCount) + "%",
              animationDelay: delay + "s",
              animationDuration: "5s"
            }}
          />
        );
      })}
    </motion.div>
  );
};
