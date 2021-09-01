export default function FilmItem ({results}){

    return (
        <div>
            {
                results.map(value => console.log(value.data))
            }
        </div>
    );
}

 // export default function FilmItem ({results, genres}) {
 // }
    // const {name} = genres;


//     const imgBuilder = (posterPath, size) => `https://image.tmdb.org/t/p/w${size}${posterPath}`
//
//
//     const {original_title, overview, release_date, vote_average, vote_count, poster_path, movieGenresList} = results;
//     return (
//         <div>
//             <div>
//                 <h2>{original_title}</h2>
//                 <h3>{release_date}</h3>
//                 <span>{overview}</span>
//                 {<img src={`https://image.tmdb.org/t/p/w200${poster_path}`} alt={`${original_title} poster`}/>}
//             </div>
//             <div>
//
//                 <span>Vote average:{vote_average}; Total votes:{vote_count}</span>
//             </div>
//
//         </div>
//     );
// }
