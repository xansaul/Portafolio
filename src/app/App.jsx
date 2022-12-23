import React, { useEffect, useState } from 'react'
import { Loader } from '@react-three/drei'

//components
import { Contact,Technologies,Me,Footer,Experience } from './components'
//3D Models
import { Banner,PageLaptop,CityScene } from '../scenes'
// particles
import { ParticlesStars } from './animations/ParticlesStars'


export const App = () => {
  const [isActive,setIsActive]=useState(true)

  useEffect(() => {
    if(isActive){
      document.body.classList.add('overflow-hidden')
    }else{
      document.body.classList.remove('overflow-hidden')
    }


  }, [isActive])
  
  return (
    <>
      <Loader
        containerStyles={{
          backgroundColor:'#05102C',
          position: 'fixed',
          bottom: '0',
          right: '0',
          zIndex:'100'
        }}
        dataInterpolation={(p) => `Cargando los modelos 3D ${p.toFixed(2)}%`} 
        initialState={(active) =>{
          setIsActive(active)
          return active
        }}
      />
      <ParticlesStars/>
      <Banner>
        <Me/>
      </Banner>
      <PageLaptop />

      <Technologies/>
      <Experience/>
      <CityScene>
        <Contact/>
      </CityScene>
      <Footer/>
    </>
  )
}
