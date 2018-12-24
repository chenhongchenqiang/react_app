import React from 'react';
import './Header.scss'


class CateHeader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            type: 'all'
        };
    }


    changeTab(type) {
        this.setState({
            type: type
        })
    }

    render() {
        return (
            <div className="navHeader">
                <div className="headerTop">
                    <div className={this.state.type === 'all' ? "active text" : "text"}
                         onClick={this.changeTab.bind(this, 'all')}>综合排序
                    </div>
                    <div className={this.state.type === 'price' ? "active text price" : "price text"}
                         onClick={this.changeTab.bind(this, 'price')}>价格
                    </div>
                    <div className={this.state.type === 'filter' ? "active text filter" : " filter text"}
                         onClick={this.changeTab.bind(this, 'filter')}>筛选
                    </div>
                </div>
            </div>
        )
    }
}

export default CateHeader
