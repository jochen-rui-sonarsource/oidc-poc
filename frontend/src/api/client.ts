import axios from "axios";

export const googleClient = axios.create({
    baseURL: "https://accounts.google.com",
    timeout: 5000,
    headers: {}
})