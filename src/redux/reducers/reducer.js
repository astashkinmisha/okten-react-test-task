import {GET_GENRES, GET_MOVIES, SET_PAGE} from "../actionTypes";

const initialState = {movies: [], genres: [], pages: []}

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
            genres: [{...action.payload}]
        }
    }
    case SET_PAGE : {
        return {
            ...state, movies: [{...action.payload}]
        }
    }
    default:
        return state;
}
}
export {reducer}
