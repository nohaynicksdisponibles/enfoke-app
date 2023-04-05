import { useQuery } from "react-query";
import { getNowPlaying } from "../services/movies.service";
import { HOOKS_NAMES } from "../interfaces/movies.interfaces";

function useTopRated(id: string | number = 1) {
    return useQuery(
        HOOKS_NAMES.TOP_RATED,
        () => getNowPlaying(id).then(res => res.data)
    );
}

export default useTopRated;