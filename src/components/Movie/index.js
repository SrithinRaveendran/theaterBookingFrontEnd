import './index.css'
import { useContext,useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

import MovieList from '../MovieList'
import { BookingNeeds } from '../context/bookingNeeds';

const Movie = () => {
    const Navigate = useNavigate()
    const { setMovieName, movieName } = useContext(BookingNeeds)

    const onclickMoviename = (name) => {
        setMovieName(name)
        localStorage.setItem("MovieName",movieName)
          Navigate("/theater")
    }

  useEffect(()=>{
    localStorage.setItem("MovieName",movieName)
  },[movieName])
    console.log(movieName)

    return (
        <div className='movieBackGround'>
            <h2 className='selectMovieheading'>select your movie </h2>
            <div className='moviedetailslistcontainer'>
                <MovieList onclickMoviename={onclickMoviename} />
            </div>
            <div className='endtitlecontainerMovie'>
                <h3 className='endTitlemovie'>Enjoy <span className='endspanTitlemovie'>Bookit.COM</span></h3>
            </div>
        </div>
    )
}

export default Movie