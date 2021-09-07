import {SET_STAR} from "../actionTypes";

export const setRating = (data) => {
    return {type: SET_STAR, payload: data}

}
