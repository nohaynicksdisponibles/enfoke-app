import { api } from "../config/api";
import { Root } from "@interfaces/cast.interfaces";

function fetchData<T>(endpoint: string, params: any = {}): Promise<{ data: T }> {
    return api.get<T>(endpoint, { params }).then(res => ({ data: res.data }));
}

export function getCast(id: string | number) {
    return fetchData<Root>(`/movie/${id}/credits`);
}
