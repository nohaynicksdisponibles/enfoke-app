import { useMutation, useQuery } from "react-query";
import { getNowPlaying, getUpcoming } from "../services/movies.service";
import { HOOKS_NAMES } from "../interfaces/movies.interfaces";

function useUpcoming(id: number = 1) {
    return useQuery(
        [HOOKS_NAMES.UPCOMING, id],
        () => getUpcoming(id).then(res => res.data)
    );
}

export default useUpcoming;