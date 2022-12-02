import React from 'react'
import { Banner } from '../scenes/Banner'
import { PageLaptop } from '../scenes/PageLaptop'
import { Me } from './components/Me'


export const App = () => {
  return (
    <div className='h-screen bg-base-blue'>
      <Banner>
        <Me/>
      </Banner>
      <PageLaptop/>
    </div>
  )
}
