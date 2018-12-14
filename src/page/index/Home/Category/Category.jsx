import React from 'react';
import './Category.scss';
import {getHeaderData} from "../../actions/categoryAction";
import {connect} from 'react-redux';
import {Common} from '../../../../common';

class Category extends React.Component {
    constructor(props) {
        super(props);
        this.fetchData();
    }

    onLoadPage() {
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.body.scrollHeight;
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        let proLoadDis = 30;
        if ((scrollTop + clientHeight) >= (scrollHeight - proLoadDis)) {
            alert(1)
        }
    }

    componentWillMount() {
        window.addEventListener('scroll', this.onLoadPage.bind(this))
    }

    componentWillUnmount () {
        window.removeEventListener('scroll', this.onLoadPage.bind(this))
    }

    fetchData() {
        this.props.dispatch(getHeaderData())
    }

    renderItems() {
        let items = this.props.homeData.firstIcon;
        if (items) {
            return items.map((item, index) => {
                return <div key={index} className="category-item">
                    <img className="item-icon" src={Common.getImageUrl(item.picturePath, 60)}/>
                    <p className="item-name">{item.title}</p>
                </div>
            })
        }
    }

    renderList() {
        let items = this.props.homeData.recommendProducts;
        if (items) {
            return items.map((item, index) => {
                return (
                    <li key={index} className="">
                        <img src={Common.getProductImageUrl(item.picturePath, 234)}/>
                        <span className="name">{item.name}</span>
                        <p className="price">{item.price}</p>
                    </li>
                )
            })
        }
    }

    render() {
        return (
            <div>
                <div className="category-content clearfix">{this.renderItems()}</div>
                <div className="list-content">
                    <h4 className="list-title">
                        <span className="title-line"></span>
                        <span>为你推荐</span>
                        <span className="title-line"></span>
                    </h4>
                    <ul className="recommendWrap">{this.renderList()}</ul>
                </div>
            </div>

        )
    }
}

export default connect(
    state => ({
        homeData: state.categoryReducer.homeData,
    })
)(Category)