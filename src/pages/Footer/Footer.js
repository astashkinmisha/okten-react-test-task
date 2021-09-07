import {getMoviesPage} from "../../services/getPage.requesl";
import './Footer.css'
import {useSelector} from "react-redux";

export default function Footer ({movies, dispatch}){

    const genresId = useSelector(state => state.genresId);

    console.log( genresId );
    let {page, total_pages} = movies;
    console.log( movies );
    let handlePrevPage = () => {
        if (page > 1) {
        (dispatch(getMoviesPage(page - 1, genresId)))
        }
    };
    return (
        <div className={'wrapper'}>
        <div className={'footer-box'}>
            <button onClick={() => (dispatch(getMoviesPage(1, genresId)))}>first page</button>
            <button onClick={handlePrevPage}>previous page</button>
            <p>{page} of {total_pages}</p>
            <button onClick={() => (dispatch(getMoviesPage(page + 1, genresId)))}>next page</button>
            <button onClick={() => (dispatch(getMoviesPage(total_pages, genresId)))}>last page</button>
        </div>
        </div>
    );
}
