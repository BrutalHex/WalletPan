﻿import React from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import FormText from 'react-bootstrap/FormText';
import Button from 'react-bootstrap/Button';
import FormControlFeedback from 'react-bootstrap/FormGroup';
import Divider from '../../components/Divider';
import PasswordField from '../../components/Forms/PasswordField';
import {Formik,Field} from 'formik';
import * as yup from 'yup';

class LoginPage extends React.Component 
{

    constructor(props) {
        super(props);
    
    }


    render()
    {
        const schema = yup.object({

            email: yup.string()
                .email('E-mail is not valid!')
                .required('E-mail is required!'),
            password: yup.string()
                .min(6, 'Password has to be longer than 6 characters!')
                .required('Password is required!'),
            

        });




    return (
        <div className="container-fluid">

            <div className="row login twin-section vh-90 vw-90" >
                <div className="col-12 col-md-5 left-part">


                    <div className="row">
                        <div className="col-12 banner-Text">
                            <div className="row">
                                <div className="col-12 d-flex justify-content-center">
                                    <div className="row">
                                        <div className="col-12">
                                            <h2>
                                                Welcome back to
                                  <br />
                                                WALLETPAN
                               </h2>

                                        </div>
                                        <div className="col-12">
                                            <span className="hint-bar">Please login to your account</span>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>
                  
                    </div>
                    <div className="row">
                                <div className="col-12">
                                <Formik
                                    validationSchema={schema}
                                    initialValues={{
                                        email: '',
                                        password:''
                                      
                                      }}
                                      validate={values => {
                                        const errors = {};

                                          if (values.password != values.passwordConfirmation) {
                                            errors.passwordConfirmation = "Passwords do not match"
                                        }
                                         
                                        return errors;
                                      }}
                                    onSubmit={(values) => {
                                           
                                        if(values.password != values.passwordConfirmation)
                                        {
                                           
                                        }
                                      
                                        // same shape as initial values
                                        console.log(values);
                                      }}
                                     

                                >
                                    {({
                                        handleSubmit,
                                        handleChange,
                                        handleBlur,
                                        values,
                                        isValid,
                                        errors,
                                    }) => (
                                            <Form noValidate onSubmit={handleSubmit}  className="custom-form center needs-validation"  >

                                                <FormGroup controlId="validationFormikemail">
                                                    <FormLabel>Email address</FormLabel>
                                                   <FormControl  type="email"
                                                        name="email"
                                                        className="form-control form-input"
                                                        value={values.email}
                                                        required
                                                        onChange={handleChange}
                                                        isInvalid={!!errors.email} />
                                                    <FormControlFeedback type="invalid">
                                                        {errors.email}
                                                    </FormControlFeedback>
                                                    <FormText className="text-muted">
                                                        We'll never share your email with anyone else
                                                     </FormText>
                                                </FormGroup>

                                                <FormGroup controlId="formBasicPassword">
                                                    <FormLabel  >Password</FormLabel>

                                                    <PasswordField 
                                                     
                                                      name="password"
                                                      required
                                                      className="form-control form-input"
                                                      value={values.password}
                                                      onChange={handleChange}
                                                      isInvalid={!!errors.password} 
                                                    />
                                               

                                                    <FormControlFeedback type="invalid">
                                                        {errors.password}
                                                    </FormControlFeedback>
                                                </FormGroup>

                                                <div className="col-12 mb-3">
                                            <a href="#" >Forget Password?</a>
                                        </div>
                                      
                                        <Button variant="primary" type="submit">
                                            Login
                                          </Button>
                                         
                                          <Divider title="Or" />
                                              
                                          <Button variant="outline-primary"> <img src={`${process.env.PUBLIC_URL}/landing_assets/google-icon.svg`} /> Sign in with Google</Button>
                                        
                                            </Form>
                                        )}
                                </Formik>
                                   
                                </div>
                            </div>
                </div>
                <div className="col-12 col-md-7 right-part">

                    <div className="row w-100">
                   
                            <div className="col-12 logo-wrapper">
                            <img  className="center" src={`${process.env.PUBLIC_URL}/landing_assets/footer-logo.svg`}
                                />
                            
                        </div>
                        <div className="col-12 subtitle text-center">
                            XRP’s Original Wallet
                        </div>
                    </div>
                    <div className="row img-wrapper ">


                    </div>

                </div>
            
            </div>
           <div className="row form-footer">
                <div className="col-8 col-sm-4 col-md-4 col-xl-2">

                    New User? <a href="/RegisterPage" >Register</a>

                </div>
            </div>
        </div>


    );
};
}
export default LoginPage;