import React from 'react';
import Loading from 'component/loading/loading.jsx'

class ScrollView extends React.Component{
    onLoadPage() {
        let clientHeight = document.documentElement.clientHeight;
        let scrollHeight = document.body.scrollHeight;
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop || window.pageYOffset;
        let proLoadDis = 30;
        if ((scrollTop + clientHeight) >= (scrollHeight - proLoadDis)) {
            if(!this.props.isEnd){
                this.props.loadCallback&& this.props.loadCallback()
            }
        }
    }

    componentWillMount() {
        window.addEventListener('scroll', this.onLoadPage.bind(this))
    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.onLoadPage.bind(this))
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
export default ScrollView