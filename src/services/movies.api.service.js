import {AXIOS} from './axios.config'

const getMovies = async () => await AXIOS.get('discover/movie')
export {getMovies}
