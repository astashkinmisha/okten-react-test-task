import {Link} from "react-router-dom";
import './film-item.css';

import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {Rating, RatingView} from "react-simple-star-rating";
import {setRating} from "../../redux/actionCreators/setStarToFilm";

export default function FilmItem ({results}) {

  let history = useHistory();
  let dispatch = useDispatch();
  const stars = useSelector(state => state.stars)
  const {location:{state:{id, original_title, release_date, overview, poster_path, vote_average, vote_count}}} = history;


  const imgBuilder = (posterPath, size) => `https://image.tmdb.org/t/p/w${size}${posterPath}`

    return (
        <div className={'film-item-box'}>
          <p>Film id: {id}</p>
          <h2>Name: {original_title}</h2>
          {<img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title} poster`}/>}
          <br/>
          <span><i><b>Overview:</b> {overview}</i></span>
            <div>
                <h3>Date released: {release_date}</h3>
                <Rating onClick={() => dispatch(setRating(vote_average))} ratingValue={stars} size={14} stars={10}/>
                <p><i>Total votes: {vote_count}</i></p>

            </div>
        </div>
    );
}
