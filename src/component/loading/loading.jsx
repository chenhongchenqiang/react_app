import React from 'react';
import './loading.scss'
class Loading extends React.Component{
    render(){
        let str='加载中';
        if(this.props.isEnd){
            str='已完成'
        }
        return(
            <div className="loading">{str}</div>
        )
    }
}
export default Loading