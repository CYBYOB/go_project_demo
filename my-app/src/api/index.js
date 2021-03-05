
import axios from 'axios';

// API请求前缀
axios.defaults.baseURL = 'http://localhost:8080'

// 各种请求方法字符穿封装成常量，减少硬编码的存在。（弄成枚举类型就没太必要了）
const GET = 'GET';
const POST = 'POST';
const PUT = 'PUT';
const DELETE = 'DELETE';
const PATCH = 'PATCH'; 

class Client {
    constructor() {
    }

    // 后端返回数据的统一化处理入口，TODO：状态码 等的统一化处理。
    static formatResponse(url, method) {
        return axios.request({url, method}).then(res => Promise.resolve(res.data));
    }

    // 获取学生列表
    static getStudentList(classRoomID) {
        const url = `classRoom/${classRoomID}/students`;
        return this.formatResponse(url, GET);
    }

    static getClassRoomList() {
        const url = `classRooms`;
        return this.formatResponse(url, GET);
    }

    static getClassRoomInfo(classRoomID) {
        const url = `classRoom/${classRoomID}`;
        return this.formatResponse(url, GET)
    }
}

export default Client;
