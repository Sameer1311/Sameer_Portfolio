"use client"

import { motion, useSpring, useTransform, useScroll } from "framer-motion";
import React from "react";

const Wallpaper = () => {
  const { scrollYProgress } = useScroll();

  const spring = useSpring(scrollYProgress, {
    damping: 50,
    stiffness: 100,
  });

  const mountain3Y = useTransform(spring, [0, 1], ["0%", "70%"]);
  const planetsX = useTransform(spring, [0, 0.5], ["0%", "-20%"]);
  const mountain2Y = useTransform(spring, [0, 0.5], ["0%", "30%"]);
  const mountain1Y = useTransform(spring, [0, 0.5], ["0%", "0%"]);

  return (
      <section className="absolute inset-0 bg-black/40">
      <div className="relative h-screen overflow-y-hidden">
        {/* Background Sky */}
        <div
          className="absolute inset-0 w-full h-screen -z-50"
          style={{
            backgroundImage: "url(/images/sky.jpg)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
          }}
        />
        {/* Mountain Layer 3 */}
        <motion.div
          className="absolute inset-0 -z-40"
          style={{
            backgroundImage: "url(/images/mountain-3.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain3Y,
          }}
        />
        {/* Planets */}
        <motion.div
          className="absolute inset-0 -z-30"
          style={{
            backgroundImage: "url(/images/planets.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            x: planetsX,
          }}
        />
        {/* Mountain Layer 2 */}
        <motion.div
          className="absolute inset-0 -z-20"
          style={{
            backgroundImage: "url(/images/mountain-2.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain2Y,
          }}
        />
        {/* Mountaine Layer 1 */}
        <motion.div
          className="absolute inset-0 -z-10"
          style={{
            backgroundImage: "url(/images/mountain-1.png)",
            backgroundPosition: "bottom",
            backgroundSize: "cover",
            y: mountain1Y,
          }}
        />
      </div>
    </section>
  );
};

export default Wallpaper;
