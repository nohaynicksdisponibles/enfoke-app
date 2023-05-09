import { useQuery } from "react-query";
import { HOOKS_NAMES } from "@interfaces/movies.interfaces";
import { getInfoAndMovies } from "@services/person.service";

function useInfoAndMovies(id: number | string) {
    return useQuery(
        [HOOKS_NAMES.INFO_MOVIES],
        () => getInfoAndMovies(id).then(res => res)
    );
}

export default useInfoAndMovies;