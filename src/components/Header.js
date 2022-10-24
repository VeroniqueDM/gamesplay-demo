import { Link, NavLink } from "react-router-dom";
import './Header.css';
export default function Header(
  {
    // navChangeHandler,
  }
) {
  // const onHeaderClick = (e) => {
  //   e.preventDefault();
  //   if (e.target.tagName == "A") {
  //     let url = new URL(e.target.href);
  //     navChangeHandler(url.pathname);
  //     //   console.log(url.pathname);
  //     // console.log(e.target.href);
  //   }
  // };

  let activeLinkStyles = {
    backgroundColor: 'red',
  };
  return (
    // <header onClick={onHeaderClick}>
    <header>
      <h1>
        <NavLink activeClassName="active-navigation-link" className="home" to="/">
          GamesPlay
        </NavLink>
      </h1>
      <nav>
        <NavLink activeStyle={activeLinkStyles} to="/games">
          All games
        </NavLink>
        <div id="user">
          <NavLink activeStyle={activeLinkStyles} to="/create-game">
            Create Game
          </NavLink>
          <NavLink activeStyle={activeLinkStyles} to="/logout">
            Logout
          </NavLink>
        </div>
        <div id="/guest">
          <NavLink activeStyle={activeLinkStyles} to="/login">
            Login
          </NavLink>
          <NavLink activeStyle={activeLinkStyles} to="/register">
            Register
          </NavLink>
        </div>
      </nav>
    </header>
  );
}
