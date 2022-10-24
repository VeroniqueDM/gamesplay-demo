import { Link } from "react-router-dom";

export default function LatestGameCard({
  game,
  // navChangeHandler
}) {
  // const onDetailsCLick = (e) => {
  //     e.preventDefault();
  //     navChangeHandler(`/details/${game._id}`);
  //   };
  return (
    <div className="game">
      <div className="image-wrap">
        <img src={game.imageUrl} />
      </div>
      <h3>{game.title}</h3>
      <div className="rating">
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
        <span>☆</span>
      </div>
      <div className="data-buttons">
        <Link
          to={`/games/${game._id}`}
          key={game._id}
          className="btn details-btn"
          //  onClick={onDetailsCLick}
        >
          Details
        </Link>
      </div>
    </div>
  );
}
