import React from 'react'
import { Banner } from '../scenes/Banner'
import { CityScene } from '../scenes/CityScene'
import { PageLaptop } from '../scenes/PageLaptop'
import { ParticlesStars } from './animations/ParticlesStars'
import { Contact } from './components/Contact'
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
      <CityScene>
        <Contact/>
      </CityScene>
      <Footer/>
    </div>
  )
}
