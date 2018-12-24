import React from 'react';
import {connect} from 'react-redux';
import {getList} from "../actions/listAction";
import {Common} from '../../../common';
import BottomBar from '../BottomBar/BottomBar.jsx';
import './List.scss';
import ScrollView from 'component/ScrollView/ScrollView.jsx'

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
        };
    }

    getList(request) {
        this.props.dispatch(getList(request))
    }

    LoadPage() {
        this.request.pageIndex++;
        if (this.request.pageIndex > this.props.list.totalPage) {
            this.setState({
                isEnd: true,
            })
        } else {
            this.getList(this.request)
        }
    }


    renderItems() {
        let items = this.props.product;
        if (items) {
            return items.map((item, index) => {
                return (
                    <li key={index} className="">
                        {item.picturePath?<img src={Common.getProductImageUrl(item.picturePath, 234)}/>:null}
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
                <ScrollView loadCallback={this.LoadPage.bind(this)} isEnd={this.state.isEnd}>
                    <div className="recommendWrap">
                        {this.renderItems()}
                    </div>
                </ScrollView>
                <BottomBar/>
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