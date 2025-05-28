"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import DoneEmail from "@/app/constants/Email";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";

const Contact = () => {
  const [Copied, setCopied] = useState(false);
  const Email = "negisameer72@gmail.com";

  const HandleEmail = () => {
    if (typeof window !== "undefined" && navigator?.clipboard) {
      navigator.clipboard.writeText(Email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 5000);
      });
    }
  };
  return (
    <div className="flex  w-[100vw] h-[100vh] flex-col items-center mt-10 ">
      <div className="w-[50vw] md:w-[30vw] space-y-3">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 0.6 }}
          viewport={{ once: false, amount: 0.5 }}
          className="md:text-3xl text-2xl font-bold self-start"
        >
          Let's talk
        </motion.h1>
        <p className="text-sm space-y-4 ">
          Whether you're looking to build a new website, improve your existing
          platform, or bring a unique project to life — I'm here. You can email
          me{" "}
          <button
            type="button"
            onClick={HandleEmail}
            className="text-blue-500 hover:underline transition delay-100 hover:cursor-pointer"
            suppressHydrationWarning
          >
            here
          </button>
          .
        </p>
        <hr className="bg-white" />
     <motion.div
  initial={{ opacity: 0 }}
  animate={{ opacity: 1 }}
  transition={{ delay: 2.2, duration: 0.6 }}
  className="mt-4 flex flex-col space-y-4"
>
  <h2 className="text-xl font-semibold mb-2">Social Links</h2>
  <div className="flex flex-col gap-3">
    <Link
      href="https://leetcode.com/u/Codesameer/"
      target="_blank"
      className="flex items-center gap-3 p-3 rounded-lg border border-gray-300 hover:bg-red-900 transition duration-200"
    >
      <img src="/images/leetcode.svg" alt="LeetCode" className="w-6 h-6" />
      <span>LeetCode</span>
    </Link>
    <Link
      href="https://www.linkedin.com/in/sameer-negi-52a85b336/"
      target="_blank"
      className="flex items-center gap-3 p-3 rounded-lg border border-gray-300 hover:bg-blue-900 transition duration-200"
    >
      <img src="/images/linkedin.svg" alt="LinkedIn" className="w-6 h-6" />
      <span>LinkedIn</span>
    </Link>
    <Link
      href="https://instagram.com/negisameer_106"
      target="_blank"
      className="flex items-center gap-3 p-3 rounded-lg border border-gray-300 hover:bg-pink-900 transition duration-200"
    >
      <img src="/images/instagram.svg" alt="Instagram" className="w-6 h-6" />
      <span>Instagram</span>
    </Link>
      <Link
      href="https://github.com/Sameer1311"
      target="_blank"
      className="flex items-center gap-3 p-3 rounded-lg border border-gray-300 hover:bg-white hover:text-black transition duration-200"
    >
      <img src="/images/github.svg" alt="Instagram" className="w-6 h-6 fill-white" />
      <span>GitHub</span>
    </Link>
  </div>
</motion.div>

      </div>
      <AnimatePresence>
        {Copied && (
          <div aria-live="assertive">
            <DoneEmail />
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
// negisameer72@gmail.com
