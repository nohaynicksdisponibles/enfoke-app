import { api } from "../config/api";
import { IGenres, IMovieDetail, INowPlaying, IPopular, ISearchResults, ITopRated, IUpcoming } from "@interfaces/movies.interfaces";

function fetchData<T>(endpoint: string, params: any = {}): Promise<{ data: T }> {
    return api.get<T>(endpoint, { params }).then(res => ({ data: res.data }));
}

export function getNowPlaying(page: string | number) {
    return fetchData<INowPlaying>('/movie/now_playing', { page });
}

export function getPopular(page: string | number) {
    return fetchData<IPopular>('/movie/popular', { page });
}

export function getTopRated(page: string | number) {
    return fetchData<ITopRated>('/movie/top_rated', { page });
}

export function getUpcoming(page: string | number) {
    return fetchData<IUpcoming>('/movie/upcoming', { page });
}

export function getMovie(id: number) {
    return fetchData<IMovieDetail>(`/movie/${id}`);
}

export function searchMovie(query: string) {
    return fetchData<ISearchResults>(`/search/movie?query=${query}`);
}

export function getGenres(){
    return fetchData<IGenres>('/genre/movie/list');
}