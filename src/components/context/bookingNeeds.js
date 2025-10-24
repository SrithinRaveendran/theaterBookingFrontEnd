import { createContext,useState } from "react";

const BookingNeeds = createContext()

export function BookingNeedProvider({children}){

    const [seat_number,setSeatNumber] = useState([])
    const [id,setid] = useState("")
    const [location,setlocation] = useState("")
    const[theatername,settheatername] = useState("")
    const [time,settime] = useState('')
    const[status,setstatus] = useState('')
    const[movieName ,setMovieName] = useState("")
    return (
        <BookingNeeds.Provider value ={{seat_number,setSeatNumber,id,setid,location,setlocation,theatername,settheatername,time,settime,status,setstatus,movieName,setMovieName}}>
        {children}
        </BookingNeeds.Provider>
    )

}

export {BookingNeeds}
