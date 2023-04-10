import { createContext, PropsWithChildren, useReducer } from "react";
import { IResult } from "@interfaces/movies.interfaces";
import { UserAction, userReducer } from "./reducer";

export enum MovieType {
    NOW_PLAYING = 'nowplaying',
    POPULAR = 'popular',
    TOP_RATED = 'toprated',
    UPCOMING = 'upcoming'
}

export type INITIAL_STATE_TYPE = {
    nowplaying: IResult[],
    popular: IResult[],
    toprated: IResult[],
    upcoming: IResult[]
}

export const INITIAL_STATE: INITIAL_STATE_TYPE = {
    [MovieType.NOW_PLAYING]: [],
    [MovieType.POPULAR]: [],
    [MovieType.TOP_RATED]: [],
    [MovieType.UPCOMING]: []
}

export interface MoviesTypes {
    [MovieType.NOW_PLAYING]: (arr: IResult[]) => void;
    [MovieType.POPULAR]: (arr: IResult[]) => void;
    [MovieType.TOP_RATED]: (arr: IResult[]) => void;
    [MovieType.UPCOMING]: (arr: IResult[]) => void;
}

export type ContextProps = {
    data: INITIAL_STATE_TYPE;
    dispatch: React.Dispatch<UserAction>
}

export const provider = createContext<ContextProps>({} as ContextProps)

export function ContextProvider({ children }: PropsWithChildren) {

    const [data, dispatch] = useReducer(userReducer, INITIAL_STATE);

    return (
        <provider.Provider value={{ data, dispatch }}>
            {children}
        </provider.Provider>
    )
}