import axios from "axios";

let requests = axios.create({
  timeout: 2500,
});

export default requests;
