import { INITIAL_STATE_TYPE } from ".";
import { IResult } from "../interfaces/movies.interfaces";

export enum Options {
    nowplaying = 'nowplaying',
    popular = 'popular',
    toprated = 'toprated',
    upcoming = 'upcoming'
}

export type UserActionsTypes = {
    [Options.nowplaying] : 'setNowPlaying',
    [Options.popular] : 'setPopular',
    [Options.toprated] : 'setTopRated',
    [Options.upcoming] : 'setUpcoming'
}

export type UserAction = { type: keyof UserActionsTypes, payload: IResult[] };

export const userReducer = (state: any, action: UserAction): INITIAL_STATE_TYPE => {

    switch (action.type) {
        case Options.nowplaying:
            return {
                nowplaying: action.payload,
                popular: [],
                toprated: [],
                upcoming: [],
            }
        case Options.popular:
            return {
                nowplaying: [],
                popular: action.payload,
                toprated: [],
                upcoming: [],
            }
        case Options.toprated:
            return {
                nowplaying: [],
                popular: [],
                toprated: action.payload,
                upcoming: [],
            }
        case Options.upcoming:
            return {
                nowplaying: [],
                popular: [],
                toprated: [],
                upcoming: action.payload,
            }
        default:
            return state;
    }

}