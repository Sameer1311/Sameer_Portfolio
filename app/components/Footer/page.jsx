"use client";
import React from "react";
import Link from "next/link";
// import { FaLinkedin, FaInstagram, FaGithub, FaLeetcode } from "react-icons/fa";
import {
  FaLinkedinIn,
  FaInstagram,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center">
        {/* Left Side */}
        <div className="mb-6 md:mb-0 text-center md:text-left">
          <h2 className="text-lg font-semibold text-gray-800">
            © 2025 Sameer Negi
          </h2>
          <p className="text-sm text-gray-500">
            Building future-ready web experiences
          </p>
        </div>

        {/* Right Side - Social Links */}
        <div className="flex gap-5">
          <Link
            href="https://www.linkedin.com/in/sameer-negi-52a85b336/"
            target="_blank"
            aria-label="LinkedIn"
            className="text-gray-600 hover:text-blue-600 transition duration-300 text-xl"
          >
            <FaLinkedin />
          </Link>
          <Link
            href="https://instagram.com/negisameer_106"
            target="_blank"
            aria-label="Instagram"
            className="text-gray-600 hover:text-pink-500 transition duration-300 text-xl"
          >
            <FaInstagram />
          </Link>
          <Link
            href="https://github.com/Sameer1311"
            target="_blank"
            aria-label="GitHub"
            className="text-gray-600 hover:text-black transition duration-300 text-xl"
          >
            <FaGithub />
          </Link>
          <Link
            href="https://leetcode.com/u/Codesameer/"
            target="_blank"
            aria-label="Leetcode"
            className="text-gray-600 hover:text-yellow-500 transition duration-300 text-xl"
          ></Link>
          <Image 
            src="/images/leetcode.svg"
            width={50}
            height={50}
            alt="leetcode"
          />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
