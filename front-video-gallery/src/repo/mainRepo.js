import config from "../config"
import axios from "axios"

const instance = axios.create({
    baseURL: config.MAIN_ENDPOINT,
    timeout: 5000,
    headers: {
        "Content-Type" : "application/json"
      }
});

const getApiVideos = () => instance({method:"POST",data:{"operation":"list"}}).then(resp=>resp.data)
const createApiVideo = (url) => instance({method:"POST",data:{"operation":"create",body:{url}}}).then(resp=>resp.data)
const deleteApiVideo = (id) => instance({method:"POST",data:{"operation":"delete",body:{id}}}).then(resp=>resp.data)

export { getApiVideos, createApiVideo, deleteApiVideo }