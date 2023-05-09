import { useQuery } from "react-query";
import { HOOKS_NAMES } from "@interfaces/movies.interfaces";
import { getCast } from "@services/cast.service";

function useCast(id: number | string) {
    return useQuery(
        [HOOKS_NAMES.CAST],
        () => getCast(id).then(res => res.data)
    );
}

export default useCast;