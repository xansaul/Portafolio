import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Earth } from './glbsJSX/Earth'
import { Room } from './glbsJSX/Room'
import { Float, Stars, OrbitControls,PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { Laptop } from './glbsJSX/Laptop'
import { Windows } from './glbsJSX/Windows'
import { Tv } from './glbsJSX/Tv'

export const Banner = ({children}) => {

  const cameraTransform={
    position:[0, .5, -135] ,
    rotation:[.8, 0, 0],
  }

  let objScale=[20,20,20]
  let canZoom=false

  if(window.innerWidth < 567 ){
    cameraTransform.rotation=[.8, 0, 0]
    cameraTransform.position = [0, 1, -1]
    objScale=[.6,.6,.6]
    canZoom=true
  }

  return (
    
    <div className="h-full w-full relative">
      <Canvas
      flat linear
        gl={{
          outputEncoding: THREE.sRGBEncoding,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
        camera={{
          fov:65
        }}
      >
        <color attach="background" args={["#0C1429"]} />
        <spotLight position={[0, 0, 5]} color="#A5BDFC" intensity={.7}/>
        <ambientLight intensity={.1} color="#A5BDFC"/>
        <PerspectiveCamera position={cameraTransform.position} rotation={cameraTransform.rotation}>
        <Stars saturation={1} count={2000} speed={1} />
        <Float speed={1} rotationIntensity={.5} floatIntensity={1}>
          
          <Room rotation={[0,-.9, 0]} scale={objScale} />
          </Float>
      </PerspectiveCamera>

      </Canvas>
      {children}
    </div>
  )
}
