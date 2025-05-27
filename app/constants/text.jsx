import React from "react";
import { motion } from "framer-motion";
const Text = () => {
    return (
        <motion.div
            className=" md:w-[40vw] w-[60vw] md:mx-10 mx-5  h-screen flex flex-col text-center items-center justify-center z-10"
        >
            <motion.h1
                className="text-5xl md:text-6xl font-bold text-black mb-6 drop-shadow-lg"
            >
                Hi, I'm{" "}
                <b className="text-white  drop-shadow-xl">
                    Sameer negi!
                </b>
            </motion.h1>

            <motion.p className="text-white text-xl md:text-2xl max-w-2xl text-center">
                I specialize in building high-performance web applications using
                <strong className="font-bold text-black shadow"> Next.js</strong>,{" "}
                <strong className="font-bold text-black shadow">React.js</strong>,{" "}
                <strong className="font-bold text-black shadow">Tailwind CSS</strong>,{" "}
                <strong className="font-bold text-black shadow">Javascript</strong>,{" "}
                <strong className="font-bold text-black shadow">Node.js</strong>, {" "}
                <strong className="font-bold text-black shadow">MongoDB</strong>, {" "}
                <strong className="font-bold text-black shadow">Web Sockets</strong>.

            </motion.p>
        </motion.div>
    );
};

export default Text;

