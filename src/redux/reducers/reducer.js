import {GET_GENRES, GET_MOVIES, SET_GENRES_ID, SET_PAGE, SET_STAR} from "../actionTypes";


const initialState = {movies: [], genres: [], pages: [], stars: 0, genresId: []}

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
    case SET_STAR: {
        return {...state, stars: action.payload}
    }
    case SET_GENRES_ID: {
        return {...state, genresId: action.payload}
    }
    default:
        return state;
}
}
export {reducer}
