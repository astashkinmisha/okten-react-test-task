import {getMovies} from "../services/movies.api.service";
import {useEffect} from "react";
import FilmItem from "../components/FilmItem";
import {useHistory} from "react-router";

export default function HomePage ({dispatch, movies, genres}) {
const {results} = movies;
useHistory();

    let onFilmClick = (film) => {
        history.push(`/movie/${film.id}`)
    };
    return (
        <div>

            {
                results.map(value => <FilmItem key={value.id} results={value} genres={genres}/>)
            }

            <FilmList onFilmClick={onFilmClick}/>
        </div>
    );


}
