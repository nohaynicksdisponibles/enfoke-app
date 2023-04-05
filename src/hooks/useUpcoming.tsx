import { useQuery } from "react-query";
import { getNowPlaying } from "../services/movies.service";
import { HOOKS_NAMES } from "../interfaces/movies.interfaces";

function useUpcoming(id: string | number = 1) {
    return useQuery(
        HOOKS_NAMES.UPCOMING,
        () => getNowPlaying(id).then(res => res.data)
    );
}

export default useUpcoming;