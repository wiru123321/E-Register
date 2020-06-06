import axios from "axios";

const instance = axios.create({
  baseURL: "https://e-register-7d758.firebaseio.com/",
});

export default instance;
