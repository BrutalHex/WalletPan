import React  from 'react';


 
class Spinner extends React.Component {


    constructor(props) {
        super(props);


    }

    

    render() {
        return(
 
            <img  className="center" src={`${process.env.PUBLIC_URL}/landing_assets/grid_spinner.svg`}
            />
           );

    }
}

export default Spinner;