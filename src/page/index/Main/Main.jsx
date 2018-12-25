import React from 'react';
import {connect} from 'react-redux';
import {Route, withRouter} from 'react-router-dom'
import Home from '../Home/Home';
import List from '../List/List';
import My from '../My/My';
import Category from '../Category/Category'
import Menu from '../Menu/Menu'

class Main extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return (
            <div>

                <Route exact path="/home" component={Home}/>
                <Route path="/order" component={List}/>
                <Route path="/my" component={My}/>
                <Route path="/category/" component={Category}/>
                <Route path="/menu" component={Menu}/>


            </div>
        )
    }
}

export default withRouter(connect(
    state => ({})
)(Main));