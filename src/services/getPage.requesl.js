import {AXIOS} from "./axios.config";
import {setPages} from "../redux/actionCreators/getPagesAction";
import axios from "axios";
import {setMovies} from "../redux/actionCreators/getMoviesAction";

// export const getMoviesPage = (pageNumber) => async (dispatch) => {
//     dispatch(setPages(await AXIOS.get(`discover/movie?
//     api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZhM2RkMWRhNDA3MjJhOTk1M2RiZjA0NThlMzU5
//     MSIsInN1YiI6IjVmZmYwODc4MjIzZTIwMDA0MGFmY2Y2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.
//     6yrkYyjUhZPtNhnkj-Ukfx72ILHlVXgzB-JSVlc8cNI?&page=${pageNumber}`)))
//     console.log(pageNumber)
// }
// /movie&page=${pageNumber}

export const getMoviesPage = (pageNumber, genreId) => {
    return async (dispatch) => {
        const response = await AXIOS.get(`discover/movie?
    api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZhM2RkMWRhNDA3MjJhOTk1M2RiZjA0NThlMzU5
    MSIsInN1YiI6IjVmZmYwODc4MjIzZTIwMDA0MGFmY2Y2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.
    6yrkYyjUhZPtNhnkj-Ukfx72ILHlVXgzB-JSVlc8cNI?&page=${pageNumber}` + `&with_genres=${genreId}` )
        dispatch(setPages({...response.data}))
    }
}
