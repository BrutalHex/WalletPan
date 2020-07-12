import React  from 'react';


 
class Divider extends React.Component {


    constructor(props) {
        super(props);


    }

    

    render() {
        return(
            <div className="row custom-divider">
            <span className="center"> {this.props.title}</span>  
          </div>);

    }
}

export default Divider;