import {Link} from "react-router-dom";
import {useHistory} from "react-router";
import PreItemRender from "./PreItemRender";

export default function FilmItem ({results, dispatch}) {

  console.log();

  const imgBuilder = (posterPath, size) => `https://image.tmdb.org/t/p/w${size}${posterPath}`

    return (
        //
        // <div>
        //   <h2>{original_title}</h2>
        //   <h3>{release_date}</h3>
        //   <span>{value.overview}</span>
        //   {<img src={`https://image.tmdb.org/t/p/w200${value.poster_path}`} alt={`${value.original_title} poster`}/>}
        //   <span>Vote average:{value.vote_average}; Total votes:{value.vote_count}</span>
        // </div>

        {}

    );
}
