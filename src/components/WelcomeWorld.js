import * as gameService from '../services/gameService';
import { useEffect, useState } from "react";
import LatestGameCard from './LatestGameCard';

export default function WelcomeWorld({
  // navChangeHandler,
}) {

  const [games, setGames] = useState([]);
  useEffect(() => {
    gameService.getLatest().then(result => {
      setGames(result);
    });
  }, []);

  return (
    <section id="welcome-world">
      <div className="welcome-message">
        <h2>ALL new games are</h2>
        <h3>Only in GamesPlay</h3>
      </div>
      <img src="/images/four_slider_img01.png" alt="hero" />

      <div id="home-page">
        <h1>Latest Games</h1>
        {
          games.length>0 
          ? games.map(game => <LatestGameCard key={game._id} game={game}
            //  navChangeHandler={navChangeHandler}
             ></LatestGameCard>)
          :  <p className="no-articles">No games yet</p>

        }

     

      
      </div>
    </section>
  );
}
