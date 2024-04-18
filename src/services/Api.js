import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";
import { data } from "../common/data";


const baseURL = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: baseURL
});

function handleTokenExpiration() {
  const authToken = localStorage.getItem("authToken");
  const jwtPayload = authToken ? JSON.parse(atob(authToken.split(".")[1])) : null;
  if (jwtPayload && jwtPayload.exp) {
    const currentTimeInSeconds = Math.floor(Date.now() / 1000);
    const expirationTimeInSeconds = jwtPayload.exp;
    const timeDifferenceInSeconds = expirationTimeInSeconds - currentTimeInSeconds;
    if (timeDifferenceInSeconds <= 60) {
      return true;
    }
  }
  return false;
}

function hanldeSucessResponse(response, data) {
  const filter = data?.find((ele) => ele?.url == response?.config.url);
  toast(filter?.msg)
  return filter
}

function handleErrorResponse(response) {
  const originalRequest = response.config;
  if (response?.response?.status == 401 && originalRequest.url == "/user/login") {
    toast(response.response.data.msg)
    localStorage.removeItem("authToken")
    window.location.href = "/"
  } else if (response?.response?.status == 404) {
    toast(response.response.data.msg)
  }
  else if (response?.response?.status == 500) {
    toast(response.response.data.msg)
  }
  else {
    toast("something went wrong")
  }
}

api.interceptors.request.use(async config => {
  const authToken = localStorage.getItem("authToken")
  const isLogin = authToken === null ? false : true;
  if (authToken && isLogin) {
    config.headers.Authorization = `${authToken}`
    if (handleTokenExpiration()) {
      try {
        const response = await axios.post('http://localhost:8000/api/user/refresh-token', { accessToken: authToken });
        if (response.status === 200) {
          localStorage.setItem("authToken", response.data.accessToken);
          config.headers.Authorization = response.data.accessToken;
        }
      } catch (error) {
        localStorage.removeItem("authToken");
        window.location.href = "/";
        toast("Failed to refresh token");
        return Promise.reject(error);
      }
    }
  }
  return config;
},
  error => {
    return Promise.reject(error);
  }
)

api.interceptors.response.use(
  response => {
    hanldeSucessResponse(response, data);
    return response;
  },
  error => {
    handleErrorResponse(error)
    return Promise.reject(error);
  }
)


export { api } 