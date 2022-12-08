import React from 'react'


import django from "../../assets/imgs/tecno/django.png"
import react from "../../assets/imgs/tecno/react.png"
import js from "../../assets/imgs/tecno/js.png"
import three from "../../assets/imgs/tecno/threejs.png"
import github from "../../assets/imgs/tecno/github.png"
import python from "../../assets/imgs/tecno/python.png"
import unity from "../../assets/imgs/tecno/unity.png"
//grid md:grid-cols-4 sm:grid-cols-3 grid-cols-2
export const Technologies = () => {
  const tec=[
    django,
    react,
    js,
    three,
    github,
    unity,
    python,
  ]
  return (
    <div className="text-white h-full py-4">
      <div className="w-10/12 m-auto">
        <h2 className="text-3xl font-semibold block mt-4">
          tecnologías
        </h2>
        <div className="grid md:grid-cols-7 sm:grid-cols-3 grid-cols-2 gap-y-4 md:gap-x-5 gap-x-3 w-11/12 m-auto mt-8 justify-center items-center">
          {
            tec.map((tecno,index)=>(
              <div id={index} className="bg-white md:w-full sm:w-36 w-full rounded-md min-h-full grid place-items-center p-3">
                <img src={tecno} className="w-auto" />
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}
