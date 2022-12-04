import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Windows(props) {
  const { nodes, materials } = useGLTF("/glbs/windows.glb");
  return (
    <group {...props} dispose={null}>
      <group position={[-0.13, 0.79, -0.37]} scale={[0.19, 0.01, 0.12]}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028.geometry}
          material={materials["Material.005"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028_1.geometry}
          material={materials["Material.004"]}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Cube028_2.geometry}
          material={materials["Material.001"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glbs/windows.glb");

