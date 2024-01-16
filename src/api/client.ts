import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.create({
    baseURL: "https://myclone-3824b23f6983.herokuapp.com/api/v1",
  }),
  options
);

export default client;