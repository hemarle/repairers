import axios from "axios";

const instance = axios.create({
  baseURL: "https://repairerlifechapel.herokuapp.com",
});

export default instance;
