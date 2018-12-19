import React from 'react';
import {connect} from 'react-redux';
import {getList} from "../actions/listAction";
import {Common} from '../../../common';
import './List.scss';
import Loading from 'component/loading/loading.jsx'

class List extends React.Component {
    constructor(props) {
        super(props);
        this.request = {
            isInit: false,
            pageIndex: 1,
            pageSize: 10,
            type: "163"
        };
        this.getList(this.request);
        this.state = {
            isEnd: false,
            loadingText: '加载中'
        };
    }

    getList(request) {
        this.props.dispatch(getList(request))
    }

    onLoadPage() {
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.body.scrollHeight;
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        let proLoadDis = 30;
        if ((scrollTop + clientHeight) >= (scrollHeight - proLoadDis)) {
            this.request.pageIndex++;
            if (this.request.pageIndex > this.props.list.totalPage) {
                this.setState({
                    isEnd: true,
                    loadingText: '已完成'
                })
            } else {
                this.getList(this.request)
            }
        }
    }

    componentWillMount() {
        window.addEventListener('scroll', this.onLoadPage.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onLoadPage.bind(this))
    }

    renderItems() {
        let items = this.props.product;
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
            <div className="content">
                <div className="recommendWrap">
                    {this.renderItems()}
                </div>
                <Loading isEnd={this.state.isEnd}/>
            </div>
        )
    }
}

export default connect(
    state => ({
        product: state.categoryReducer.product,
        list: state.categoryReducer.list
    })
)(List)