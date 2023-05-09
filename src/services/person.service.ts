import { PersonMovies, Person } from "@interfaces/person.interfaces";
import { api } from "../config/api";

function fetchData<T>(endpoint: string, params: any = {}): Promise<{ data: T }> {
    return api.get<T>(endpoint, { params }).then(res => ({ data: res.data }));
}

export function getPersonInfo(id: string | number) {
    return fetchData<Person>(`/person/${id}`);
}

export function getPersonMovies(id: string | number) {
    return fetchData<PersonMovies>(`/person/${id}/movie_credits`);
}

export async function getInfoAndMovies(id: string | number) {
    const {data: info} = await getPersonInfo(id);
    const {data: movies} = await getPersonMovies(info.id);

    return {info, movies}
}