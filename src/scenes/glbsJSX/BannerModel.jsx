
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";

export function BannerModel(props) {

  const {coords}=props

  const group = useRef()
  console.log(props)
  useFrame(() => {
    group.current.rotation.y += 0.001;
    group.current.rotation.x += 0.001;
    group.current.position.x = -Math.sin( .5 * Math.PI * ( coords.x - .5 )*.0003 )
    group.current.position.y = Math.sin( .5 * Math.PI * ( coords.y - .5 )*.0002 )
    
  })
  
  const { nodes, materials } = useGLTF("/glbs/banner.glb");
  return (
    <group {...props} dispose={null} ref={group}>
      <group rotation={[-Math.PI / 2, 0, 0]} scale={0.01} >
        <points
          geometry={nodes.Object_2.geometry}
          material={materials["Scene_-_Root"]}
        />
        <points
          geometry={nodes.Object_3.geometry}
          material={materials["Scene_-_Root"]}
        />
        <points
          geometry={nodes.Object_4.geometry}
          material={materials["Scene_-_Root"]}
        />
        <points
          geometry={nodes.Object_5.geometry}
          material={materials["Scene_-_Root"]}
        />
      </group>
    </group>
  );
}

useGLTF.preload("/glbs/banner.glb");

