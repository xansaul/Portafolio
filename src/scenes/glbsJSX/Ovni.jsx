
import React, { useEffect, useRef } from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'

import * as TWEEN from "@tweenjs/tween.js";

import ocni from '../../assets/glbs/ovni.glb'

export function Ovni(props) {
  const ovni=useRef()
  const { nodes, materials } = useGLTF(ocni)
  useEffect(() => {
    const position= new TWEEN.Tween(ovni.current.position).to({x:-500},4000).easing(TWEEN.Easing.Sinusoidal.InOut).repeat(Infinity).yoyo(true).start()
    const rotation= new TWEEN.Tween(ovni.current.rotation).to({z:.5}, 1500).easing(TWEEN.Easing.Sinusoidal.InOut).repeat(Infinity).yoyo(true).start()
  }, [ovni])
  
  let delta=0
  const clock=new THREE.Clock()
  const speed=1
  useFrame(()=>{
    TWEEN.update()
    delta = clock.getDelta();
    ovni.current.rotation.y+=Math.sin((speed * Math.PI) / 2)*delta
  })
  return (
    <group {...props} dispose={null} ref={ovni} >
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface3_aiStandardSurface1_0.geometry}
            material={materials.aiStandardSurface1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.polySurface4_aiStandardSurface1_0.geometry}
            material={materials.aiStandardSurface1}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.pSphere3_glass_0.geometry}
            material={materials.glass}
          />
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(ocni);
