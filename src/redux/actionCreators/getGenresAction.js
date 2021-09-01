import {GET_GENRES} from "../actionTypes";


export const setGenres = (data) => {
    return {type: GET_GENRES, payload: data}
}
