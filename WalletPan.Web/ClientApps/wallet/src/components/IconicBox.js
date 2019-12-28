import React, { Component }  from 'react';

 class IconicBox extends React.Component {

    constructor(props) {
        super(props);
    }

     render() {
        
        return(
            <div className={`iconic-box ${this.props.defclass}`}>
                
                <div className="img-wrapper">
                    <img src={this.props.src} />
                </div>
                <div className="title">
                    {this.props.title}
                </div>
                <div className="subtitle">
                    {this.props.subtitle}
                </div>
            </div>
)
        ;
     }
}

 
export default IconicBox;