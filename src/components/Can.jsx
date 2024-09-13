import React, { useRef } from 'react';
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';

const Can = ({cursor, scale, rotation, position}) => {
  const { nodes, materials } = useGLTF('/models/wetcan.glb'); // public/models/wetcan.glb
  const ref = useRef();

  useFrame(() => {
    if (ref.current) {
      ref.current.rotation.y += (cursor.x - 0.5) * 0.05; 
    }
  });
  return (
    <group  scale={scale} rotation={rotation} position={position} ref={ref}  dispose={null}>
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
  )
};

useGLTF.preload('/models/wetcan.glb');

export default Can;
