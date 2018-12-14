import './BottomBar.scss'
import React from 'react';
import {connect} from 'react-redux';
import {changeTab} from "../actions/tabAction.js";

class BottomBar extends React.Component {
    constructor(props) {
        super(props)
    }
    changeTab(item){
        this.props.dispatch(changeTab({
            activeKey:item.key
        }))
    }
    renderItems() {
        let tabs = this.props.tabs;
        return tabs.map((item, index) => {
            let cls = item.key;
            let name = item.name;
            if(this.props.activeKey===item.key){
                cls+=" " +'active'
            }
            return (
                <div key={index} className={cls + " " + 'btn-item'} onClick={this.changeTab.bind(this,item)}>
                    <div className="tab-icon"></div>
                    <div className="tab-name">{name}</div>
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

export default connect(
    state => ({
        tabs: state.tabReducer.tabs,
        activeKey: state.tabReducer.activeKey
    })
)(BottomBar);