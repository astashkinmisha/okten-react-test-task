import './FilmList.css'
import {Link} from "react-router-dom";
import {RatingView} from "react-simple-star-rating";

export default function FilmList ({results}){
 const {original_title, release_date, vote_average, id, poster_path} = results;
    return (
            <div className={'list-wrapper'}>
                <div className={'film-box'}>
        <Link to={{pathname: `/${id}`, state: results}} className={'link-box'}>
                    <p>{id}</p>
                    <h2>Title: {original_title}</h2>
                    {<img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title} poster`} className={'img-main'}/>}
                    <h3>Date released: {release_date}</h3>
                    <RatingView ratingValue={vote_average} size={14} stars={10}/>
                    <p>Count: {vote_average}</p>
        </Link>
                </div>
            </div>
    );
}
