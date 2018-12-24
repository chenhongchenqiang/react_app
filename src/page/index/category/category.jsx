import React from 'react';
import Header from 'component/Header/Header'
import {connect} from 'react-redux';
import {Common} from '../../../common';
import {NavLink,withRouter} from 'react-router-dom'
import ScrollView from 'component/ScrollView/ScrollView.jsx'
import {getCategory} from "../actions/listAction";
import CateHeader from './Header/Header'

class Category extends React.Component {
    constructor(props) {
        super(props)
        this.request = {
            brandId: null,
            categoryId: "",
            couponId: "",
            exts: [],
            orderBy: 0,
            pageIndex: 1,
            pageSize: 10,
            standard: "",
            useCoupon: 0,
            usePoints: 0,
            useRedPacket: 0
        };
        this.state = {
            isEnd: false,
        };
    }

    componentDidMount() {
        let categoryId = this.props.location.state.categoryId;
        this.request.categoryId=categoryId;
        this.getCategory(this.request);

    }
    componentWillReceiveProps(nextProps){

    }
    getCategory(request) {
        this.props.dispatch(getCategory(request))
    }
    LoadPage() {
        this.request.pageIndex++;
        if (this.request.pageIndex > this.props.category.totalPage) {
            this.setState({
                isEnd: true,
            })
        } else {
            this.getCategory(this.request)
        }
    }
    renderParent() {
        let items = this.props.categoryProduct;
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
                <Header history ={this.props.history} title="分类"/>
                <CateHeader/>
                <ScrollView loadCallback={this.LoadPage.bind(this)} isEnd={this.state.isEnd}>
                    <div className="recommendWrap">
                        {this.renderParent()}
                    </div>
                </ScrollView>
            </div>
        )
    }
}

export default withRouter(connect(
    state => ({
        categoryProduct: state.categoryReducer.categoryProduct,
        category: state.categoryReducer.Category
    })
)(Category))