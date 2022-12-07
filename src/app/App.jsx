import React from 'react'
import { Banner } from '../scenes/Banner'
import { PageLaptop } from '../scenes/PageLaptop'
import { ParticlesStars } from './animations/ParticlesStars'
import { Me } from './components/Me'
import { Technologies } from './components/Technologies'


export const App = () => {
  return (
    <>
      <ParticlesStars/>
      <Banner>
        <Me/>
      </Banner>
      <PageLaptop/>
      <Technologies/>

    </>
  )
}
