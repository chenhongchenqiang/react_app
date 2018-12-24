import React from 'react';
import './header.scss'

class Header extends React.Component {
    constructor(props){
        super(props)
    }
    goBack(){
        this.props.history.goBack()
    }
    render() {
        return (
            <div className="nav">
                <div className="back-icon" onClick={this.goBack.bind(this,null)}>
                </div>
                <h4 className="title"> {this.props.title}</h4>
            </div>
        )
    }
}

export default Header