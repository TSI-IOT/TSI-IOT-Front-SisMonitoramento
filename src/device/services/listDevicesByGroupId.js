import http from "../../app/service/config";

export default {
    listDevicesByGroupId(id) {
        const url = "/device/id/" + id + "/page/1/quantityPerPage/20";
        return http.get(url);
    }
}