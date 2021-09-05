import {getMoviesPage} from "../../services/getPage.requesl";
import './FilmList.css'
import Footer from "../../pages/Footer/Footer";
import {Link, Route} from "react-router-dom";
import FilmItem from "../film-item/FilmItem";

export default function FilmList ({results}){
 const {original_title, release_date, vote_average, id, poster_path} = results;
    return (
        <div className={'wrapper'} >
                <Link to={{pathname: `/${id}`, state: [{results}]}}>


                <div className={'film-box'}>
                    <p>{id}</p>
                    <h2>Title: {original_title}</h2>
                    {<img className={'film-box-image'} src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title} poster`}/>}
                    <h3>Date released: {release_date}</h3>
                    <span>Average votes: {vote_average}</span>
                </div>
                </Link>
            <Footer results={results}/>
            {/*<button onClick={() => (dispatch(getMoviesPage(page - 1)))}>previous page</button>*/}
            {/*<p>{page} of {total_pages}</p>*/}
            {/*<button onClick={() => (dispatch(getMoviesPage(page + 1)))}>next page</button>*/}

        </div>

    );
}
