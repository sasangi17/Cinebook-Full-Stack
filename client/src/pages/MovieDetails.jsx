import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import dummyShowsData from '../assets/dummyShowsData'
import { dummyDateTimeData } from '../assets/dummyDateTimeData'
import dummyTrailers from '../assets/dummyTrailers'
import { Heart, PlayCircle, StarIcon } from 'lucide-react'
import DateSelect from '../components/DateSelect'
import MovieCard from '../components/MovieCard'
import Loading from '../components/Loading'

const MovieDetails = () => {
  const navigate = useNavigate()
  const { id } = useParams()
  const [show, setShow] = useState(null)
  const [isFav, setIsFav] = useState(false)
  const [trailerUrl, setTrailerUrl] = useState(null) // Trailer modal state

  // Get show details
  const getShow = () => {
    const movie = dummyShowsData.find(show => show._id === id)
    if (!movie) return
    setShow({ movie: movie, dateTime: dummyDateTimeData })
  }

  useEffect(() => {
    getShow()
  }, [id])

  // Favorites
  const addToFavorite = () => {
    const favMovies = JSON.parse(localStorage.getItem("favorites")) || []
    const exists = favMovies.find((m) => m._id === show.movie._id)

    if (exists) {
      const updated = favMovies.filter((m) => m._id !== show.movie._id)
      localStorage.setItem("favorites", JSON.stringify(updated))
      setIsFav(false)
    } else {
      favMovies.push(show.movie)
      localStorage.setItem("favorites", JSON.stringify(favMovies))
      setIsFav(true)
    }
  }

  useEffect(() => {
    const favMovies = JSON.parse(localStorage.getItem("favorites")) || []
    const exists = favMovies.find((m) => m._id === id)
    if (exists) setIsFav(true)
  }, [id])

  // Watch Trailer using _id matching
  const watchTrailer = () => {
    const trailer = dummyTrailers.find(t => t._id === show.movie._id)
    if (trailer) {
      setTrailerUrl(trailer.videoUrl)
    } else {
      alert("Trailer not found!")
    }
  }

  if (!show) return <Loading />

  return (
    <div className='px-6 md:px-16 lg:px-40 pt-30 md:pt-50'>
      {/* Movie Info */}
      <div className='flex flex-col md:flex-row gap-8 max-w-6xl mx-auto'>
        <img
          src={show.movie.backdrop_path}
          alt=""
          className='max-md:mx-auto rounded-xl h-104 max-w-70 object-cover'
        />
        <div className='relative flex flex-col gap-3'>
          <p className='text-primary'>English</p>
          <h1 className='text-4xl font-semibold max-w-96 text-balance'>
            {show.movie.title}
          </h1>
          <div className='flex items-center gap-2 text-gray-400'>
            <StarIcon className='w-5 h-5 text-primary fill-primary'/>
            {show.movie.vote_average.toFixed(1)} User Rating
          </div>
          <p>
            {show.movie.runtime} <br/>
            {show.movie.genres.map(g => g.name).join(', ')} ({show.movie.release_date.split('-')[0]})
          </p>
          <p className="text-gray-400 max-w-xl">{show.movie.overview}</p>

          {/* Buttons */}
          <div className='flex items-center flex-wrap gap-4 mt-4'>
            <button
              onClick={watchTrailer}
              className='flex items-center gap-2 px-7 py-3 text-sm bg-gray-800 hover:bg-gray-900
              transition rounded-md font-medium cursor-pointer active:scale-95'
            >
              <PlayCircle className='w-5 h-5'/>
              Watch Trailer
            </button>

            <a href="#dateSelect"
              className="px-10 py-3 text-sm bg-primary hover:bg-primary-dull transition 
              rounded-md font-medium cursor-pointer active:scale-95">
              Buy Tickets
            </a>

            <button
              onClick={addToFavorite}
              className='bg-gray-700 p-2.5 rounded-full transition cursor-pointer active:scale-95'
            >
              <Heart className={`w-5 h-5 ${isFav ? "text-red-500 fill-red-500" : ""}`}/>
            </button>
          </div>
        </div>
      </div>

      {/* Cast */}
      <p className='text-lg font-medium mt-20'>Cast</p>
      <div className='overflow-x-auto no-scrollbar mt-8 pb-4'>
        <div className='grid grid-flow-col auto-cols-max gap-6'>
          {show.movie.cast.slice(0,12).map((cast,index)=>(
            <div key={index} className='flex flex-col items-center text-center min-w-[100px]'>
              <img
                src={cast.profile_path}
                alt={cast.name}
                className='w-20 h-20 rounded-full object-cover'
              />
              <p className='text-sm mt-2'>{cast.name}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Date Select */}
      <DateSelect dateTime={show.dateTime} id={id}/>

      {/* Recommendations */}
      <p className='text-lg font-medium mt-20'>You May Also Like</p>
      <div className='flex flex-wrap max-sm:justify-center gap-8 mt-6'>
        {dummyShowsData.slice(0,3).map((movie,index)=>(
          <MovieCard key={index} movie={movie}/>
        ))}
      </div>

      <div className='flex justify-center mt-20'>
        <button
          onClick={()=>{navigate('/movies'); scrollTo(0,0)}}
          className='px-10 py-3 text-sm bg-primary hover:bg-primary-dull
          transition rounded-md font-medium cursor-pointer'
        >
          Show More
        </button>
      </div>

      {/* Trailer Modal */}
      {trailerUrl && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50">
          <div className="bg-gray-900 rounded-lg max-w-3xl w-full p-4 relative">
            <button
              onClick={() => setTrailerUrl(null)}
              className="absolute top-2 right-2 text-white text-lg font-bold"
            >
              X
            </button>
            <iframe
              width="100%"
              height="400"
              src={trailerUrl.replace("watch?v=", "embed/")}
              title="Movie Trailer"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      )}
    </div>
  )
}

export default MovieDetails