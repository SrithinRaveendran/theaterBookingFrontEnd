
import './index.css'

// later this should be dynamically done using backend by taking the details from theater owners
const movieDetails = [
    {
        movie: "Peaky Blinders",
        rating: "8.0",
        description: "Tommy Shelby, a dangerous man, leads the Peaky Blinders, a gang based in Birmingham. Soon, Chester Campbell, an inspector, decides to nab him and put an end to thecriminal activities.",
        image: '/PeakyBlinders.jpeg'
    },
    {
        movie: "Wolf Of The Wall Street",
        rating: "8.0",
        description: "Introduced to life in the fast lane through stockbroking, Jordan Belfort takes a hit after a Wall Street crash. He teams up with Donnie Azoff, cheating his way to the top as his relationships slide.",
        image: "/wolf_of_the_wall_street_poster.jpeg"
    }, {

        movie: "John Wick",
        rating: "8.0",
        description: "John Wick is an American media franchise created by Derek Kolstad. It centers on a neo-noir action thriller film series featuring the eponymous character portrayed by Keanu Reeves. Wick is a legendary hitman who is reluctantly drawn back into the criminal underworld after retiring.",
        image: "/John_Wick_(2014).jpeg"
    },
    {

        movie: "Fight Club",
        rating: "8.5",
        description: "Unhappy with his capitalistic lifestyle, a white-collared insomniac forms an underground fight club with Tyler, a careless soap salesman. Soon, their venture spirals down into something sinister.",
        image: "/fight_club_poster.jpeg"
    },
    {
        //Manichithrathazhu_poster
        movie: "Manichithrathazhu",
        rating: "8.5",
        description: "Nakulan and his family move into his supposedly haunted ancestral property. However, when his cousin starts behaving uncharacteristically, Nakulan enlists the help of his psychiatrist friend.",
        image: "/Manichithrathazhu_poster.jpeg"
    }, {
        //Anbea_shivam
        movie: "Anbea Shivam",
        rating: "8.5",
        description: "When Nalla and Aras get stranded at the airport, Aras tries to keep away from the man with a deformity. However, while forcefully accompanying each other to Chennai, they form an unexpected bond.",
        image: "/Anbea_shivam.jpeg"
    }, {
        //Dil_se_poster
        movie: "Dil Se",
        rating: "8.5",
        description: "Amar, a journalist, falls for a mysterious woman who does not reciprocate his feelings. However, when Amar later prepares to get married, the woman shows up at his doorstep asking for help.",
        image: "/Dil_se_poster.jpeg"
    }, {
        //Arjun_Reddy_poster
        movie: "Arjun Reddy",
        rating: "8.5",
        description: "Arjun Reddy Deshmukh is a young surgeon with functioning alcoholism and a furious temper. He spirals into self-destruction when he learns that his girlfriend is marrying another man.",
        image: "/Arjun_Reddy_poster.jpeg"
    }
]

const MovieList = (props) => {
    const {onclickMoviename} = props
    
    const onclickMovie = (name)=>{
        onclickMoviename(name)
        // console.log(name)
    }
    return (
        <>
            {movieDetails.map(each =>
                <div className='movieDetailsContainer' onClick={()=>onclickMovie(each.movie)}>
                    <img className='movieImage' src={each.image} alt={each.movie} />
                    <div className='detailsPart'>
                        <h2 className='movieName'>{each.movie}</h2>
                        <h3 className='rating'>Rating {each.rating}</h3>
                        <h4 className='descriptionHeading'>Description</h4>
                        <p className='description'>{each.description}</p>
                    </div>
                </div>
            )}
        </>
    )
}

export default MovieList