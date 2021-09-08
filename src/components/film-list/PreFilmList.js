import FilmList from "./FilmList";
import Footer from "../../pages/Footer/Footer";
import './pre-list-film.css'

export default function PreFilmList ({dispatch, movies}){
    let {results, page,total_pages} = movies;
    return (
        <div className={'pre-list-wrapper'}>
            {
                results.map(value => <FilmList dispatch={dispatch} results={value}/>)
            }
            <Footer movies={movies} dispatch={dispatch}/>
        </div>
    );
}
