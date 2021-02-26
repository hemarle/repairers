import axios from "axios";

const instance = axios.create({
  baseURL: "https://repairerlifechapel.herokuapp.com",
  headers: {
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
  },
});

export default instance;
