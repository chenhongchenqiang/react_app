import React from 'react';
import './top.scss';
import SeachBar from '../SeachBar/SeachBar'
class Header extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <div className="header">
                <SeachBar/>
                <img className="banner-img"  src={require('../img/banner.jpg')}/>
            </div>
        )
    }
}
export default Header