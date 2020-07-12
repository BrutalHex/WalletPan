import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import InputGroupAppend from 'react-bootstrap/InputGroup';
import InputGroupText from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';


class PasswordField extends React.Component {


    constructor(props) {
        super(props);
       
        this.showPassword = this.showPassword.bind(this);
        this.handleClick = this.handleClick.bind(this)
        this.state = { showPassword: false };
    }

    showPassword(e) {

        this.setState(state => ({
            showPassword: !state.showPassword
        }));

    }

    handleClick(e) {
        e.preventDefault();
        this.showPassword(e);
    }

    render() {
        var { ...other } = this.props;
        return (
 
                <div class="input-group input-group-password mb-6 mt-6">
                    <FormControl
                        
                        type={ this.state.showPassword ? 'text' :'password' } 
                        {...other} 

                    />

                    <div class="input-group-append">
                        <span class="input-group-text click-able"   onClick={this.handleClick}>   
                          <img src={`${process.env.PUBLIC_URL}/landing_assets/show-password.svg`}/>
                        </span>
                    </div>
                </div>


        


        )
            ;
    }
}
export default PasswordField;





