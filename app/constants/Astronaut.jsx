import React, { useEffect, useRef } from "react";
import { useGLTF, useAnimations } from "@react-three/drei";
import { useMotionValue, useSpring } from "framer-motion";
import { useFrame } from "@react-three/fiber";

export function Astronaut(props) {
  const group = useRef();
  const { nodes, materials, animations } = useGLTF("/models/tenhun_falling_spaceman_fanart.glb");
  const { actions } = useAnimations(animations, group);

  const yPosition = useMotionValue(5); // Unconditionally declared
  const ySpring = useSpring(yPosition, { damping: 12 }); // Unconditionally declared

  useEffect(() => {
    if (animations.length > 0) {
      actions[animations[0].name]?.play();
    }

    ySpring.set(-1); // Set spring target
  }, [actions, animations, ySpring]);

  useFrame(() => {
    if (group.current) {
      group.current.position.y = ySpring.get();
    }
  });

  return (
    <group
      ref={group}
      {...props}
      dispose={null}
      rotation={[-Math.PI / 2, -0.2, 2.2]}
      scale={props.scale || 0.3}
      position={props.position || [1.3, -1, 0]}
    >
      <group name="Sketchfab_Scene">
        <group name="Sketchfab_model">
          <group name="Root">
            <group name="metarig">
              <primitive object={nodes.metarig_rootJoint} />
              {[
                "Cube001_0", "Cube005_0", "Cube002_0", "Plane_0",
                "Cube008_0", "Cube004_0", "Cube003_0", "Cube_0",
                "Cube009_0", "Cube011_0"
              ].map((name) => (
                <skinnedMesh
                  key={name}
                  name={name}
                  geometry={nodes[name].geometry}
                  material={materials["AstronautFallingTexture.png"]}
                  skeleton={nodes[name].skeleton}
                />
              ))}
              <group name="Cube001" />
              <group name="Cube005" />
              <group name="Cube002" />
              <group name="Plane" />
              <group name="Cube008" />
              <group name="Cube004" />
              <group name="Cube003" />
              <group name="Cube" />
              <group name="Cube009" rotation={[-2.708, 0.013, -1.447]} scale={1.307} />
              <group name="Cube011" />
            </group>
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload("/models/tenhun_falling_spaceman_fanart.glb");
