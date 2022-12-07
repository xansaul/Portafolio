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
  return (
    <div className="text-white h-full py-4">
      <div className="w-10/12 m-auto">
        <h2 className="text-3xl font-semibold block mt-4">
          tecnología
        </h2>
        <div className="grid md:grid-cols-7 sm:grid-cols-3 grid-cols-2 gap-y-4 md:gap-x-5 gap-x-3 w-11/12 m-auto mt-8 justify-center items-center">
            <div className="bg-white md:w-full sm:w-36 w-full rounded-md min-h-full grid place-items-center p-3">
              <img src={django} className="w-auto" />
            </div>
            <div className="bg-white md:w-full sm:w-36 w-full rounded-md min-h-full grid place-items-center p-3">
              <img src={three} className="w-full rounded-md" />
            </div>
            <div className="bg-white md:w-full sm:w-36 w-full rounded-md grid place-items-center min-h-full p-3">
              <img src={react} className="w-auto" />
            </div>
            <div className="bg-white md:w-full sm:w-36 w-full rounded-md min-h-full grid place-items-center p-3">
              <img src={js} className="w-auto self-center" />
            </div>
            <div className="bg-white md:w-full sm:w-36 w-full rounded-md min-h-full grid place-items-center p-3">
              <img src={github} className="w-auto" />
            </div>
            <div className="bg-white md:w-full sm:w-36 w-full rounded-md flex justify-center items-center min-h-full  p-3">
              <img src={unity} className="w-full rounded-md" />
            </div>
            <div className="bg-white md:w-full sm:w-36 w-full rounded-md min-h-full grid place-items-center p-3">
              <img src={python} className="w-full rounded-md" />
            </div>

        </div>
      </div>
    </div>
  )
}
