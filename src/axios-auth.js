import axios from "axios"

const instance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
  params: {
    key: "AIzaSyA0l3UvoFC_IkYGzzK90ODLRWPwmE1q7HI",
  },
})

export default instance
