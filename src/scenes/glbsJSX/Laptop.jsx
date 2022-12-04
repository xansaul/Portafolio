
import React from "react";
import { useGLTF,Html } from "@react-three/drei";
import { WhoAmI } from "../pagesLaptop/components/WhoAmI";
import { Nav } from "../pagesLaptop/components/Nav";


export function Laptop(props) {


  const { nodes, materials } = useGLTF("/glbs/Laptop.glb");
  const pixels={
    width:'1640px',
    height:'1159px',
    position:[0,1,-13.6]
  }
  if(window.innerWidth < 567 ){
    pixels.width='1243px'
    pixels.height='879px'
    pixels.position=[0,1.2,-12]
  }
  
  return (
    <group {...props} dispose={null}>
      <group position={[0, -26.14, 10.95]} scale={13.21}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005.geometry}
          material={materials.grey}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane005_1.geometry}
          material={materials.Black}
        />
      </group>
      <group position={[0, -26.14, 10.95]} scale={13.21}>
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007.geometry}
          material={materials.Black}
        />
        <mesh
          castShadow
          receiveShadow
          geometry={nodes.Plane007_1.geometry}
          material={materials.grey}
        />
      </group>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Screen.geometry}
        material={materials.Screen}
        position={[0.01, 143.57, -60.11]}
        scale={13.21}
      >
          <Html 
            transform
            style={{
              overflow:'auto',
              backgroundColor:'#E0DEDE',
              width:pixels.width,
              height:pixels.height,
            }}
            position={pixels.position} 
            className="rounded-lg noScroll "
          >
            <WhoAmI/>
            <Nav/>
        </Html>
      </mesh>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Teclas.geometry}
        material={materials.Keys}
        position={[0, -26.14, 10.95]}
        scale={13.21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.Touchpad.geometry}
        material={materials.Keys}
        position={[0, -26.14, 10.95]}
        scale={13.21}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.TouchpadBtns.geometry}
        material={materials.Keys}
        position={[0, -26.14, 10.95]}
        scale={13.21}
      />
    </group>
  );
}

useGLTF.preload("/glbs/Laptop.glb");