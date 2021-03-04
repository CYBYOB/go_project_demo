
import React, {Component} from 'react';
import {
    Button
} from 'antd';
import './classRoom.less';

import Client from '../../api';

class ClassRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // 班级信息
            classRoom: {
                id: '-',
                name: '-',
                description: '-',
                studentNum: 0,
            },

            // student表格
            studentList: [],
        }
    }
    componentDidMount() {
        const {classRoomID} = this.props.match.params;
        this.getClassRoomInfoById(classRoomID);
    }
    getClassRoomInfoById(classRoomID) {
        Client.getClassRoomInfo(classRoomID).then(res => {
            const {code, data, msg} = res;
            if (!code) {
                const {classRoom} = this.state;
                const {id, name, description} = data;
                this.setState({
                    classRoom: Object.assign(classRoom, {id, name, description})
                });
            }
        });
    }

    render() {
        const {classRoom, studentList} = this.state;
        const {id, name, description, studentNum} = classRoom;

        return (
            <div className="class-room">
                <div className="class-room-wrap">
                    <div className="info">
                        <div>班级ID：{id}</div>
                        <div>班级名字：{name}</div>
                        <div>班级描述：{description}</div>
                        <div>班级总人数：{studentNum}</div>
                    </div>
                    <div className="eidt">
                        <Button type="primary">编辑</Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ClassRoom;
