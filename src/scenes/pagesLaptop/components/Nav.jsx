import React from 'react'
import { Link } from 'react-scroll'

import { ReactComponent as Cube } from '../assets/cube.svg'

export const Nav = () => {
  return (
    <div className="h-full w-full text-5xl mt-20 font-bold flex items-center leading-relaxed">
      <nav className="h-full w-6/12 top-0 flex items-center justify-center ml-5">
        <ul>
          <li className="hover:bg-clip-text hover:bg-gradient-to-t from-purple-400 to-pink-600 hover:text-transparent hover:translate-x-5 ease-in duration-100 hover:cursor-pointer">
            <Link activeClass="active" smooth spy to="skills">
              Skills
            </Link>
            </li>
          <li className="hover:bg-clip-text hover:bg-gradient-to-t from-purple-400 to-pink-600 hover:text-transparent  hover:translate-x-5 ease-in duration-100 hover:cursor-pointer">
            <Link activeClass="active" smooth spy to="experience">
              Experiencia
            </Link>
          </li>
        </ul>
      </nav>
      <div className="border-8 border-[#EAE8E8] border-l-purple-700 h-5/6 flex items-center w-1/2 justify-center">
        <Cube className="w-9/12 h-auto relative" />
      </div>
    </div>
  )
}
