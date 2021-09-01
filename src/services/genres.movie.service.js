import {AXIOS} from "./axios.config";

export const getGenres = async () => await AXIOS.get('/genre/movie/list')

