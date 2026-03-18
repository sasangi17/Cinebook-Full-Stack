import { ArrowRight, Calendar1Icon, ClockIcon } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const HeroSection = () => {
    const navigate = useNavigate()
  return (
    <div className='flex flex-col items-start justify-center gap-4 px-6 md:px-16 lg:px-36 bg-[url("/backgroundImage.jpeg")] bg-cover bg-center h-screen'>
      <h1 className='text-5xl md:text-[70px]  md:leading-18 font-semibold max-w-110'>Avatar<br/>Fire and Ash</h1>
      <div className='flex item-center gap-4 text-gray-300'>
        <span>Action|Fantasy|Science Fiction </span>
        <div className='flex item-center gap-1'>
            <Calendar1Icon className='w-4.5 h-4.5'/> 2025
        </div>
        <div className='flex item-center gap-1'>
            <ClockIcon className='w-4.5 h-4.5'/> 3h 17m
        </div>
      </div>
      <p className='max-w-md text-gray-300'>Jake and Neytiri's family grapples with grief, encountering a new, aggressive Na'vi tribe, the Ash People, who are led by the fiery Varang,
         as the conflict on Pandora escalates and a new moral focus emerges.</p>
         <button onClick={() => navigate('/movies')} className="group flex items-center gap-2 px-6 py-3 bg-red-500 text-white rounded-full
             hover:bg-gray-800 transition-all duration-300"
>
  Explore Movies
  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
</button>



    </div>
  )
}

export default HeroSection