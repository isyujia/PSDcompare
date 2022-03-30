import axios from "axios";
let base = "http://127.0.0.1:8081"
let requests = axios.create({
    // baseURL: "https://console-mock.apipost.cn/app/mock/project/8a447017-3f4b-4696-a00c-39d6ce98e06d",
    baseURL: base,
    timeout: 2500,
});

export default requests;
