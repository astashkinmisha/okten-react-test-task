import FilmList from "../film-list/FilmList";
import {getPageById} from "../../services/getPageById";
import './MoviesGenres.css'
import Header from "../../pages/Header/Header";
import {setGenresId} from "../../redux/actionCreators/setGenresId";
import {Badge} from "reactstrap";

export default function MoviesGenres ({genres, dispatch}){

    return (
        <div className={'genres-wrapper'}>

            {
             genres.map(value =>
                 <div className={'genres-box'}>
                     <h5 onClick={() => {dispatch(getPageById(value.id))
                dispatch(setGenresId(value.id))}}>{value.name}</h5>

                 </div>)
            }

        </div>
    );
}
