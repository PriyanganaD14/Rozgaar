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
    const res = await api.post(`/user/signup`, formData);
    return res;
  } catch (err) {
    console.log(err);
  }
}

export const resetPassword = async (email) => {
  try {
    console.log(email);
    const res = await api.post(`/user/resetPassword`, { email });
    return res;
  } catch (err) {
    console.log(err);
  }
}

export const changePassword = async (newPassword, sentToken) => {
  try {
    console.log({ newPassword, sentToken });
    const res = await api.post(`/user/updatePassword`, {newPassword, sentToken});
    return res;
  } catch (err) {
    console.log(err);
  }
}