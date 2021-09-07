import {Link} from "react-router-dom";

import {useHistory} from "react-router";
import {useDispatch, useSelector} from "react-redux";
import {Rating, RatingView} from "react-simple-star-rating";
import {useState} from "react";
import {setRating} from "../../redux/actionCreators/setStarToFilm";

export default function FilmItem ({results}) {

  let history = useHistory();
  let dispatch = useDispatch();
  const stars = useSelector(state => state.stars)
    console.log( stars );
    // console.log( history.location.state );
  const {location:{state:{id, original_title, release_date, overview, poster_path, vote_average, vote_count}}} = history;





  const imgBuilder = (posterPath, size) => `https://image.tmdb.org/t/p/w${size}${posterPath}`

    return (
        <div>
          <p>Film id: {id}</p>
          <h2>Title: {original_title}</h2>
          <h3>Date relesed: {release_date}</h3>
          <span>Overview: {overview}</span>
          {<img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title} poster`}/>}
          <Rating onClick={() => dispatch(setRating(vote_average))} ratingValue={stars} size={14} stars={10}/>
        </div>
    );
}
