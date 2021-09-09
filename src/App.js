// import logo from './logo.svg';
import HomePage from "./pages/HomePage";
import {BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import FilmItem from "./components/film-item/FilmItem";
import Header from "./pages/Header/Header";
import './App.css'

function App() {

  return (
    <Router>
        <Header>
      <div className={'main-wrapper'}>
          <Link to={'/'}/>
      </div>
        <Switch>
            <Route path={`/:id`} component={FilmItem} />
            <Route path={'/'} component={HomePage} />
      </Switch>
        </Header>
    </Router>
  );
}

export default App;
