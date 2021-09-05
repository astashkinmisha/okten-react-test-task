import FilmList from "../film-list/FilmList";
import {getPageById} from "../../services/getPageById";
import './MoviesGenres.css'

export default function MoviesGenres ({genres, dispatch}){
    console.log(genres);

    return (
        <div className={'wrapper'}>
            {
             genres.map(value =>
                 <div className={'genres-box'}>
                <h3 onClick={() => dispatch(getPageById(value.id))}>{value.name}</h3>

                 </div>)
            }

        </div>
    );
}
