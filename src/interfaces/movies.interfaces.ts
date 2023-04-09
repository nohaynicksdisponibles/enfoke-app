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

export interface ISearchResults extends IApiResponseBase { }

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

export interface IResult extends Partial<Result> { }

export interface Dates {
    maximum?: string;
    minimum?: string;
}

export enum HOOKS_NAMES {
    NOW_PLAYING = 'now_playing',
    POPULAR = 'popular',
    TOP_RATED = 'top_rated',
    UPCOMING = 'upcoming',
    MOVIE_DETAIL = 'movieDetail',
    GENRES = 'genres',
    MOVIE_TYPE = 'movieType'
}

export interface MovieDetailInterface {
    adult: boolean
    backdrop_path: string
    belongs_to_collection: any
    budget: number
    genres: Genre[]
    homepage: string
    id: number
    imdb_id: string
    original_language: string
    original_title: string
    overview: string
    popularity: number
    poster_path: any
    production_companies: ProductionCompany[]
    production_countries: ProductionCountry[]
    release_date: string
    revenue: number
    runtime: number
    spoken_languages: SpokenLanguage[]
    status: string
    tagline: string
    title: string
    video: boolean
    vote_average: number
    vote_count: number
}

export type IMovieDetail = Partial<MovieDetailInterface>

export interface Genre {
    id: number
    name: string
}

export interface ProductionCompany {
    id: number
    logo_path?: string
    name: string
    origin_country: string
}

export interface ProductionCountry {
    iso_3166_1: string
    name: string
}

export interface SpokenLanguage {
    iso_639_1: string
    name: string
}

export interface IGenres {
    genres: Genre[]
  }
  
  export interface Genre {
    id: number
    name: string
  }
  