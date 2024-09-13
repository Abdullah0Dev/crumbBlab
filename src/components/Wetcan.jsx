/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Wetcan(props) {
      const { nodes, materials } = useGLTF('/models/wetcan.glb') // public/models/wetcan.glb
  return (
    <group {...props} dispose={null}>
      <group name="RootNode" scale={0.001}>
        <mesh
          name="Crumb_Lab_OBJ_1"
          castShadow
          receiveShadow
          geometry={nodes.Crumb_Lab_OBJ_1.geometry}
          material={materials.rest}
          scale={1000}
        />
        <mesh
          name="Object001_1"
          castShadow
          receiveShadow
          geometry={nodes.Object001_1.geometry}
          material={materials.label}
          scale={1000}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/models/wetcan.glb')
 