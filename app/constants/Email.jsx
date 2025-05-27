"use client";
import React from "react";
import { motion } from "framer-motion";

const DoneEmail = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                 p-6 bg-white border  rounded-xl shadow-lg text-center z-50"
    >
      <p className="font-bold text-lg text-black text-center">
        Thanks for contacting. <br />
        Check your clipboard.<br />
        Hope you liked my work!
      </p>
    </motion.div>
  );
};

export default DoneEmail;
