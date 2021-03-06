import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem("token");
    return axios.create({
        baseURL: "https://rickandmortyapi.com/api/character/",
        headers: {
            Authorization: token
        }
    });
};
