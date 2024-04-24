import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameCard from "../../GameCard";
import gameData from "../../../json/games.json";
import UserInformation from '../../UserInformation'
import "../../../styles/games.css";

const Games = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 810,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
    const user = UserInformation()
  return (
    <>
    <section  class=" sectionWelcome py-24 px-4 lg:px-16"> 
      <div class="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
        <h1 class=" text-white text-center text-5xl pb-12">
          Welcome
        </h1>
        <h2 className="text-white text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2">{user ? user.firstname : 'Loading...'}!
        </h2>
      </div>
    </section>

    {/* ---------Sub weclome--------- */}
    <section className='subIntro '>
      <div className=" py-20 ml-10">
        <div className="max-w-screen-lg mx-auto flex justify-between items-center">
          <div className="max-w-xl">
            <h2 className="font-black text-sky-950 text-3xl mb-4">Ready for some fun?.</h2>
            <p className='text-sky-950 text-xl '>Here you can explore the games on offer! Just tap game you like and off you go!</p>
          </div>  
        </div>
      </div>
    </section>
      
      {/* ---------Game card slider--------- */}
    <Slider {...settings}>
      {gameData.map((game, index) => (
        <div key={index} className="px-2">
          <div style={{ width: "85vw", height: "auto" }}>
            <GameCard
              image={game.image}
              name={game.name}
              description={game.description}
              link={game.link}
            />
          </div>
        </div>
      ))}
    </Slider>
  </>
  );
};

export default Games;