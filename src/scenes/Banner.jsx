import { Canvas } from '@react-three/fiber'
import React, { useRef } from 'react'
import { Float, Stars, OrbitControls,PerspectiveCamera } from '@react-three/drei'
import * as THREE from 'three'
import { BannerModel } from './glbsJSX/BannerModel'
import { useEffect } from 'react'
import { useState } from 'react'

export const Banner = ({children}) => {

  const [coords,setCoords] = useState({
    x:0,
    y:0
  })
  
  let windowHalfX = window.innerWidth / 2;
  let windowHalfY = window.innerHeight / 2;
  const ref=useRef()

  useEffect(() => {
    
  ref.current.addEventListener('mousemove',(event)=>{
      setCoords({
        x:( event.clientX - windowHalfX ) / 2,
        y:( event.clientY - windowHalfY ) / 2
      })
  })

  }, [])
  



  const cameraTransform={
    position:[0, .2, 3.4] ,
    rotation:[.8, 0, 0],
  }

  let objScale=[19,19,19]
  let canZoom=false

  if(window.innerWidth < 567 ){
    cameraTransform.rotation=[.8, 0, 0]
    cameraTransform.position = [0, .7, 2.6]
    objScale=[1,1,1]
    canZoom=true
  }

  return (
    
    <div className="h-full w-full relative" ref={ref}>

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
        <color attach="background" args={["#01021B"]} />
        <spotLight position={[0, 0, 5]} color="#A5BDFC" intensity={.7}/>
        <ambientLight intensity={.1} color="#A5BDFC"/>
        <PerspectiveCamera position={cameraTransform.position} rotation={cameraTransform.rotation}>
        <Stars saturation={1} count={2000} speed={1} />
        <Float speed={.5} rotationIntensity={0} floatIntensity={.7}>
          
          {/* <Room rotation={[0,-.9, 0]} scale={objScale} /> */}
          <BannerModel coords={coords} scale={[.9,.9,.9]}/>
          </Float>
      </PerspectiveCamera>

      </Canvas>
      {children}
    </div>
  )
}
