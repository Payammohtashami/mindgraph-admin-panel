import { Axios } from "axios";

export default function setupAxios(store: any, axios: Axios) {
    axios.interceptors.request.use(
        (config) => {
            return config;
        },
        (error) => {
            Promise.reject(error);
        }
    );

    axios.interceptors.response.use(
        function(response) {
            return response;
        },
        function (error) {
            return Promise.reject(error);
        }
    );
};