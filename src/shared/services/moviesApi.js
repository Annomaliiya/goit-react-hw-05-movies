import axios from "axios";

const API_KEY = "505c66373c3b7aab73e3cd65ecbaaf29";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
    params: {
        api_key: API_KEY
    }
})

export const fetchTrendingMovies = async () => {
    try {
        const { data } = await instance.get("/trending/movie/day");
        return data;
    }
    catch (error) {
        return error;
    }
}

export const fetchOneMovie = async (id) => {
    try {
        const { data } = await instance.get(`/movie/${id}`);
        return data;
    }
    catch (error) {
        return error;
    }
}

export const fetchMovieBySearch = async (query) => {
    try {
        const { data } = await instance.get(`/search/movie?query=${query}`);
        return data;
    }
    catch (error) {
        return error;
    }
}

export const fetchCast = async (id) => {
    try {
        const { data } = await instance.get(`/movie/${id}/credits`);
        return data;

    }
    catch (error) {
        return error;
    }
}

export const fetchReviews = async (id) => {
    try {
        const { data } = await instance.get(`/movie/${id}/reviews`);
        return data;

    }
    catch (error) {
        return error;
    }
}

