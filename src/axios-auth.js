import axios from "axios"

const instance = axios.create({
  baseURL: "https://identitytoolkit.googleapis.com/v1",
  params: {
    key: "AIzaSyA0l3UvoFC_IkYGzzK90ODLRWPwmE1q7HI",
    // key: process.env.REACT_APP_AUTH_KEY

  },
})

export default instance
