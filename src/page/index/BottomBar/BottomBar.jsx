import './BottomBar.scss'
import React from 'react';
import {connect} from 'react-redux';
import {NavLink,withRouter} from 'react-router-dom'

class BottomBar extends React.Component {
    constructor(props) {
        super(props)
    }

 /*   changeTab(item) {
        this.props.replace (item.key)
       /!* this.props.dispatch(changeTab({
            activeKey: item.key
        }))*!/
    }*/

    renderItems() {
        let tabs = this.props.tabs;
        return tabs.map((item, index) => {
            let cls = item.key;
            let name = item.name;

            return (
                <div key={index} className={cls + " " + 'btn-item'} >
                    <NavLink replace ={true} to={'/'+item.key} activeClassName="active">
                        <div className="tab-icon"></div>
                        <div className="tab-name">{name}</div>
                    </NavLink>
                </div>
            )
        })
    }

    render() {
        return (
            <div className="bottom-bar">
                {this.renderItems()}
            </div>
        )
    }
}

export default withRouter(connect(
    state => ({
        tabs: state.tabReducer.tabs,
        activeKey: state.tabReducer.activeKey
    })
)(BottomBar));