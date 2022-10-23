import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import WelcomeWorld from "./components/WelcomeWorld";
import Login from "./components/Login";
import Register from "./components/Register";
import EditGame from "./components/EditGame";
import GameDetails from "./components/GameDetails";
import CreateGame from "./components/CreateGame";
import GameCatalog from "./components/GameCatalog";

function App() {
  return (
    <div id="box">
      <Header />
      <main id="main-content">
        <WelcomeWorld />
        <Login />
        <Register />
        <CreateGame />
        <EditGame />
        <GameDetails />
        <GameCatalog/>
      </main>
    </div>

  );
}

export default App;
