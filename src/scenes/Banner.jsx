import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Earth } from './glbsJSX/Earth'
import { Room } from './glbsJSX/Room'
import { Float, Stars, OrbitControls,PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'

export const Banner = ({children}) => {
  let cameraPosition= [0, -.4, -.5] 
  let objScale=[1,1,1]
  let canZoom=false
  if(window.innerWidth < 567 ){
    cameraPosition= [0, .8, -.5]
    objScale=[.6,.6,.6]
    canZoom=true
  }
  return (
    
    <div className="h-screen relative">
      <Canvas
      flat linear
        gl={{
          outputEncoding: THREE.sRGBEncoding,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.6
        }}
      >
        <color attach="background" args={["#0C1429"]} />
        <spotLight position={[0, 0, 5]} color="#C4D3F8" intensity={.2}/>
        <ambientLight intensity={0.2} color="#A5BDFC"/>
        <PerspectiveCamera position={cameraPosition} rotation={[.02, 0, 0]}>
        <Stars saturation={1} count={2000} speed={1} />
        <Float speed={1} rotationIntensity={1} floatIntensity={2}>
          {/* <Earth/> */}
            <Room rotation={[0,-.9, 0]} scale={objScale} />
          </Float>
      </PerspectiveCamera>
      <OrbitControls 
          makeDefault
          minAzimuthAngle={Math.PI / -4}
          maxAzimuthAngle={Math.PI / 4}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 3}
          enableZoom={canZoom}
          enablePan={true}
      />
      </Canvas>
      {children}
    </div>
  )
}
