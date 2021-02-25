
import axios from 'axios';

// API请求前缀
axios.defaults.baseURL = 'http://localhost:8080'

class Client {
    constructor() {
    }

    static getClassRoomList() {
        const url = `classRooms`;
        return axios.get(url);
    }
}

export default Client;
