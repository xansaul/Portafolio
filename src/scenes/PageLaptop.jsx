import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import { Laptop } from './glbsJSX/Laptop'
import { Center, PerspectiveCamera, OrbitControls } from '@react-three/drei'
import * as THREE from 'three'

export const PageLaptop = () => {
  const cameraTransforms= {
    position:[0,-110,-110],
    rotation:[-.01,0,0]
  }
  let objScale=[1,1,1]
  let canZoom=false
  let objPosition=[0,-20,-25]
  if(window.innerWidth < 567 ){
    cameraTransforms.position= [0, -40, -40]
    cameraTransforms.rotation=[.2,0,0]
    objScale=[.1,.1,.1]
    objPosition=[0,40,-3]
    canZoom=true
  }
  return (
    <div className="h-screen bg-gradient-to-t from-[#0E2352] via-[#0E2047] to-base-blue sm:h-3/4 h-3/4">
      <Canvas
            gl={{
              outputEncoding: THREE.sRGBEncoding,
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 3
            }}
      >
        
        {/* <spotLight position={[0, 0, 5]} color="#C4D3F8" intensity={.1}/> */}
        <ambientLight intensity={.5} color="#A5BDFC"/>
        <PerspectiveCamera position={cameraTransforms.position} rotation={cameraTransforms.rotation} >
          <Suspense fallback={null}>
            <Laptop position={objPosition} scale={objScale} />
          </Suspense>
        </PerspectiveCamera>
        
      </Canvas>
    </div>
  )
}
