import { UseQueryResult } from "react-query";
import { INowPlaying, IPopular, ITopRated, IUpcoming } from "@interfaces/movies.interfaces";
import usePopular from "./usePopular";
import useTopRated from "./useTopRated";
import useNowPlaying from "./useNowPlaying";
import useUpcoming from "./useUpcoming";

interface IMovieHooks {
    nowplaying: (id?: number) => UseQueryResult<INowPlaying, unknown>;
    popular: (id?: number) => UseQueryResult<IPopular, unknown>;
    toprated: (id?: number) => UseQueryResult<ITopRated, unknown>;
    upcoming: (id?: number) => UseQueryResult<IUpcoming, unknown>;
}

function useMovieType(type: string) {
    const hooks: IMovieHooks = {
        nowplaying: useNowPlaying,
        popular: usePopular,
        toprated: useTopRated,
        upcoming: useUpcoming
    };

    return hooks[type as keyof IMovieHooks];
}

export default useMovieType





