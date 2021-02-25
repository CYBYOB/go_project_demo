
import React, {Component} from 'react';

class ClassRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            id: '-',
            name: '-',
            desc: '-',
            studentNum: 0,
            // student表格
            studentList: [],
        }
    }

    render() {
        return (
            <div className="class-room">
                
            </div>
        )
    }
}

export default ClassRoom;
