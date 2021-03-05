
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
                <Route exact path="/" component={Home} />
                <Route exact path="/classRoom/:classRoomID" component={ClassRoom} />
                <Route exact path="/classRoom/:classRoomID/edit" component={ClassRoomEdit} />
            </Router>
        )
    }
}

export default App;
