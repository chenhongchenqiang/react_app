import React from 'react';
import {getMenu} from '../actions/listAction';
import {connect} from 'react-redux';
import Header from 'component/header/header'
import {Common} from '../../../common';
import './Menu.scss'

class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            id:''
        }
    }

    componentDidMount() {
        this.props.dispatch(getMenu());
    }
    componentWillReceiveProps(nextProps){
        this.state.id= nextProps.menu.categories[0].id
    }
    change(id){
        this.setState({
            id:id
        })
    }
    goCategoryId(id){
        let that=this;
        that.props.history.push({pathname:'/category',state:{categoryId:id}})
    }
    renderLeft() {
        let list = this.props.menu.categories || [];
        return list.map((item, index) => {
            return <div className={this.state.id===item.id?'left-item active':'left-item'} key={index} onClick={this.change.bind(this,item.id)}>{item.name}</div>
        })
    }

    renderRight() {
        if (this.props.menu.categories && this.props.menu.categories.length > 0&&this.state.id) {
            let activeCategories = this.props.menu.categories.filter(v => v.id ===  this.state.id);
            let activeSubs = activeCategories[0].subs;
            return activeSubs.map((item, index) => {
                return <div className="right-item" key={index}>
                    <h4>{item.name}</h4>
                    <ul className="clearfix">{item.subs.map((v,k)=>{
                        return <li key={k} onClick={this.goCategoryId.bind(this,v.id)}>
                            <img src={Common.getImageUrl(v.picturePath)}/>
                                <span>{v.name}</span>
                        </li>
                    })}</ul>
                </div>
            })
        }
    }

    render() {
        return (
            <div>
                <Header history={this.props.history} title="商品分类"/>
                <div className="menu-inner">
                    <div className="left-bar">
                        <div className="left-bar-item">
                            {this.renderLeft()}
                        </div>

                    </div>
                    <div className="right-bar">
                        <div className="right-bar-item">
                            {this.renderRight()}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(
    state => ({
        menu: state.categoryReducer.Menu
    })
)(Menu)

