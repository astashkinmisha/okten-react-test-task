// import logo from './logo.svg';
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import FilmItem from "./components/film-item/FilmItem";
import PreFilmList from "./components/film-list/PreFilmList";
import PreItemRender from "./components/film-item/PreItemRender";

function App() {

  return (
    <Router>
      <div>
        <Link to={'/'}/>
      </div>
        <Switch>
            <Route path={`/:id`} component={FilmItem} />
            <Route path={'/'} component={HomePage} />

      </Switch>
<PreItemRender/>
    </Router>
  );
}

export default App;
