import React from 'react';
import Header from './Header/Header';
import Category from './Category/Category';
class Home extends React.Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div>
                <Header/>
                <Category/>
            </div>
        )
    }
}

export default Home