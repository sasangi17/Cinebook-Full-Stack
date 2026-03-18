import React, { useEffect, useState } from 'react'
import MovieCard from '../components/MovieCard'

const Favorite = () => {

const [movies,setMovies] = useState([])

useEffect(()=>{

const favMovies = JSON.parse(localStorage.getItem("favorites")) || []

setMovies(favMovies)

},[])

return movies.length>0?(
<div className='relative my-40 mb-60 px-6 md:px-16 lg:px-40 xl:px-44
overflow-hidden min-h-[80vh]'>

<h1 className='text-lg font-medium my-4'>Your Favourite Movies</h1>

<div className='flex flex-wrap max-sm:justify-center gap-8'>

{movies.map((movie)=>(
<MovieCard movie={movie} key={movie._id}/>
))}

</div>

</div>

):(

<div className='flex flex-col items-center justify-center h-screen'>

<h1 className='text-lg font-medium my-4'>No Favourite Movies</h1>

</div>

)

}

export default Favorite