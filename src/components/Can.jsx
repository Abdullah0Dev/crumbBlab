import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Can = ({ cursor, scale, rotation, position }) => {
  const { nodes, materials } = useGLTF('/models/wetcan.glb'); // public/models/wetcan.glb
  const ref = useRef();

  // Ref to store the swipe position
  const swipeStartRef = useRef({ x: 0, y: 0 });
  const rotationRef = useRef({ y: rotation[1] || 0 });

  // Function to handle swipe movement
  const handleSwipeMove = (event) => {
    const touch = event.touches[0];
    const deltaX = touch.clientX - swipeStartRef.current.x;
    ref.current.rotation.y = rotationRef.current.y + deltaX * 0.005; // Adjust sensitivity
  };

  // Function to store the start of a swipe
  const handleSwipeStart = (event) => {
    const touch = event.touches[0];
    swipeStartRef.current = { x: touch.clientX, y: touch.clientY };
  };

  // Function to store the end of a swipe
  const handleSwipeEnd = () => {
    rotationRef.current.y = ref.current.rotation.y;
  };

  useFrame(() => {
    if (ref.current) {
      // Rotate on mouse move
      ref.current.rotation.y += (cursor.x - 0.5) * 0.05;
    }
  });

  return (
    <group
      scale={scale}
      rotation={rotation}
      position={position}
      ref={ref}
      dispose={null}
      onTouchStart={handleSwipeStart}
      onTouchMove={handleSwipeMove}
      onTouchEnd={handleSwipeEnd}
    >
      <group scale={0.001}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Crumb_Lab_OBJ_1.geometry}
          material={materials.rest}
          scale={1000}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Object001_1.geometry}
          material={materials.label}
          scale={1000}
        />
      </group>
    </group>
  );
};

useGLTF.preload('/models/wetcan.glb');

export default Can;
