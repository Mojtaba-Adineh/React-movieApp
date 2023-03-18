import http from "./httpService";
import config from "./config.json";

const apiEndPoint = config.apiUrl + "/auth";

export function login(email , password) {
    return http.post(apiEndPoint , {email , password});
}

export function getJwt() {
    localStorage.getItem("token");
}

http.setJwt(getJwt);

export default  {
    login ,
}