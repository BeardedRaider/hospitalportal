import GameCard from "../../GameCard";
import gameData from "../../../json/games.json";

const Games = () => {
  return (
    <div className="flex flex-row">
    {gameData.map((game, index) => (
    <GameCard
    key={index}
    image={game.image}
    // url={game.url}
    name={game.name}
    description={game.description}
      
    />
    ))}
    </div>
  );
};

export default Games;