import { useQuery } from "react-query";
import { getNowPlaying } from "../services/movies.service";
import { HOOKS_NAMES } from "../interfaces/movies.interfaces";

function useNowPlaying(id: string | number = 1) {
    return useQuery(
        HOOKS_NAMES.NOW_PLAYING,
        () => getNowPlaying(id).then(res => res.data)
    );
}

export default useNowPlaying;