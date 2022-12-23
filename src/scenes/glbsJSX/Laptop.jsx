
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import laptop from '../../assets/glbs/Laptop.glb'
export function Laptop(props) {
  const { nodes, materials } = useGLTF(laptop);
  return (
    <group {...props} dispose={null}>
      <group position={[0, 1.51, 0.77]} rotation={[-0.26, 0, 0]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_1.geometry}
          material={materials.Black}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007.geometry}
        material={materials.Black}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Plane007_1.geometry}
        material={materials.grey}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials.Screen}
        position={[0, 12.85, -5.38]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teclas.geometry}
        material={materials.Keys}
        position={[0, 1.51, 0.77]}
        rotation={[-0.26, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Touchpad.geometry}
        material={materials.Keys}
        position={[0, 1.51, 0.77]}
        rotation={[-0.26, 0, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TouchpadBtns.geometry}
        material={materials.Keys}
        position={[0, 1.51, 0.77]}
        rotation={[-0.26, 0, 0]}
      />
    </group>
  );
}

useGLTF.preload(laptop);
