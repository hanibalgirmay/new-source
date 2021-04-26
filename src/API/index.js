import axios from "axios";
import env from "dotenv";

env.config();

let endpoint = `https://newsapi.org/v2/`;
let key = process.env.VUE_APP_NEWS_API;
console.log("-----------------------------");
console.log(key);

export const GET_SOURCES = () => {
  return axios.get(`${endpoint}sources?apiKey=${key}`);
};

export const FETCH_TOP_NEWS = () => {
  return axios.get(`${endpoint}top-headlines?country=us&apiKey=${key}`);
};
