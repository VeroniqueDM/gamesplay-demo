import "./App.css";
import { useState } from "react";
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
  const navChangeHandler = (path) => {
    setPage(path);
  };

  const router = (path) => {
    let pathNames = path.split("/");
    console.log(pathNames);
    let rootPath = pathNames[1];
    let argument = pathNames[2];

    const routes = {
      "home": <WelcomeWorld></WelcomeWorld>,
      "games": <GameCatalog navChangeHandler={navChangeHandler} />,
      "create-game": <CreateGame />,
      "login": <Login />,
      "edit-game": <EditGame />,
      "register": <Register />,
      "details": <GameDetails id={argument} />,
    };
    return routes[rootPath];
  };

  return (
    <div id="box">
      <Header navChangeHandler={navChangeHandler} />
      <main id="main-content">
        {router(page) || <ErrorPage>Some additional info </ErrorPage>}
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
