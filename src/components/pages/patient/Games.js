import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import GameCard from "../../GameCard";
import gameData from "../../../json/games.json";

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

  return (
    <Slider {...settings}>
      {gameData.map((game, index) => (
        <div key={index} className="px-2">
          <div style={{ width: "85vw", height: "auto" }}>
            <GameCard
              image={game.image}
              name={game.name}
              description={game.description}
            />
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Games;