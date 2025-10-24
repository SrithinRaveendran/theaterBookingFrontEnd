import './index.css'

//swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

//
import { useContext,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import {BookingNeeds} from '../context/bookingNeeds'
//


import Location  from '../location';



const Home = () => {
    const Navigate = useNavigate()

    const {setlocation,location} = useContext(BookingNeeds)
    
    const onplaceClick=(location)=>{
        console.log(location)
        setlocation(location)
        Navigate("/movie")
    }
    useEffect(()=>{
        localStorage.setItem("location",location)
    },[location])

    return (
        <div className="homebg">
            
            <div className='contentpart'>
                <h2 className='locationHeading'>Location</h2>
                <div className='locationcontainer'>
                    <Location locationSetUp={onplaceClick}/>
                    
                </div>

                <div className='recommedMovieHeadingContainer'>
                    <h2 className='locationHeading'>Watch Your Favourite Movies</h2>
                </div>

                <div className='swiperContainer'>
                    <Swiper
                        spaceBetween={50}
                        slidesPerView={1}
                        onSlideChange={() => console.log('slide change')}
                        onSwiper={(swiper) => console.log(swiper)}
                        autoplay={{
                            delay: 1500,
                            disableOnInteraction: false,
                        }}
                        speed={1000}
                        loop={true}
                        modules={[Autoplay]}
                    >
                        <SwiperSlide>
                            <img className='swiperimage' src="/PeakyBlinders.jpeg"
                                alt='Kochi' />
                        </SwiperSlide>
                        <SwiperSlide> <img className='swiperimage' src="/JOHNWICK.jpeg"
                            alt='Kochi' /></SwiperSlide>
                        <SwiperSlide><img className='swiperimage' src="/fightclub.jpeg"  //
                            alt='Kochi' /></SwiperSlide>
                        <SwiperSlide><img className='swiperimage' src="/The_Wolf_of_Wall_Street.jpeg"  
                            alt='Kochi' /></SwiperSlide>

                    </Swiper>
                </div>
                <div className='recommedMovieHeadingContainer'>
                    <h2 className='locationHeading'>Must Attend Events</h2>
                </div>
                <div className='mustAttendContainer'>
                    <div className='mustAttendEvent'>
                        <img className='mustAttendImage' src="/gang_of_mangalassery.jpeg" alt="gang_of_mangalassery" />
                        <p className='mustAttendPara'>Watch Neelakandan's Act in Public</p>
                    </div>

                    <div className='mustAttendEvent'>
                        <img className='mustAttendImage' src="/Sharukh_Khan.jpeg" alt="90s_sarukh_khan" />
                        <p className='mustAttendPara'>Watch Sharukh's Birthday </p>

                    </div>
                    <div className='mustAttendEvent'>
                        <img className='mustAttendImage' src="/PUSHPA_ALLU_ARJUN.jpeg" alt="90s_sarukh_khan" />
                        <p className='mustAttendPara'>Watch Allu Arjun's Dance </p>
                    </div>
                </div>
                <div className='endtitleContainer'>
                        <h3 className='endTitle'>Enjoy <span className='endspanTitle'>Bookit.COM</span></h3>
                </div>
            </div>
        </div>
    )
}


export default Home