import { useState } from "react";
import { Route, Switch } from "react-router-dom";

import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import EditGame from "./components/EditGame";
import GameDetails from "./components/GameDetails";
import CreateGame from "./components/CreateGame";
import GameCatalog from "./components/GameCatalog/GameCatalog";
// import ErrorPage from "./components/ErrorPage";

function App() {
  // const [page, setPage] = useState("/home");
  // const navChangeHandler = (path) => {
  //   setPage(path);
  // };

  // const router = (path) => {
  //   let pathNames = path.split("/");
  //   console.log(pathNames);
  //   let rootPath = pathNames[1];
  //   let argument = pathNames[2];

  //   const routes = {
  //     home: <WelcomeWorld navChangeHandler={navChangeHandler}></WelcomeWorld>,
  //     games: <GameCatalog navChangeHandler={navChangeHandler} />,
  //     "create-game": <CreateGame />,
  //     login: <Login />,
  //     "edit-game": <EditGame />,
  //     register: <Register />,
  //     details: <GameDetails id={argument} />,
  //   };
  //   return routes[rootPath];
  // };

  return (
    <div id="box">
      {/* <Header navChangeHandler={navChangeHandler} /> */}
      <Header  />
      <main id="main-content">
        <Switch>
          <Route path="/" exact component={WelcomeWorld} />

          <Route path="/games" exact component={GameCatalog} />
          <Route path="/games/:gameId" component={GameDetails} />

          <Route path="/create-game" component={CreateGame} />
          <Route path="/login" component={Login} />
          <Route path="/edit-game" component={EditGame} />
          <Route path="/register" component={Register} />
        </Switch>

        {/* {router(page) || <ErrorPage>Some additional info </ErrorPage>}
        
        <WelcomeWorld />
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
