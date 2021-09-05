import {getMoviesPage} from "../../services/getPage.requesl";

export default function Footer ({results, dispatch}){
    let {page, total_pages} = results;
    return (
        <div>
            <button onClick={() => (dispatch(getMoviesPage(page - 1)))}>previous page</button>
            <p>{page} of {total_pages}</p>
            <button onClick={() => (dispatch(getMoviesPage(page + 1)))}>next page</button>
        </div>
    );
}
