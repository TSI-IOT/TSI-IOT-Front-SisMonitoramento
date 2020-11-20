import http from "../../app/service/config";

const url = "/user";

export default {
    createUser: (user) => {
        return http.post(url,user);
    }
}