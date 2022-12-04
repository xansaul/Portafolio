import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";

export function Tv(props) {
  const { nodes, materials } = useGLTF("/glbs/tv.glb");
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Power_Cable001.geometry}
        material={materials.Cable}
        position={[0.01, 0.24, -1.93]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cylinder.geometry}
        material={materials.Steel}
        position={[-0.03, 0.02, -2.87]}
        rotation={[0, -0.87, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials.Screen}
        position={[0, 1.3, -0.22]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen_Rim.geometry}
        material={materials["Black Plastic"]}
        position={[0, 1.3, 0]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Power_Cable_Entrance.geometry}
        material={materials["Black Plastic"]}
        position={[0, 0.23, -0.98]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Power_Cable.geometry}
        material={materials["Black Plastic"]}
        position={[0.02, 0.24, -1.93]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Cube.geometry}
        material={materials["Black Plastic"]}
        position={[0.02, 0.02, -2.85]}
        rotation={[0, 0.68, 0]}
        scale={1.34}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Knob.geometry}
        material={materials.Knob}
        position={[0.88, 0.22, 1.17]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tape_Slot.geometry}
        material={materials["Stained Wood"]}
        position={[0, 0.22, 1.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Knob_Outter.geometry}
        material={materials.Brass}
        position={[0.88, 0.22, 1.18]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Tape_Slot_Rim.geometry}
        material={materials.Brass}
        position={[0, 0.22, 1.14]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Chrome_Rim.geometry}
        material={materials.Brass}
        position={[0, 1.2, 0.01]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Feet.geometry}
        material={materials.Brass}
        position={[0, 0, 0.07]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.CRT_Hump.geometry}
        material={materials["Grey Painted Metal"]}
        position={[0, 1.2, -1.21]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Rear_Panel.geometry}
        material={materials["Ply Wood"]}
        position={[0, 1.2, 0.03]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Front_Plate.geometry}
        material={materials["Varnished Wood"]}
        position={[0, 1.2, 1.13]}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Main_Body.geometry}
        material={materials["Varnished Wood"]}
        position={[0, 1.2, 0]}
      />
    </group>
  );
}

useGLTF.preload("/glbs/tv.glb");
