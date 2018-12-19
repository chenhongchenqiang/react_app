import React from 'react';
import {connect} from 'react-redux';
import BottomBar from '../BottomBar/BottomBar.jsx';
import Home from '../Home/Home';
import List from '../List/List'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>
                <div><BottomBar/></div>
                {/*<div><Home/></div>*/}
                <div><List/></div>
            </div>
        )
    }
}

export default connect(
    state => ({})
)(Main);