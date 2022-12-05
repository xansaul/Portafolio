import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import { Laptop } from './glbsJSX/Laptop'
import { Center, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'
export const PageLaptop = () => {
  const cameraTransforms= {
    position:[0,-20,-350],
    rotation:[.1,0,0]
  }
  let objScale=[1,1,1]
  let canZoom=false
  let objPosition=[0,0,-60]
  if(window.innerWidth < 567 ){
    cameraTransforms.position= [0, -42, -40]
    cameraTransforms.rotation=[.2,0,0]
    objScale=[.1,.1,.1]
    objPosition=[0,40,-3]
    canZoom=true
  }

  return (
    <div className="sm:h-screen h-3/4 bg-gradient-to-b from-[#01021B] to-[#010326] ">
      <Canvas
            gl={{
              outputEncoding: THREE.sRGBEncoding,
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 1.4
            }}
            camera={{
              fov:65
            }}
      >
        
        {/* <spotLight position={[0, 0, 1]} color="#C4D3F8" intensity={1}/> */}
        <ambientLight intensity={1.5} color="#A5BDFC"/>
        <PerspectiveCamera position={cameraTransforms.position} rotation={cameraTransforms.rotation} >
          <Suspense fallback={null}>
            <Laptop position={objPosition} scale={objScale} />
          </Suspense>
        </PerspectiveCamera>
      </Canvas>
    </div>
  )
}
