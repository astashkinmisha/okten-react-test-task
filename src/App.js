import logo from './logo.svg';
import './App.css';
import {useDispatch, useSelector} from "react-redux";
import HomePage from "./pages/HomePage";
import {useEffect} from "react";
import {getMovies} from "./services/movies.api.service";
import {GET_MOVIES} from "./redux/actionTypes";
import {setMovies} from "./redux/actionCreators/getMoviesAction";
import {getGenres} from "./services/genres.movie.service";
import {setGenres} from "./redux/actionCreators/getGenresAction";


function App() {
  let dispatch = useDispatch();
  useEffect(() => {
    getMovies().then(value => dispatch(setMovies({...value.data})))

  },[dispatch])

  useEffect(() => {
    getGenres().then(value => dispatch(setGenres({...value.data})))
  }, [dispatch])
  let state = useSelector(state => state);
  let {movies, genres} = state

  console.log(movies, genres);

  return (
    <div>
      {
        movies.map(value => <HomePage dispatch={dispatch} movies={value} genres={genres}  /> )
      }


    </div>
  );
}

export default App;
