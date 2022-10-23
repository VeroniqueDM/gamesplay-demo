import "./App.css";
import { useState, createElement } from "react";
import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import EditGame from "./components/EditGame";
import GameDetails from "./components/GameDetails";
import CreateGame from "./components/CreateGame";
import GameCatalog from "./components/GameCatalog/GameCatalog";
import ErrorPage from "./components/ErrorPage";

function App() {
  const [page, setPage] = useState("/home");
  const routes = {
    "/home": <WelcomeWorld></WelcomeWorld>,
    "/games": <GameCatalog/>,
    "/create-game": <CreateGame/>,
    '/login': <Login/>,
    '/edit-game': <EditGame/>,
    '/register': <Register/>,
    '/game-details': <GameDetails/>

  };

  const navChangeHandler = (path) => {
    setPage(path);
    };
  return (
    <div id="box">
      <Header navChangeHandler={navChangeHandler} />
      <main id="main-content">
        { routes[page] || <ErrorPage>Some additional info </ErrorPage>}
        {/* <WelcomeWorld />
        <Login />
        <Register />
        <CreateGame />
        <EditGame />
        <GameDetails />
        <GameCatalog /> */}
      </main> 
    </div>
  );
}

export default App;
