import { useQuery } from "react-query";
import { getTopRated } from "@services/movies.service";
import { HOOKS_NAMES } from "@interfaces/movies.interfaces";

function useTopRated(id: number = 1) {
    return useQuery(
        [HOOKS_NAMES.TOP_RATED, id],
        () => getTopRated(id).then(res => res.data)
    );
}

export default useTopRated;