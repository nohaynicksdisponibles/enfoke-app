import { useQuery } from "react-query";
import { getNowPlaying } from "@services/movies.service";
import { HOOKS_NAMES } from "@interfaces/movies.interfaces";

function useNowPlaying(id: number = 1){
    return useQuery(
        [HOOKS_NAMES.NOW_PLAYING, id],
        () => getNowPlaying(id).then(res => res.data)
    );
}

export default useNowPlaying;