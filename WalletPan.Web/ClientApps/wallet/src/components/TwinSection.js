import React from 'react';


class TwinSection extends React.Component {


    constructor(props) {
        super(props);


    }

    

    render() {
        return(
        <div    className={"twin-section " +this.props.className}  id={this.props.id}>
          {this.props.left}
          {this.props.right}
        </div>);

    }
}

export default TwinSection;