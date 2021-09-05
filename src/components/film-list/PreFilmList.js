import FilmList from "./FilmList";

export default function PreFilmList ({dispatch, movies}){
    let {results, page,total_pages} = movies;
    return (
        <div>
            {
                results.map(value => <FilmList dispatch={dispatch} results={value}/>)
            }
        </div>
    );
}
