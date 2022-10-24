import React from "react";
import * as gameService from "../../services/gameService";
import { useEffect, useState, lazy,Suspense } from "react";

// import GameCard from "./GameCard";

const GameCard = lazy(() => import("./GameCard"));

export default function GameCatalog({ navChangeHandler }) {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    gameService.getAll().then((result) => {
      setGames(result);
      setLoading(false);
    });
  }, []);

  return (
    <section id="catalog-page">
      <h1>All Games</h1>
      <Suspense fallback={<p>Loading...</p>}>

      {loading ? (
        <p>LOADING...</p>
      ) : games.length > 0 ? (
        games.map((x) => (
          <GameCard key={x._id} game={x} navChangeHandler={navChangeHandler} />
        ))
      ) : (
        <h3 className="no-articles">No articles yet</h3>
      )}
            </Suspense>

    </section>
  );
}
