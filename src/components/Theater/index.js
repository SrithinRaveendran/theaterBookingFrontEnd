import './index.css'
import { BookingNeeds } from '../context/bookingNeeds'

// import { useState, useEffect } from 'react'
import { useContext, useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'



const Theater = () => {
    const [details, setdetails] = useState([])

    const Navigate = useNavigate()

    const { location, movieName,time,settime,settheatername} = useContext(BookingNeeds) // this code be moved to local storage
    useEffect(() => {
        
        const locallocation = localStorage.getItem("location")
        const localMovieName = localStorage.getItem("MovieName")
        
        const apicall = async () => {
            const body = { location : locallocation, movieName :localMovieName }  //{location : location}


            try {
                const data = await fetch("https://theaterbookingserver-3.onrender.com/theater/", {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(body)

                })
                const result = await data.json()
                console.log(result)

                setdetails(result)
            } catch (e) {
                console.log(e.message, 'error vannuu')
            }

        }

        apicall()
    }, [location, movieName])

    const timetocontext = (time,theatername)=>{
        settime(time)
        console.log(time)
        console.log(theatername)
        settheatername(theatername)
        Navigate("/booking")
        console.log(time)

        localStorage.setItem("time",time.toString())
        localStorage.setItem("theatername",theatername )
    }

    // useEffect(()=>{
    //     localStorage.setItem("time",time.toString())
    //     localStorage.setItem("theatername",theatername )
    // })

     console.log(time)
    // console.log(details[0].length>0 ? details[0].movie_name : "not yet", "from thaeter page")

    return (
        <div className='theaterBackGround'>
            <div className='contentpartt'>
                {details.map(each =>
                    <div className='theaterDetailsContainer'>
                        <img className='apimovieimg' src={each.movie_img} alt={each.movie_name} />
                        <div className='theaterNamecontainer'>
                            <h3 className='theatername'>{each.theater_name}</h3>
                            <h4 className='movienames'>{each.movie_name}</h4>
                            <h5 className='time'>Time</h5>
                            <div className='timescontainer'>
                                {JSON.parse(each.time).map(time =>

                                    <button className='timebutton' onClick={()=>timetocontext(time,each.theater_name)}   >{time}</button>)}
                                {/* {each.time } */}
                            </div>
                        </div>
                    </div>
                )}
                {/* <div className='theaterDetailsContainer'>
                    <img src={details[0].movie_img} alt={details[0].movie_name
                        } />
                </div> */}


            </div>

        </div>
    )
}

export default Theater