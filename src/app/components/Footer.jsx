import React from 'react'

import { ReactComponent as GitHub } from '../../assets/imgs/svg/github.svg' 
import { ReactComponent as Instagram } from '../../assets/imgs/svg/instagram.svg' 
import { ReactComponent as Linkedin } from '../../assets/imgs/svg/linkedin.svg' 

export const Footer = () => {
  return (
    <div className="w-full h-auto p-3 mt-6">
      <div className="flex gap-5 sm:justify-end justify-center mx-32">
        <div className="flex gap-6">
          <a href="https://github.com/XanSaulDev" target="_blank">
            <GitHub className="w-8 fill-white hover:fill-[#B9B9B9] ease-in duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/alejandro-saul-huerta-murillo-a0a32b221/" target="_blank">
            <Linkedin className="w-8 fill-white hover:fill-[#B9B9B9] ease-in duration-200"/>
          </a>
          <a href="https://www.instagram.com/xansaul/" target="_blank">
            <Instagram className="w-8 fill-white hover:fill-[#B9B9B9] ease-in duration-200"/>
          </a>
        </div>
      </div>
    </div>
  )
}
