import './index.css'

import Seat from '../Seat'

import { useContext, useEffect, useState } from 'react'

import { BookingNeeds } from '../context/bookingNeeds'

import { v4 as uuidv4 } from 'uuid';

const Booking = () => {
    // const[movieName ,setMovieName] = useState("")
    const { seat_number, setSeatNumber, location, theatername, time, movieName } = useContext(BookingNeeds)

    const [seatState, setSeatState] = useState([])
    // const [dataApi, setdataApi] = useState([])
    const [bookedseat, setBookedseat] = useState([])

    const onSeatClick = (seatnumer) => {
        // setSeatNumber(prev => [...prev, seatnumer])
        if (bookedseat.includes(seatnumer) || (seatState.includes(seatnumer))) {
            alert("This seat is already Selected")
        } else {
            setSeatState(prev => [...prev, seatnumer])
        }


    }

    const locallocation = localStorage.getItem("location")
    const localMovieName = localStorage.getItem("MovieName")
    const localtime = localStorage.getItem("time")
    const localTheatername = localStorage.getItem("theatername")

    useEffect(() => {

        const bodypayload = { location: locallocation, theater_name: localTheatername, movie_name: localMovieName, start_time: localtime }

        const getapicall = async () => {
            try {
                const data = await fetch('https://theaterbookingserver-3.onrender.com/booked/', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(bodypayload)
                })
                const result = await data.json()
                // setdataApi(result)
                console.log(result, 'result')
                console.log(result[1], "first result")

                if (result.length > 0) {
                    for (let i of result) {
                        console.log(i, " from loop")
                        setBookedseat(prev => [...prev, ...JSON.parse(i.seat_No)])
                    }
                }


            } catch (e) {
                console.log(e.message, 'errorrr ayi get api call')
            }


        }

        getapicall()


    }, [locallocation, localTheatername, localMovieName, localtime])

    console.log(bookedseat, "booked seat from api")



    const booknowClick = () => {
        setSeatNumber(prev => [...prev, ...seatState])
        console.log([...seatState], "hello")

        const seatjson = JSON.stringify(seatState)

        const arrayforbody = {
            user_id: uuidv4(),
            start_time: time,
            seat_No: seatjson,
            status: "Booked",
            location: location,
            theater_name: theatername,
            movie_name: movieName
        }
        console.log(arrayforbody)

        const apiCAll = async () => {

            try {
                const data = await fetch('https://theaterbookingserver-3.onrender.com/seatbooking/', {
                    method: "POST",
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify(arrayforbody)
                })
                const result = await data.json()
                await console.log(result)
            } catch (e) {
                console.log(e.message)
            }
        }
        apiCAll()

        setSeatState([])

    }



    return (
        <div className='bookingBackGround'>
            {seatState.length > 0 ?
                <div className='selectedseatAndButton'>
                    <div className='selectedSeatNumber'>
                        <p className='selectedSeatpara'>Selected Seats </p>
                        {seatState.map(each =>
                            <div className='seatnumber'>{each}</div>
                        )}
                    </div>
                    <button className='booknowbutton' onClick={() => booknowClick()}>Book Now</button>
                </div> : ""}
            <div className='bookingMainConatiner'>
                <h3 className='selectseatHeading'>Select Your Seat</h3>
                <div className='seatContainer'>
                    <Seat onSeatClick={onSeatClick} seat_number={seat_number} seatState={seatState} bookedseat={bookedseat} />
                </div>
                <div className='screenAndstatusConatiner'>
                    <div className='statusContainer'>
                        <div className='statusboxgreen'></div>
                        <p>BOOKED</p>
                        <div className='statusboxorange'></div>
                        <p>SELECTED</p>
                        <div className='statusboxred'></div>
                        <p>AVALAIBLE</p>
                    </div>
                    <p className='screenpara'>Screen view Here</p>
                    <div className='screen'></div>
                </div>
            </div>
        </div>
    )
}

export default Booking