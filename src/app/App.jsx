import React from 'react'
import { Banner } from '../scenes/Banner'
import { PageLaptop } from '../scenes/PageLaptop'
import { ParticlesStars } from './animations/ParticlesStars'
import { Experience } from './components/Experience'
import { Footer } from './components/Footer'
import { Me } from './components/Me'
import { Technologies } from './components/Technologies'


export const App = () => {
  return (
    <div className="text-justify">
      <ParticlesStars/>
      <Banner>
        <Me/>
      </Banner>
      <PageLaptop/>
      <Technologies/>
      <Experience/>
      <Footer/>
    </div>
  )
}
