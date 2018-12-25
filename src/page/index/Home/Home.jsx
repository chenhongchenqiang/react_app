import React from 'react';
import Top from './top/top';
import Category from './Category/Category';
import BottomBar from '../BottomBar/BottomBar.jsx';
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{background:'#fff'}}>
                <Top/>
                <Category  history ={this.props.history} />
                <BottomBar/>
            </div>
        )
    }
}

export default Home