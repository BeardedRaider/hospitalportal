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
  <section>
    
  </section>
    <section  class=" sectionWelcome py-24 px-4 lg:px-16"> 
            <div class="container mx-auto px-[12px] md:px-24 xl:px-12 max-w-[1300px] nanum2">
                <h1 class=" text-white text-center text-5xl pb-12">Welcome
                </h1>
                <h2 className="text-white text-3xl md:text-4xl leading-relaxed md:leading-snug mb-2">
                    {user ? user.firstname : 'Loading...'}!
                </h2>
            </div>
        </section>
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