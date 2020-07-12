import React from 'react';

class VerticalIconicBox extends React.Component {


    constructor(props) {
        super(props);
    }
    render() {

        return (
            <div className={`vertical-iconic-box ${this.props.defclass}`}>

                <div className="vertical-iconic-box-img-wrapper">
                    <img src={this.props.src} />
                </div>
                <div className="vertical-iconic-box-text-wrapper">
                    <div className="title">
                        {this.props.title}
                    </div>
                    <div className="subtitle">
                        {this.props.subtitle}
                    </div>
                </div>
                
            </div>
        )
            ;
    }
}


export default VerticalIconicBox;