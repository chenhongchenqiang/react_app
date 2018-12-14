import React from 'react';
import {connect} from 'react-redux';
import BottomBar from '../BottomBar/BottomBar.jsx';
import Home from '../Home/Home'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div><BottomBar/></div>
                <div><Home/></div>
            </div>
        )
    }
}

export default connect(
    state => ({})
)(Main);