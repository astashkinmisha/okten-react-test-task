import {getMovies} from "../services/movies.api.service";
import {useEffect} from "react";
import FilmItem from "../components/FilmItem";
import {useHistory} from "react-router";
import FilmList from "../components/FilmList";

export default function HomePage ({dispatch, movies, genres}) {
const {results} = movies;
let history = useHistory();
    console.log(movies);

    let onFilmClick = (movies) => {
        history.push(`/movie/${movies.id}`)
    };
    return (
        <div>

            {
                results.map(value => <FilmItem key={value.id} results={value} genres={genres}/>)
            }

            <FilmList onFilmClick={onFilmClick} movies={movies}/>
        </div>
    );


}
