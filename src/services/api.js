import axios from "axios";
let baseURL;

process.env.NODE_ENV === "production"
  ? (baseURL = "/herokuUrl")
  : (baseURL = "http://localhost:3001");

console.log(process.env, baseURL);

const service = axios.create({ baseURL });

const actions = {
  test: async () => {
    console.log("actions test");
    return await service.get("/test");
  },
  getTasks: async () => {
    return await service.get("/tasks");
  },
  seedTasks: async () => {
    return await service.post("/seed");
  },
  dropTasks: async () => {
    return await service.post("/drop-tasks");
  },
};

export default actions;
