import React from 'react'

import { ReactComponent as Cube } from '../assets/cube.svg'

export const Nav = () => {
  return (
    <div className="h-full w-full text-7xl mt-20 font-bold flex items-center leading-relaxed">
      <nav className="h-full w-1/2 top-0 flex items-center justify-center mr-10">
        <ul>
          <li className="hover:bg-clip-text hover:bg-gradient-to-t from-purple-400 to-pink-600 hover:text-transparent hover:translate-x-14 ease-in duration-100"><a href="#">Skills</a></li>
          <li className="hover:bg-clip-text hover:bg-gradient-to-t from-purple-400 to-pink-600 hover:text-transparent  hover:translate-x-14 ease-in duration-100"><a href="#">Experiencia</a></li>
          <li className="hover:bg-clip-text hover:bg-gradient-to-t from-purple-400 to-pink-600 hover:text-transparent  hover:translate-x-14 ease-in duration-100"><a href="#">Experience web</a></li>
        </ul>
      </nav>
      <div className="border-8 border-[#E0DEDE] border-l-purple-700 h-5/6 flex items-center w-1/2 justify-center">
        <Cube className="w-9/12 h-auto relative" />
      </div>
    </div>
  )
}
