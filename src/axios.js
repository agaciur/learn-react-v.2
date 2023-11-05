import axios from 'axios'

const instance = axios.create({
    baseURL: 'https://react-kurs-92bd2-default-rtdb.firebaseio.com'
})

export default instance