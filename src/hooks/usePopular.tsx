import { useMutation, useQuery } from "react-query";
import { getNowPlaying, getPopular } from "../services/movies.service";
import { HOOKS_NAMES } from "../interfaces/movies.interfaces";

function usePopular(id: number = 1) {
    return useQuery(
        [HOOKS_NAMES.POPULAR, id],
        () => getPopular(id).then(res => res.data)
    );
}

export default usePopular;