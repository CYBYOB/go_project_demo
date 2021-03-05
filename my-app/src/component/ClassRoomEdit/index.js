
import React, {Component} from 'react';
import {
    Input
} from "antd";

class ClassRoomEdit extends Component {
    constructor(props) {
        super(props);
        this.state = {
            description: ''
        }

        this.onChangeDescription = this.onChangeDescription.bind(this);
    }

    render() {
        const {description} = this.state;

        return (
            <div className="class-room-edit">
                <input placeholder="请输入新的班级介绍" value={description} onChange={this.onChangeDescription}></input>
            </div>
        )
    }

    onChangeDescription(e) {
        const {value} = e.target;
        debugger
        this.setState({
            description: value
        });
    }
}
 export default ClassRoomEdit
