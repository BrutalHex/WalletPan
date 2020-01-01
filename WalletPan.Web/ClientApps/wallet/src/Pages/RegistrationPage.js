import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import FormText from 'react-bootstrap/FormText';
import Button from 'react-bootstrap/Button';
import Divider from '../components/Divider';
import PasswordField from '../components/Forms/PasswordField';

const RegistrationPage = ({ props }) => {
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
                                            <span className="hint-bar">Creat your account</span>
                                        </div>
                                    </div>



                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="row">
                        <div className="col-12">
                            <Form className="custom-form center">
                                <FormGroup className="form-group" controlId="formBasicEmail">
                                    <FormLabel className="form-label">Email address</FormLabel>
                                    <FormControl required className="form-input" required type="email" placeholder="Enter your Email address" />
                                    <FormText className="text-muted">
                                        We'll never share your email with anyone else
                                            </FormText>
                                </FormGroup>

                                <FormGroup className="form-group" controlId="formBasicPassword">
                                    <FormLabel className="form-label">Password</FormLabel>
                                  
                                </FormGroup>

                                <FormGroup className="form-group" controlId="formBasicPasswordConfirm">
                                    <FormLabel className="form-label">Confirm Password</FormLabel>
                                    <FormControl required className="form-input" type="password" placeholder="Retype your password" />

                                </FormGroup>

                                <FormGroup className="form-group" controlId="formBasicPasswordConfirm">
                                    <FormLabel className="form-label">Confirm Password</FormLabel>
                                    <PasswordField />
                                </FormGroup>
                               

                                <div className="col-12 mb-3">
                                    <a href="#" >Forget Password?</a>
                                </div>

                                <Button variant="primary" type="submit">
                                    Register
                                          </Button>

                                <Divider title="Or" />

                                <Button variant="outline-primary"> <img src={`${process.env.PUBLIC_URL}/landing_assets/google-icon.svg`} /> Register with Google</Button>


                            </Form>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-md-7 right-part">

                    <div className="row w-100">

                        <div className="col-12 logo-wrapper">
                            <img className="center" src={`${process.env.PUBLIC_URL}/landing_assets/footer-logo.svg`}
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
                <div className="col-12">

                    Already have account? <a href="/login" >Login</a>

                </div>
            </div>
        </div>


    );
};

export default RegistrationPage;