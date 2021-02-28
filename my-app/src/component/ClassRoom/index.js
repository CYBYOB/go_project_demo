
import React, {Component} from 'react';
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
        Client.getClassRoomInfo().then(res => {
            const {code, data, msg} = res;
            // if (code) {
            //     this.setState()
            // }
        })
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
                    <div className="eidt"></div>
                </div>
            </div>
        )
    }
}

export default ClassRoom;
