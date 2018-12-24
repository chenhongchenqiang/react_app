import React from 'react';
import Header from './Header/Header';
import Category from './Category/Category';
import BottomBar from '../BottomBar/BottomBar.jsx';
class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div style={{background:'#fff'}}>
                <Header/>
                <Category  history ={this.props.history} />
                <BottomBar/>
            </div>
        )
    }
}

export default Home