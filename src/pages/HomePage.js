import {getMovies} from "../services/movies.api.service";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getGenres} from "../services/genres.movie.service";
import MoviesGenres from "../components/genres/MoviesGenres";
import PreFilmList from "../components/film-list/PreFilmList";

export default function HomePage () {

    let dispatch = useDispatch();
    let state = useSelector(state => state);

    useEffect(() => {
        dispatch(getMovies())
        dispatch(getGenres())
    },[dispatch])

    let {movies} = state;
    let {genres} = state;

    return (
        <div>
            {genres.map(value => <MoviesGenres key={value.id} genres={value.genres} dispatch={dispatch}/> )}
            {movies.map(value => <PreFilmList key={value.id} dispatch={dispatch} movies={value}/>)}

        </div>
    );


}
