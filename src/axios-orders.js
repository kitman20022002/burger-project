import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-83413.firebaseio.com/',
});

export default instance;