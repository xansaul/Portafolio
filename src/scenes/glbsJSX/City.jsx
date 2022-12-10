import React from "react";
import { useGLTF } from "@react-three/drei";
import { useFrame } from "@react-three/fiber";
import * as THREE from 'three'
import city from '../../assets/glbs/city.glb'

export function City(props) {
  const target = new THREE.Vector2();
  const { nodes, materials } = useGLTF(city);
  const {coords,refCamera}=props
  useFrame(()=>{
    target.x = ( 1 - coords.x ) * 0.0004;
    target.y = ( 1 - coords.y ) * 0.0004;
    
    refCamera.current.rotation.x += 0.05 * ( target.y - refCamera.current.rotation.x  )
    refCamera.current.rotation.y += 0.05 * ( target.x - refCamera.current.rotation.y   )
  })
  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <group rotation={[Math.PI / 2, 0, 0]}>
          <group position={[70.28, 0, 2.69]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.building1polySurface1472_Building_7_0.geometry}
              material={materials.Building_7}
            />
          </group>
          <group position={[-31.95, 0, 23.67]} >
            <mesh
              castShadow
              receiveShadow
              geometry={
                nodes.building_2hotelpolySurface12_Building_2_0.geometry
              }
              material={materials.Building_2}
            />
          </group>
          <group position={[34.18, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.d_buildingpolySurface1299_Building_5_0.geometry}
              material={materials.Building_5}
            />
          </group>
          <group position={[-31.95, 0, 23.67]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.front1_Building_4_0.geometry}
              material={materials.Building_4}
            />
          </group>
          <group position={[-31.95, 0, -26.14]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.polySurface1026_Building_3_0.geometry}
              material={materials.Building_3}
            />
          </group>
          <group position={[-31.95, 0, -26.14]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.st_building1polySurface257_Building_1_0.geometry}
              material={materials.Building_1}
            />
          </group>
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.streetroadpolySurface238_street_road_0.geometry}
            material={materials.street_road}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.streetroadpolySurface250_street_road_0.geometry}
            material={materials.street_road}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.streetroadpolySurface253_street_road_0.geometry}
            material={materials.street_road}
          />
          <mesh
            castShadow
            receiveShadow
            geometry={nodes.streetroadpolySurface252_street_road_0.geometry}
            material={materials.street_road}
          />
          <group position={[34.18, 0, 0]}>
            <mesh
              castShadow
              receiveShadow
              geometry={nodes.typeMesh2_Building_6_0.geometry}
              material={materials.Building_6}
            />
          </group>
        </group>
      </group>
    </group>
  );
}

useGLTF.preload(city);
