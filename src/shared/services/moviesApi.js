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

