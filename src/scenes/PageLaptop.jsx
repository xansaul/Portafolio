import { Canvas } from '@react-three/fiber'
import React, { Suspense, useRef } from 'react'
import { Laptop } from './glbsJSX/Laptop'
import { Center, PerspectiveCamera, OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { Room } from './glbsJSX/Room'
export const PageLaptop = () => {
  const cameraTransforms= {
    position:[5,-8,-3],
    rotation:[0,.3,0]
  }

  let orbitControls=true
  let objScale=[1,1,1]
  let canZoom=false
  let objPosition=[0,-12,-10]
  
  if(window.innerWidth < 567 ){
    cameraTransforms.position= [0,2, 15]
    cameraTransforms.rotation=[-1,3.1,0]
    objScale=[.1,.1,.1]
    objPosition=[0,40,-20]
    canZoom=true
    orbitControls=false
  }

  return (
    <div className="sm:h-screen h-screen ">
      <Canvas
            flat 
            linear
            gl={{
              outputEncoding: THREE.sRGBEncoding,
              toneMapping: THREE.ACESFilmicToneMapping,
              toneMappingExposure: 1
            }}
            camera={{
              fov:65,
              position:[0,-20,-20],
            }}
      >
        <color attach="background" args={["#01021B"]} />
        <spotLight position={[0,50, 1]} color="#B7CCF9" intensity={.5}/>
        <ambientLight intensity={1.5} color="#78A0FE"/>
        <PerspectiveCamera  rotation={cameraTransforms.rotation} position={cameraTransforms.position} > 
          {/* <Laptop position={objPosition} scale={objScale} /> */}
          <Room/>
          <Stars saturation={1} count={2000} speed={1} />
        </PerspectiveCamera>
        {
          orbitControls?
            <OrbitControls
            makeDefault
            minAzimuthAngle={Math.PI / -6}
            maxAzimuthAngle={Math.PI / 3}
            minPolarAngle={Math.PI / 2.2}
            maxPolarAngle={Math.PI / 2.2}
            enableZoom={false}
            enablePan={true}
            zoomSpeed={0.3}
            />
            :
            null
        }
      </Canvas>
    </div>
  )
}
