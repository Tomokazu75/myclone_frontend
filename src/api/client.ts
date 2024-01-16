import applyCaseMiddleware from "axios-case-converter";
import axios from "axios";

const options = {
  ignoreHeaders: true,
};

const client = applyCaseMiddleware(
  axios.create({
    baseURL: "https://backend-myclone-postgresql.fly.dev/api/v1",
  }),
  options
);

export default client;