// types/media.ts

export interface Genre {
    id: number;
    name: string;
}

export interface CastMember {
    id: number;
    name: string;
    character: string;
    profilePath?: string;
}

export interface Movie {
    id: number;
    title: string;
    overview: string;
    posterPath: string;
    backdropPath?: string;
    releaseDate: string;
    voteAverage: number;
    voteCount: number;
    genres: Genre[];
    runtime?: number;
    tagline?: string;
    cast: CastMember[];
    director?: string;
    budget?: number;
    revenue?: number;
    status?: string;
}

export interface TVShow {
    id: number;
    name: string;
    overview: string;
    posterPath: string;
    backdropPath?: string;
    firstAirDate: string;
    voteAverage: number;
    voteCount: number;
    genres: Genre[];
    numberOfSeasons?: number;
    numberOfEpisodes?: number;
    episodeRunTime?: number[];
    tagline?: string;
    cast: CastMember[];
    creators?: string[];
    status?: string;
    networks?: string[];
}
