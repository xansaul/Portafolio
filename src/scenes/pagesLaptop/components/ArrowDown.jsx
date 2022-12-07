import React from 'react'
import { ReactComponent as Arrow } from '../assets/arrow.svg'

export const ArrowDown = () => {
  return (
    <div className="rounded-full p-2 bg-[#A762FE] fixed w-auto left-96 bottom-0 animate-bounce ">
      <Arrow className="invert w-[2.5rem] h-[2.5rem]" />
    </div>
  )
}
