import React from 'react';
import './SeachBar.scss';
class SeachBar extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
           <div className="search-bar">
               <div className="bar-location">
                   <div className="location-icon"></div>
                   <div className="location-text">杭州市</div>
               </div>
               <div className="search-btn">
                   <p className="place-holder">dasd</p>
               </div>
           </div>
        )
    }
}
export default SeachBar