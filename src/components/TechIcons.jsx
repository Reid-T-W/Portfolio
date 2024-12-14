import React from 'react'
import { technologies } from '../constants'

const TechIcons = () => {
  return (
    <>
    <div className="flex flex-row gap-x-10 gap-y-5 flex-wrap justify-center items-center">
      {technologies.map((technology) => (
        <div className='flex flex-col justify-center items-center text-center w-32 h-32' key={technology.name}>
            <img className='w-14 h-auto' src={technology.icon} />
            <p>{technology.name}</p>
        </div>   
      ))}
      </div>
    </>
  )
}

export default TechIcons