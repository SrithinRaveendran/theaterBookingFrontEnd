import './index.css'

const Seat = (props)=>{
    
const {onSeatClick,seatState,bookedseat} = props

const onSeatsetup = (seat)=>{
    onSeatClick(seat)
    console.log(seat)
}

    return( 
        <>
        {Array.from({length : 104}).map((_,index)=>{
            
            const selected = seatState.includes(index)
            const styled  = selected ? "seat2" : "seat"
            const booked  = bookedseat.includes(index)

            const style = booked? "seatbooked" : styled
            return(
            
            
            <div className={style} onClick={()=>onSeatsetup(index)}>{index}</div>)
        })}
       
        </>
    )
}

export default Seat