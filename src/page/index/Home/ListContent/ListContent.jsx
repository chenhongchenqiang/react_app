import React from 'react';
import './ListContent.scss'
class ListContent extends React.Component{
    constructor(props){
        super(props)
    }
    render() {
        return (
            <div className="list-content">
                <h4 className="list-title">
                    <span className="title-line"></span>
                    <span>为你推荐</span>
                    <span className="title-line"></span>
                </h4>
            </div>
        )
    }
}
export default ListContent