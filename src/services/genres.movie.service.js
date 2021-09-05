import {AXIOS} from "./axios.config";
import {setGenres} from "../redux/actionCreators/getGenresAction";

export const getGenres = () => {
    return async (dispatch) => {
        const response = await AXIOS.get('genre/movie/list')
        dispatch(setGenres({...response.data}))
    }
}



