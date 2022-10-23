import { useEffect, useState } from "react";
import GameCard from "./GameCard";
import * as gameService from '../../services/gameService';
export default function GameCatalog({
  navChangeHandler
}) {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    gameService.getAll()
    .then(result => {
      setGames(result);
      setLoading(false);
    });
  }, []);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      {loading ? (
        <p>Loading...</p>
      ) : games.length > 0 ? (
          games.map((x) => <GameCard key={x._id} game={x} navChangeHandler={navChangeHandler}/>)
      ) : (
        <h3 className="no-articles">No articles yet</h3>
      )}
    </section>
  );
}
