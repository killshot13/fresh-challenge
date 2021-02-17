import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? (baseURL = "/deployedUrl")
  : (baseURL = "http://localhost:3001");

console.log(process.env, baseURL);

const service = axios.create({ baseURL });

const actions = {
  test: async () => {
    console.log("actions test");
    return await service.get("/test");
  },
  entries: async (entryType) => {
    return await service.get(`/entries?entryType=${entryType}`);
  },
  seed: async () => {
    console.log("actions seed");
    return await service.post("/seed");
  },
  drop: async () => {
    return await service.post("/drop-db");
  },
};

export default actions;
