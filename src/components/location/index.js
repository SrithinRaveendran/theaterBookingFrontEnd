import './index.css'

const locationDetails = [
    {
        location: "Mumbai",
        img_url: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/mumbai.png"
    },
    {
        location: "Bengaluru",
        img_url: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/bang.png"
    },
    {
        location: "Hyderabhad",
        img_url: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/hyd.png"
    },
    {
        location: "Ahmedabad",
        img_url: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/ahd.png"
    },
    {
        location: "Chennai",
        img_url: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/chen.png"
    },
    {
        location: "Pune",
        img_url: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/pune.png"
    },
    {
        location: "Kolkata",
        img_url: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/kolk.png"
    },
    {
        location: "Kochi",
        img_url: "https://assets-in.bmscdn.com/m6/images/common-modules/regions/koch.png"
    }
];


const Location = (props) => {
    const {locationSetUp} = props

    const onclicklocationset=(loc)=>{
         locationSetUp(loc)
    }
    return (
        <>
        {locationDetails.map(each=>(
            <div className='imagecontainerlocation' onClick={()=>onclicklocationset(each.location)}>
                <img className='imagelocation' src={each.img_url} alt={each.location}/>
                 <p className='placenamelocation'>{each.location}</p>
            </div>
        ))}
        </>
    )
}

export default Location