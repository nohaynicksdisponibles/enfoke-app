import { useQuery } from "react-query";
import { getNowPlaying } from "../services/movies.service";
import { HOOKS_NAMES } from "../interfaces/movies.interfaces";

function usePopular(id: string | number = 1) {
    return useQuery(
        HOOKS_NAMES.POPULAR,
        () => getNowPlaying(id).then(res => res.data)
    );
}

export default usePopular;