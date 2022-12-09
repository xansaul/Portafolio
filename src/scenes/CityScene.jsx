import { Canvas } from '@react-three/fiber'
import React from 'react'
import { PerspectiveCamera, OrbitControls, Stars } from '@react-three/drei'
import * as THREE from 'three'
import { City } from './glbsJSX/City'
import { useRef,useState } from 'react'

export const CityScene = () => {

  const refCamera=useRef()
  //[20,-130,150]
  const cameraTransforms= {
    position:[-30,-120,-180],
    rotation:[.2,0,0]
  }

  const lightsConfig={
    ambient:{intensity:.6,color:'#5976F3'},
    directional:{intensity:1.5,color:'#09408E'}
  }

  if(window.innerWidth < 567 ){
    cameraTransforms.position= [0,20, 10]
    cameraTransforms.rotation=[-1.2,3.1,0]
    lightsConfig.ambient.intensity=3
    lightsConfig.ambient.color='#A2B4FF'
    lightsConfig.spotOne.intensity=.1
    lightsConfig.spotOne.color='#D7DEFE'
  }

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


  return (
    <div className="h-screen bg-base-blue-400">
      <Canvas
        onMouseMove={handleMouseMove}
        flat 
        linear
        gl={{
            outputEncoding: THREE.sRGBEncoding,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: .9
          }}
          camera={{
            fov:65,
          }}
      >
        <directionalLight color={lightsConfig.directional.color} intensity={lightsConfig.directional.intensity} />
        <ambientLight intensity={lightsConfig.ambient.intensity} color={lightsConfig.ambient.color} />
        <PerspectiveCamera ref={refCamera} rotation={cameraTransforms.rotation} position={cameraTransforms.position} > 
          {/* <Laptop position={objPosition} scale={objScale} /> */}
          {/* <Room/> */}
          <City refCamera={refCamera} coords={coords} rotation={[0,1.7,0]}/>
          <Stars saturation={4} count={4000} speed={2}  radius={250}/>
        </PerspectiveCamera>

      </Canvas>
    </div>
  )
}