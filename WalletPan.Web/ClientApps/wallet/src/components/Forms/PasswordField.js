import React from 'react';
import InputGroup from 'react-bootstrap/InputGroup';
import InputGroupAppend from 'react-bootstrap/InputGroup';
import InputGroupText from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
 

class PasswordField extends React.Component {


    constructor(props) {
        super(props);
        this.showPassword = this.showPassword.bind(this);
        this.handleClick=this.handleClick.bind(this)
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


            <InputGroup   >
               
                <FormControl
                    className="form-input"
                    type="password"
                    placeholder="Enter your password"
                    aria-describedby="password"
                    name="password"
                />
           <InputGroupAppend>
                    <InputGroupText id="password_addon" onClick={this.handleClick}>
                        <img src={`${process.env.PUBLIC_URL}/landing_assets/show-password.svg`}
                        />
                    </InputGroupText>
                </InputGroupAppend>
            </InputGroup>
         
        )
            ;
    }
}
export default PasswordField;





 