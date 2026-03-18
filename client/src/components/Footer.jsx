import React from 'react'
import CinebookLogo from './CinebookLogo'

const Footer = () => {
  return (
    <footer className="px-6 md:px-16 lg:px-36 mt-40 w-full text-gray-300">
            <div className="flex flex-col md:flex-row justify-between w-full gap-10 border-b border-gray-500 pb-14">
                <div className="md:max-w-96">
                    <CinebookLogo className="text-red-600" />
                    <p className="mt-6 text-sm">
                        Explore the latest movies, watch trailers, and stay updated with trending entertainment. Our platform makes discovering your next favorite movie simple, fast, and enjoyable.
                    </p>
                    
                </div>
                <div className="flex-1 flex items-start md:justify-end gap-20 md:gap-40">
                    <div>
                        <h2 className="font-semibold mb-5">CineBook</h2>
                        <ul className="text-sm space-y-2">
                            <li><a href="/">Home</a></li>
                            <li><a href="/movies">Movies</a></li>
                            <li><a href="#">Theaters</a></li>
                            <li><a href="#">Releases</a></li>
                            <li><a href="/favorite">Favourites</a></li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="font-semibold mb-5">Get in touch</h2>
                        <div className="text-sm space-y-2">
                            <p>cinebook@cinama.com</p>
                        </div>
                    </div>
                </div>
            </div>
            <p className="pt-4 text-center text-sm pb-5">
                Copyright {new Date().getFullYear()} © CineBook. All Right Reserved.
            </p>
        </footer>
  )
}

export default Footer