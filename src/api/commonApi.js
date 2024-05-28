import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:4000/api" })

export const localSigin = async (userFieldId, userId, password) => {
  const res = await API.post("/auth/login", {
    [userFieldId]: userId,
    password
  })
  return res;
}

export const resetPassword = async (userFieldId, userId) => {
  const res = await API.post("/auth/request-reset-password", {
    [userFieldId]: userId
  })
  return res;
}