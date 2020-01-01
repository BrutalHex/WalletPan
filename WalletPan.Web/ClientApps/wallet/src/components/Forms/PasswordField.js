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

        return (
 
                <div class="input-group mb-6 mt-6">
                    <FormControl
                        className="form-input"
                        type={ this.state.showPassword ? 'text' :'password' } 
                        placeholder={this.props.placeholder}
                        name="password"
                        aria-describedby="password-addon"
                        
                    />

                    <div class="input-group-append">
                        <span class="input-group-text click-able" id="password-addon" onClick={this.handleClick}>   
                          <img src={`${process.env.PUBLIC_URL}/landing_assets/show-password.svg`}/>
                        </span>
                    </div>
                </div>


        


        )
            ;
    }
}
export default PasswordField;





