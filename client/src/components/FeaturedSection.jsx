import { ArrowRight } from 'lucide-react'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import BlurCircle from './BlurCircle'
import MovieCard from './MovieCard'
import dummyShowsData from "../assets/dummyShowsData";


const FeaturedSection = () => {
    const navigate = useNavigate()
  return (
   <div className='px-6 md:px-16 lg:px-24 xl:px-44 overflow-hidden'>
     <div className='flex items-center justify-between pt-20 pb-10'>
        <BlurCircle top='0' right='-80px'/>
         <p className='text-xl font-semibold text-white'>Now Showing</p> <button onClick={() => navigate('/movies')} className='group flex items-center gap-2 text-sm text-gray-300 hover:text-white transition cursor-pointer'>View All
         <ArrowRight className='w-4 h-4 group-hover:translate-x-1 transition-transform'/></button></div> 
    <div className='flex flex-wrap max-sm:justify-center gap-8 mt-8'>
      {dummyShowsData.slice(0,3).map((show)=>(
        <MovieCard key={show._id} movie={show}/>
      ))}
    </div>
    <div className='flex justify-center mt-20'>
      <button onClick={()=>{navigate('/movies');scrollTo(0,0)}} className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull
      transition rounded-md font-medium cursor-pointer'>Show More</button>
      </div> 
    
        
    </div>
  )
}

export default FeaturedSection