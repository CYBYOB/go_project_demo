
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

import ClassRoomEdit from './component/ClassRoomEdit';
import Home from './component/Home';
import ClassRoom from './component/ClassRoom';

class App extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Router>
                {/* 优点：通过类RESTful API风格的url快速区别不同的页面路径值 */}
                <Route exact path="/" component={Home} />
                <Route exact path="/classRoom/:classRoomID" component={ClassRoom} />
                {/* 将 edit 变更为 post 会更好？ */}
                <Route exact path="/classRoom/:classRoomID/edit" component={ClassRoomEdit} />
            </Router>
        )
    }
}

export default App;
