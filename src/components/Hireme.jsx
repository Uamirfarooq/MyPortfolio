import React from 'react'
import { CircularText } from './Icons'
import Link from 'next/link'

const Hireme = () => {
  return (
    <div className='fixed left-4 bottom-4 flex items-center justify-center overflow-hidden'>
      <div className='w-48 h-auto flex items-center justify-center relative'>
        <CircularText className={"fill-dark animate-spin-slow"}/>
      <Link href="mailto:mrumair775@gmail.com" className="flex items-center justify-center
       absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-dark shadow-md border-solid border-dark w-20 h-20 rounded-full text-light font-bold hover:bg-light hover:text-dark">
      Hire me
      </Link>
      </div>
    </div>
  )
}

export default Hireme
