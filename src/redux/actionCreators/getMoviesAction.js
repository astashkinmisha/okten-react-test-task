import {GET_MOVIES} from "../actionTypes";


export const setMovies = (data)  => {
    return {type: GET_MOVIES, payload: data}

}



