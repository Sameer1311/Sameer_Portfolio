"use client";
import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF, useAnimations, OrbitControls } from "@react-three/drei";

const Creepy = () => {
  const ref = useRef();
  const { scene, animations } = useGLTF("/models/hey_good_lookin_-_vinnie.glb");
  const { actions } = useAnimations(animations, ref);

  useEffect(() => {
    if (actions && actions["walk"] || actions[Object.keys(actions)[0]]) {
      // Try to play "walk", or fallback to the first animation
      const action = actions["walk"] || actions[Object.keys(actions)[0]];
      action.reset().fadeIn(0.5).play();

      return () => action.fadeOut(0.5);
    }
  }, [actions]);

  return <primitive ref={ref} object={scene} scale={[0.4,0.4,0.4]} position={[0.1,-0.3,0.1]}/>;
};

const Projects = () => {
  return (
    <div className="w-screen h-screen overflow-hidden  flex items-center flex-col md:flex-row justify-center  p-4">
      <motion.h1
        className="text-white text-2xl font-semibold mb-4 text-center self-center"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Currently working on exciting projects — stay tuned or contact me!
      </motion.h1>

      
        <Canvas camera={{ position: [2, 2, 2], fov: 45 }}>
          <ambientLight intensity={0.5} />
          <directionalLight intensity={0.6} position={[5, 5, 5]} />
          <Creepy />
        </Canvas>
      
    </div>
  );
};

export default Projects;
