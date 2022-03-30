import axios from "axios";

let requests = axios.create({
    baseURL: "https://console-mock.apipost.cn/app/mock/project/8a447017-3f4b-4696-a00c-39d6ce98e06d",
    timeout: 2500,
});

export default requests;
