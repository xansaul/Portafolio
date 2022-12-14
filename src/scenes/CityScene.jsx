import React, { useRef,useState } from 'react'
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { PerspectiveCamera, Stars } from '@react-three/drei'

// models jsx
import { City,Ovni } from './glbsJSX'



export const CityScene = ({children}) => {

  const refCamera=useRef()

  const cameraTransforms= {
    position:[-30,-120,-180],
    rotation:[.2,0,0]
  }

  const lightsConfig={
    ambient:{intensity:.7,color:'#5976F3'},
    directional:{intensity:2,color:'#09408E'}
  }

  if(window.innerWidth < 567 ){
    cameraTransforms.position= [-30,-120,-280]
    cameraTransforms.rotation=[0,0,0]
    lightsConfig.ambient.intensity=.4
    lightsConfig.ambient.color='#79B1FC'
    lightsConfig.directional.intensity=5
    // lightsConfig.directional.color='#D7DEFE'
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
    <div className="h-screen bg-base-blue-400 relative" id="city" onMouseMove={handleMouseMove}>
      <Canvas
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
          <City refCamera={refCamera} coords={coords} rotation={[0,1.7,0]}/>
          <Stars saturation={4} count={4000} speed={2}  radius={350} />
          <Ovni scale={[7,7,7]} position={[300,400,-600]} rotation={[-.2,0,0]}/>
        </PerspectiveCamera>
          
      </Canvas>
        {children}
    </div>
  )
}

