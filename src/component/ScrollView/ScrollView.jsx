import React from 'react';
import Loading from 'component/loading/loading.jsx'
import {connect} from 'react-redux';
class ScrollView extends React.Component{
    constructor(props){
        super(props)
        this._onLoadPage=this.onLoadPage.bind(this)
    }
    onLoadPage() {
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.body.scrollHeight;
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        let proLoadDis = 30;
        if ((scrollTop + clientHeight) >= (scrollHeight - proLoadDis)) {
            if(!this.props.isEnd){
                if(!this.props.readyToload){
                    return
                }
                this.props.loadCallback&& this.props.loadCallback()
            }
        }
    }

    componentWillMount() {
        window.addEventListener('scroll',  this._onLoadPage)
    }

    componentWillUnmount() {
        window.removeEventListener('scroll',  this._onLoadPage)
    }
    render(){
        return(
            <div className="scrollView">
                {this.props.children}
                <Loading isEnd={this.props.isEnd}/>
            </div>
        )
    }
}
export default connect(
    state=>({
        readyToload:state.scrollViewReducer.readyToload
    })
)(ScrollView)