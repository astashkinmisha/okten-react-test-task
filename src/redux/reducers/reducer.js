import {GET_GENRES, GET_MOVIES} from "../actionTypes";

const initialState = {movies: [], genres: []}

function reducer(state = initialState, action) {
switch (action.type) {
    case GET_MOVIES: {
        return {
            ...state,
            movies: [{...action.payload}]
        }
        }

    case GET_GENRES : {
        return {
            ...state,
            genres: {...action.payload}
        }
    }
    default:
        return state;
}
}
export {reducer}
