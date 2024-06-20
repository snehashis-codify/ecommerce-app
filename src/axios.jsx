import axios from "axios";

export const axiosCreate = axios.create({
  baseURL: import.meta.env.VITE_APP_AXIOS_BASE_URL,
});
axiosCreate.interceptors.request.use(function (config) {
  // Do something before request is sent
  config.headers = {
    Accept: "*",
    "Content-Type": "application/json",
  };
  return config;
});
//   axiosCreate.interceptors.response.use(
//     (response) => {
//       if (response.status === 200) {
//         return response;
//       } else {
//         if (messages) {
//           if (messages instanceof Array) {
//             return Promise.reject({ messages });
//           }
//           return Promise.reject({ messages: [messages] });
//         }
//         return Promise.reject({ messages: ["got errors"] });
//       }
//     },
//     (error) => {
//       if (error.response && error.response.status === 401) {
//         localStorage.removeItem("token");
//         history.replace({ pathname: "/error" });
//       } else if (error.response && error.response.status === 500) {
//         return Promise.reject(error.response);
//       } else return Promise.reject(error);
//     }
//   );
