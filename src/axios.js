import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-kurs-92bd2-default-rtdb.firebaseio.com'
    // process.env.REACT_APP_DATABASE
})

export default instance