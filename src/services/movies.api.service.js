import {AXIOS} from './axios.config'
import {setMovies} from "../redux/actionCreators/getMoviesAction";

export const getMovies = () => {
    return async (dispatch) => {
        const response = await AXIOS.get('discover/movie')
        dispatch(setMovies({...response.data}))
    }
}
