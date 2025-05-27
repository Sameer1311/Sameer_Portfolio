"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { Astronaut } from "@/app/constants/Astronaut";
import { Float } from "@react-three/drei";
import { useMediaQuery } from "react-responsive";
import { easing } from "maath";
import Wallpaper from "../wallpaper";
import Text from "@/app/constants/text";

const Hero = () => {
  const isMobile = useMediaQuery({ maxWidth: 853 });

  return (
    <section className="relative flex items-start justify-center w-screen h-screen overflow-hidden md:items-start md:justify-start">
      <Wallpaper />
      <Text/>
      <figure className="absolute inset-0 w-full h-full">
        <Canvas camera={{ position: [0, 1, 3] }}>
          <Float>
            <Astronaut
              scale={isMobile ? 0.23 : 0.3}
              position={isMobile ? [0, -1.5, 0] : [1.3, -1, 0]}
            />
          </Float>
          <Rig />
        </Canvas>
      </figure>
    </section>
  );
};

function Rig() {
  return useFrame((state, delta) => {
    easing.damp3(
      state.camera.position,
      [state.mouse.x / 10, 1 + state.mouse.y / 10, 3],
      0.5,
      delta
    );
  });
}

export default Hero;
