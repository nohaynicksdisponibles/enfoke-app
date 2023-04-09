import { useQuery } from "react-query";
import { getGenres } from "../services/movies.service";
import { HOOKS_NAMES } from "../interfaces/movies.interfaces";

function useGenres() {
    return useQuery(
        [HOOKS_NAMES.GENRES],
        () => getGenres().then(res => res.data)
    );
}

export default useGenres;