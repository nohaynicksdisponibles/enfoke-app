import { useQuery } from "react-query";
import { getMovie } from "@services/movies.service";
import { HOOKS_NAMES } from "@interfaces/movies.interfaces";

function useMovieDetail(id: number){
    return useQuery(
        [HOOKS_NAMES.MOVIE_DETAIL, id],
        () => getMovie(id).then(res => res.data)
    );
}

export default useMovieDetail;