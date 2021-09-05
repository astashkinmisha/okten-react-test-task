import {AXIOS} from "./axios.config";
import {setPages} from "../redux/actionCreators/getPagesAction";


export const getPageById= (pageNumber) => {
    return async (dispatch) => {
        const response = await AXIOS.get(`discover/movie?
    api_key=eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI1OTZhM2RkMWRhNDA3MjJhOTk1M2RiZjA0NThlMzU5
    MSIsInN1YiI6IjVmZmYwODc4MjIzZTIwMDA0MGFmY2Y2MyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.
    6yrkYyjUhZPtNhnkj-Ukfx72ILHlVXgzB-JSVlc8cNI?&with_genres=${pageNumber}`)
        dispatch(setPages({...response.data}))
    }
}
