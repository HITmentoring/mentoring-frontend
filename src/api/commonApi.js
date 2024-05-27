import axios from 'axios';

const API = axios.create({ baseURL: "http://localhost:4000/api" })

export const localSigin = async (userFieldId, userId, password) => {
  const res = await API.post("/auth/login", {
    [userFieldId]: userId,
    password
  })
  return res;
}