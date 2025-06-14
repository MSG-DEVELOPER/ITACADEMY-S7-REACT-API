export const urlAllFilms : string =
    "https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc";

export const urlCreditBase : string = `https://api.themoviedb.org/3/movie/`;


export  const BaseUrl= "https://image.tmdb.org/t/p/";

export const Authorization = import.meta.env.VITE_API_AUTHORIZATION as string;
