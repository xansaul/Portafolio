import React from 'react'
import TypeWriterEffect from 'react-typewriter-effect';

import bubble from '../assets/1.png'
import bubble2 from '../assets/2.png'
import bubble3 from '../assets/3.png'
import bubble4 from '../assets/4.png'

export const WhoAmI = () => {
  return (
    <div className="h-full w-full sm:text-6xl text-7xl relative font-bold">
      <img src={bubble} className="absolute -top-20 -left-20 z-10 sm:w-72 w-72 " />
      <img src={bubble2} className="absolute -bot-20 -right-0 z-10 sm:w-72 w-72" />
      <img src={bubble} className="absolute -bottom-20 -left-20 z-10 sm:w-72 w-72" />
      <img src={bubble2} className="absolute -bottom-20 -right-0 z-10 sm:w-72 w-72" />
      <img src={bubble3} className="absolute -top-20 right-0 z-10 sm:w-72 w-72" />
      <img src={bubble4} className="absolute -top-20 -right-30 z-10 sm:w-72 w-72" />
      <img src={bubble4} className="absolute -bottom-20 -right-30 z-10 sm:w-72 w-72" />
      <img src={bubble3} className="absolute -top-48 inset-x-1/3 z-10 sm:w-72 w-72" />
      <img src={bubble} className="absolute bottom-16 inset-x-1/2  z-10 sm:w-66 w-56" />
      <div className="absolute h-full w-full top-0  " />
      <div className="absolute h-full w-full top-0 flex items-center justify-center ">

        <div className="w-5/6 ">
          <div className="text-center leading-tight">
            <TypeWriterEffect
              startDelay={80}
              cursorColor="black"
              text="Saul, estudiante autodidacta y desarrollador de software."
              typeSpeed={60}
            />
          </div>

        </div>
      </div>
    </div>
  )
}
