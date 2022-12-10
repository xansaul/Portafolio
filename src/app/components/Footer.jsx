import React from 'react'

import { ReactComponent as GitHub } from '../../assets/imgs/svg/github.svg' 
import { ReactComponent as Instagram } from '../../assets/imgs/svg/instagram.svg' 
import { ReactComponent as Linkedin } from '../../assets/imgs/svg/linkedin.svg' 

export const Footer = () => {
  return (
    <footer className="w-full h-auto p-3 mt-6">
      
      <div className="flex flex-wrap gap-5 sm:justify-end items-center justify-center sm:mx-32">
        <h2 className="text-white" >Encuentro Cercano Del Tercer Tipo</h2>
        <div className="flex gap-6">
          <a href="https://github.com/XanSaulDev" target="_blank">
            <GitHub className="w-8 fill-white hover:fill-aqua-blue-100 ease-in duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/alejandro-saul-huerta-murillo-a0a32b221/" target="_blank">
            <Linkedin className="w-8 fill-white hover:fill-aqua-blue-100 ease-in duration-200"/>
          </a>
          <a href="https://www.instagram.com/xansaul/" target="_blank">
            <Instagram className="w-8 fill-white hover:fill-aqua-blue-100 ease-in duration-200"/>
          </a>
        </div>
      </div>
      <div className="text-white text-center mt-5">
        <h2>Personar creadoras de los modelos 3D</h2>
        <ul>
          <li className="hover:text-aqua-blue-100 ease-in duration-200"><a href="https://sketchfab.com/Doriguen">Doriguen</a></li>
          <li className="hover:text-aqua-blue-100 ease-in duration-200"><a href="https://sketchfab.com/anex">Anex</a></li>
          <li className="hover:text-aqua-blue-100 ease-in duration-200"><a href="https://sketchfab.com/Tgrrrr">TGRRRR</a></li>
          <li className="hover:text-aqua-blue-100 ease-in duration-200"><a href="https://sketchfab.com/norgeotloic">Loïc Norgeot</a></li>
          <li className="hover:text-aqua-blue-100 ease-in duration-200"><a href="https://www.youtube.com/@JohnScript">John Script</a></li>
        </ul>
      </div>
    </footer>
  )
}
