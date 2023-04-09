import { useMutation, useQuery } from "react-query";
import { getNowPlaying, getPopular, searchMovie } from "../services/movies.service";
import { HOOKS_NAMES, ISearchResults } from "../interfaces/movies.interfaces";

function useSearch() {
    return useMutation<ISearchResults, unknown, string>(
        (query: string) => searchMovie(query).then(res => res.data),
        {retry: 3, retryDelay: 1500}
    );
}

export default useSearch;