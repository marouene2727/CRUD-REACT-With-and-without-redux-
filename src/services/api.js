import axios from "axios";
const url = "http://localhost:3015/movies";
export const getallMovies = async (id) => {
 id = id || "";
 return await axios.get(`${url}/${id}`);
};
export const addMovie = async (event) => {
 return await axios.post(url, event);
};
export const editMovie = async (id, event) => {
 return await axios.put(`${url}/${id}`, event);
};
export const deleteMovie = async (id) => {
 return await axios.delete(`${url}/${id}`);
};