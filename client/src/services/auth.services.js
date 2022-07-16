import axios from "axios";
import jwt_decode from 'jwt-decode';

const API_URL = "http://localhost:5000/api/user/";

const register = (email, password) => {
  return axios
    .post(API_URL + "registration", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      return jwt_decode(response.data.token);
    });
};

const login = (email, password) => {
  return axios
    .post(API_URL + "login", {
      email,
      password,
    })
    .then((response) => {
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      return jwt_decode(response.data.token);
    });
};

const logout = () => {
  localStorage.removeItem("user");
};

export default {
  register,
  login,
  logout,
};