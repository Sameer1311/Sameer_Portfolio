"use client";
import React, { useState } from "react";
import Image from "next/image";
import { Copy, CopyCheckIcon  } from "lucide-react";
import TechGrid from "@/app/constants/Tech";
import ContactForm from "@/app/constants/Form";
import { Button } from "@/components/ui/button";

const About = () => {
  const [copied, setCopied] = useState(false);
  const email = "negisameer72@gmail.com";

  const handleClipboard = () => {
    if (typeof window !== "undefined" && navigator?.clipboard) {
      navigator.clipboard.writeText(email).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      });
    }
  };

  return (
    <section className="min-h-screen w-screen text-white p-6 flex items-center justify-center">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 w-full max-w-7xl">
        {/* Developer Intro Block */}
        <div className="col-span-1 lg:col-span-2 bg-[#16161a] rounded-2xl p-6 flex flex-col md:flex-row items-center">
          <Image
            src="/images/coding-pov.png"
            alt="Coding POV"
            width={300}
            height={300}
            className="rounded-xl object-contain mb-4 md:mb-0 md:mr-6 hover::scale-[1] transition ease-in"
          />
          <div>
            <h1 className="text-2xl font-semibold mb-2">Hi, I'm Sameer Negi!</h1>
            <p className="text-sm text-gray-300">
              Over the last 2 years, I’ve developed my frontend, backend, and problem-solving skills to deliver dynamic and responsive software and web applications.
            </p>
          </div>
        </div>

        {/* Timezone & Principles */}
        <div className="flex flex-col gap-6">
          <div className="bg-[#16161a] rounded-2xl p-4 h-full flex flex-col justify-center items-center text-center">
            <h2 className="font-semibold">Time Zone</h2>
            <p className="text-sm text-gray-300">Based in India, open to remote work worldwide.</p>
            <div className="mt-4">🌍</div>
          </div>

          <div className="bg-[#1f1f2e] rounded-2xl p-4 text-center">
            <h2 className="font-semibold">Coding Principles</h2>
            <p className="text-xs text-gray-400 mt-1">SRP · DRY · KISS · YAGNI</p>
          </div>
        </div>

        {/* Contact Block */}
        <div className="bg-[#29293d] rounded-2xl p-6 col-span-1 flex items-center flex-col">
          <h2 className="font-semibold text-lg mb-2 text-center">Do you want to start a project together?</h2>
          <Button
            className="mt-4 flex items-center justify-center py-2 px-4 text-center font-bold rounded-lg  transition"
            onClick={handleClipboard}
          >
            Click to copy email
            <span className="mx-3 font-bold">
              {copied ? <CopyCheckIcon width={20} /> : <Copy width={20} />}
            </span>
          </Button>
          <h1 className="md:text-2xl text-xl mt-5 md:mt-8 font-bold">or</h1>
          <ContactForm/>
          
        </div>

        {/* Tech Stack */}
        <div className="bg-[#16161a] rounded-2xl p-6 col-span-1 lg:col-span-2">
          <h2 className="font-semibold text-lg mb-2">Tech Stack</h2>
          <p className="text-sm text-gray-300 mb-4">
            I specialize in a variety of languages, frameworks, and tools to build robust and scalable applications.
          </p>
          <div className="flex flex-wrap gap-4 text-3xl">
            <TechGrid/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
