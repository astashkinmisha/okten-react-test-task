import FilmItem from "./FilmItem";

export default function FilmList ({movies:{results}, onFilmClick}){
    console.log(results);
    return (
        <div>
                {
                    results.map(value => (
                    <div onClick={()=> onFilmClick(value)}
                         key={value.id}>
                        <FilmItem  {...results}/>
                    </div>
                        ))}
        </div>
    );
}
