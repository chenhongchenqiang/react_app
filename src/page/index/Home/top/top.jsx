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
                <img className="banner-img" src="https://m.mmm920.com/upload/banner/20181207181519030dd.jpg"/>
            </div>
        )
    }
}
export default Header