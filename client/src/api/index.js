const axios = require('axios');

const api = axios.create({ baseURL: "http://localhost:7866" });

export const signin = async (formData) => {
  try {
    const res = await api.post(`/user/signin`, formData);
    return res;
  } catch (err) {
    console.log(err);
  }
}

export const signup = async (formData) => {
  try {
    console.log(formData);
    const res = await api.post(`/user/signup`, formData);
    return res;
  } catch (err) {
    console.log(err);
  }
}