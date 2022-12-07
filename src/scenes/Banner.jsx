import { Canvas, useFrame } from '@react-three/fiber'
import React from 'react'
import { Float, Stars, OrbitControls,PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { BannerModel } from './glbsJSX/BannerModel'
import { useState } from 'react'


export const Banner = ({children}) => {

  let orbitControls=true

  const [coords,setCoords] = useState({
    x:0,
    y:0
  })
  
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;
  

  const handleMouseMove=(event)=>{
      setCoords({
        x:( event.clientX - windowHalfX ) / 2,
        y:( event.clientY - windowHalfY ) / 2
      })
  }

  const cameraTransform={
    position:[0, -3, 3.4] ,
    rotation:[.8, 0, 0],
  }

  const objTransform={
    position:[0,0,-5],
    scale:[3.2,3.2,3.2]
  }


  let canZoom=false

  if(window.innerWidth < 567 ){
    orbitControls=false
    cameraTransform.rotation=[.8, 0, 0]
    cameraTransform.position = [0, -2, 2.6]
    objTransform.scale=[2.5,2.5,2.5]
    canZoom=true
  }

  return (
    
    <div className="h-screen w-full relative  bg-gradient-to-b from-base-blue-100 to-base-blue-200" onMouseMove={handleMouseMove}>

      <Canvas
        flat 
        linear
        gl={{
          outputEncoding: THREE.sRGBEncoding,
          toneMapping: THREE.ACESFilmicToneMapping,
          toneMappingExposure: 1.2
        }}
        camera={{
          fov:65
        }}
      >
        {/* <color attach="background" args={["#01021B"]} /> */}
        <ambientLight intensity={.1} color="#A5BDFC"/>
        <PerspectiveCamera position={cameraTransform.position} rotation={cameraTransform.rotation} >
        <Stars saturation={1} count={2000} speed={1} />
        <Float speed={.5} rotationIntensity={0} floatIntensity={.7}>
          <BannerModel coords={coords} scale={objTransform.scale} position={objTransform.position} /> 
        </Float>
      </PerspectiveCamera> 
      {
        orbitControls?
          <OrbitControls
          makeDefault
          minAzimuthAngle={0}
          maxAzimuthAngle={Math.PI / -180}
          minPolarAngle={Math.PI / 2.2}
          maxPolarAngle={Math.PI / 2.2}
          enableZoom={canZoom}
          enablePan={true}
          zoomSpeed={0.3}
        />
        :
        null
      }

      </Canvas>
      {children}
    </div>
  )
}
