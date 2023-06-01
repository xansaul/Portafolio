import React, { useRef,useState } from 'react'
import * as THREE from 'three'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import { CameraShake, PerspectiveCamera, Stars } from '@react-three/drei'

// models jsx
import { City,Ovni } from './glbsJSX'



function Rig() {
  const [vec] = useState(() => new THREE.Vector3())
  const { camera, mouse } = useThree()

  useFrame(() =>{ 
    // camera.position.lerp(vec.set(0, 100, mouse.x*15), 0.02)
    camera.rotation.y = THREE.MathUtils.lerp(camera.rotation.y, -((mouse.x * 1.5*Math.PI) / 20), 0.01) 
    camera.rotation.x = THREE.MathUtils.lerp(camera.rotation.x, ((mouse.y * 1.5*Math.PI) / 20), 0.01)
  })
  return <PerspectiveCamera />
}


export const CityScene = ({children}) => {


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



  return (
    <div className="h-screen bg-base-blue-400 relative" id="city" >
      <Canvas
        flat 
        linear
        gl={{
            outputEncoding: THREE.sRGBEncoding,
            toneMapping: THREE.ACESFilmicToneMapping,
            toneMappingExposure: .9
          }}
          camera={{ position: [0, 100, 0], fov: 65, rotation:[0,0,0]}}
      >

        <directionalLight color={lightsConfig.directional.color} intensity={lightsConfig.directional.intensity} />
        <ambientLight intensity={lightsConfig.ambient.intensity} color={lightsConfig.ambient.color} />
        <City rotation={[.01,70.6,0]}  position={[0,-30,-220]} />
        <Stars saturation={4} count={4000} speed={2}  radius={350} />
        <Ovni scale={[7,7,7]} position={[500,350,-900]} rotation={[0,0,-.5]}/>
        <Rig />
      </Canvas>
        {children}
    </div>
  )
}

