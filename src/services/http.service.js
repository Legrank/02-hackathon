/* eslint-disable indent */
import axios from "axios";
import configFile from "../config.json";

const http = axios.create({ baseURL: configFile.apiEndpoint });

// request
http.interceptors.request.use(
    function (config) {
        const containSlash = /\/$/gi.test(config.url);
        config.url =
            (containSlash ? config.url.slice(0, -1) : config.url) + ".json";

        return config;
    },
    function (error) {
        return Promise.reject(error);
    }
);

const httpService = {
    get: http.get,
    post: http.post,
    put: http.put,
    delete: http.delete,
    patch: http.patch,
};
export default httpService;
