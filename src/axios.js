import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:5001/shopping-mart-5b0ea/us-central1/api", // api(cloud function) URL
  baseURL: "https://us-central1-shopping-mart-5b0ea.cloudfunctions.net/api",
});

export default instance;
