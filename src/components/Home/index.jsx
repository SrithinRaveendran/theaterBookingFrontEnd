import './index.css'

//swiper 
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

//


//
import { useContext, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { BookingNeeds } from '../context/bookingNeeds'
//


import Location from '../location';



const Home = () => {
    const Navigate = useNavigate()

    const { setlocation, location } = useContext(BookingNeeds)

    const onplaceClick = (location) => {
        console.log(location)
        setlocation(location)
        Navigate("/movie")
    }
    useEffect(() => {
        localStorage.setItem("location", location)
    }, [location])

    return (
        <div className="homebg">

            <div className='contentpart'>
                <h2 className='locationHeading'>Location</h2>
                <div className='locationcontainer'>
                    <Location locationSetUp={onplaceClick} />

                </div>

                <div className='recommedMovieHeadingContainer'>
                    <h2 className='locationHeading'>Watch Your Favourite Movies</h2>
                </div>

                <div className='swiperContainer'>
                    <Swiper
                        spaceBetween={35}
                        slidesPerView={3}
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
                            alt='JOHNWICK' /></SwiperSlide>
                        <SwiperSlide><img className='swiperimage' src="/fightclub.jpeg"  //
                            alt='fightclub' /></SwiperSlide>
                        <SwiperSlide><img className='swiperimage' src="/The_Wolf_of_Wall_Street.jpeg"
                            alt='The_Wolf_of_Wall_Street' /></SwiperSlide>
                        <SwiperSlide><img className='swiperimage' src="/Dil_se_poster.jpeg"
                            alt='Dil_se_poster' /></SwiperSlide>
                        <SwiperSlide><img className='swiperimage' src="/Anbea_shivam.jpeg"
                            alt='Anbea_shivam' /></SwiperSlide>

                    </Swiper>
                </div>
                <div className='recommedMovieHeadingContainer'>
                    <h2 className='locationHeading'>Must Attend Events</h2>
                </div>
                <div className='mustAttendContainer'>



                    <Swiper
                        spaceBetween={0}
                        slidesPerView={5}
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
                            <div className='mustAttendEvent'>
                                <a  href='https://www.youtube.com/watch?v=3URtTIdnXIk'>
                                <img className='mustAttendImage' src="/cat.jpeg" alt="cat" />
                                <p className='mustAttendPara'>Watch Funny cat video</p>
                                </a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='mustAttendEvent'>
                                <a href='https://www.youtube.com/watch?v=iu0mlEYf8cc'>
                                <img className='mustAttendImage' src="/Sharukh_Khan.jpeg" alt="90s_sarukh_khan" />
                                <p className='mustAttendPara'>Watch Sharukh's Birthday </p>
                                </a>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='mustAttendEvent'>
                                <a href='https://www.youtube.com/watch?v=Hvx0QwqbyeM'>
                                <img className='mustAttendImage' src="/PUSHPA_ALLU_ARJUN.jpeg" alt="90s_sarukh_khan" />
                                <p className='mustAttendPara'>Watch Allu Arjun's Dance </p>
                                </a>
                            </div>
                        </SwiperSlide>


                        <SwiperSlide>
                            <div className='mustAttendEvent'>
                                <a href='https://www.youtube.com/watch?v=Z_LmiQlT9oE'>
                                <img className='mustAttendImage' src="/Lewis Hamilton.jpeg" alt="Lewis Hamilton" />
                                <p className='mustAttendPara'>Watch Lewis Hamilton Race</p>
                                </a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='mustAttendEvent'>
                                  <a href='https://www.youtube.com/watch?v=-AdteE-KuIg'>
                                <img className='mustAttendImage' src="/dog.jpeg" alt="dog" />
                                <p className='mustAttendPara'>Watch Funny Dog</p>
                                </a>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='mustAttendEvent'>
                                <a href='https://www.youtube.com/watch?v=YtvqnvHjD-c'>
                                <img className='mustAttendImage' src="/350classic.jpeg" alt="350 classic" />
                                <p className='mustAttendPara'>Watch New Bullet 350 classic </p>
                                </a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='mustAttendEvent'>
                                <a href='https://www.youtube.com/watch?v=lrl1t-vLxU4'>
                                <img className='mustAttendImage' src="/Munnar.jpeg" alt="kerala" />
                                <p className='mustAttendPara'>Watch Kerala Tourism Video</p>
                                </a>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='mustAttendEvent'>
                                <a href='https://www.youtube.com/watch?v=ScDkllIrb6k'>
                                <img className='mustAttendImage' src="/mammootty.jpeg" alt="mammooty" />
                                <p className='mustAttendPara'>Watch Mammooty in 90"s</p>
                                </a>

                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className='mustAttendEvent'>
                                <a href='https://www.youtube.com/watch?v=86gzL8Dd9Gg'>
                                <img className='mustAttendImage' src="/tomandjerry.jpeg" alt="tomandjerry" />
                                <p className='mustAttendPara'>Watch Tom and Jerry </p>
                                </a>
                            </div>
                        </SwiperSlide>
                    </Swiper>
                </div>
                <div className='endtitleContainer'>
                    <h3 className='endTitle'>Enjoy <span className='endspanTitle'>Bookit.COM</span></h3>
                    
                </div>
            </div>
        </div>
    )
}


export default Home