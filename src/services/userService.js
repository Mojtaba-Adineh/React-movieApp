import http from "./httpService";
import config from "./config.json";

const apiEndPoint = config.apiUrl + "/register";

export function register(user) {
    return http.post(apiEndPoint , {
        name : user.name,
        email : user.email,
        password : user.password ,
    });
};

