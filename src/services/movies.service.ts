import { api } from "../config/api";
import { INowPlaying, IPopular, ITopRated, IUpcoming } from "../interfaces/movies.interfaces";

function fetchData<T>(endpoint: string, params: any): Promise<{ data: T }> {
    return api.get<T>(endpoint, { params }).then(res => ({ data: res.data }));
}

export function getNowPlaying(page: string | number) {
    return fetchData<INowPlaying>('/now_playing', { page });
}

export function getPopular(page: string | number) {
    return fetchData<IPopular>('/popular', { page });
}

export function getTopRated(page: string | number) {
    return fetchData<ITopRated>('/top_rated', { page });
}

export function getUpcoming(page: string | number) {
    return fetchData<IUpcoming>('/upcoming', { page });
}