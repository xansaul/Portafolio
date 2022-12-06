
import React, { useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'

export function BannerModel(props) {
  let delta=0
  const clock=new THREE.Clock()
  const speed=.0005
  const {coords}=props
  
  const group = useRef()
  useFrame(() => {
    delta = clock.getDelta();
    group.current.rotation.y += 0.001;
    group.current.rotation.x += 0.001;
    group.current.position.x = -Math.sin( .5 * Math.PI * (coords.x - (.5*delta) )*speed)
    group.current.position.y = Math.sin( .5 * Math.PI * ( coords.y - (.5*delta)  )*speed )
    
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

