
import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom';

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
                <Route path="/classRoom/:classRoomID" component={ClassRoom} />
            </Router>
        )
    }
}

export default App;
