export interface IApiResponseBase {
    page: number;
    results: IResult[];
    total_results: number;
    total_pages: number;
}

export interface INowPlaying extends IApiResponseBase {
    dates: Dates;
}

export interface IPopular extends IApiResponseBase { }

export interface ITopRated extends IApiResponseBase { }

export interface IUpcoming extends IApiResponseBase {
    dates: Dates;
}

export interface Result {
    poster_path: string;
    adult: boolean;
    overview: string;
    release_date: string;
    genre_ids: number[];
    id: number;
    original_title: string;
    original_language: string;
    title: string;
    backdrop_path: string;
    popularity: number;
    vote_count: number;
    video: boolean;
    vote_average: number;
}

export interface IResult extends Partial<Result> {}

export interface Dates {
    maximum?: string;
    minimum?: string;
}

export enum HOOKS_NAMES {
    NOW_PLAYING = 'now_playing',
    POPULAR = 'popular',
    TOP_RATED = 'top_rated',
    UPCOMING = 'upcoming'
}