import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import { motion } from 'framer-motion';

const Card = ({ cardCursor, scale, rotation, position }) => {
  const { nodes, materials } = useGLTF('/models/card.glb');
  const ref = useRef();

  // Animation loop using useFrame
  useFrame((state) => {
    // Add smooth motion effect
    ref.current.rotation.x = rotation[0] + cardCursor.y * 0.05; // Small tilt based on cursor
    ref.current.rotation.y = rotation[1] + cardCursor.x * 0.05;
    ref.current.position.set(
      position[0] + cardCursor.x * 0.2, 
      position[1] + cardCursor.y * 0.2, 
      position[2] + cardCursor.z * 0.1
    );
  });

  return (
    <group
    ref={ref} scale={scale} rotation={rotation}>
      <group scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Rectangle001_1.geometry}
          material={materials['01 - Default']}
          
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/card.glb');

export default Card;
