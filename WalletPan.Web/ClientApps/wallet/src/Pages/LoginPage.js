﻿import React, { Component } from 'react';
import TwinSection from '../components/TwinSection'
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel   from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import FormText    from 'react-bootstrap/FormText';
import Button      from 'react-bootstrap/Button';
import Divider from '../components/Divider';

const LoginPage = ({ classes }) => {
    return (
        <div className="container-fluid">

            <div className="row login twin-section" >
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
                                    <Form className="custom-form">
                                        <FormGroup className="form-group" controlId="formBasicEmail">
                                            <FormLabel className="form-label">Email address</FormLabel>
                                            <FormControl  className="form-input"  required type="email" placeholder="Enter your Email address" />
                                            <FormText className="text-muted">
                                                We'll never share your email with anyone else
                                            </FormText>
                                        </FormGroup>

                                        <FormGroup className="form-group" controlId="formBasicPassword">
                                            <FormLabel className="form-label">Password</FormLabel>
                                            <FormControl  className="form-input"  type="password" placeholder="Enter your password" />
                                        </FormGroup>

                                        <div className="col-12">
                                            <a href="#" >Forget Password?</a>
                                        </div>
                                      
                                        <Button className="btn-primary" variant="primary" type="submit">
                                            Submit
                                          </Button>
                                         
                                          <Divider title="Or" />
                                              
                                          <Button variant="outline-primary"> <img src={`${process.env.PUBLIC_URL}/landing_assets/google-icon.svg`} /> Sign in with Google</Button>
                                        
                                          <div className="col-12 form-footer text-center">
                                          New User? <a href="#" >Register</a>
                                         </div>
                                    </Form>
                                </div>
                            </div>
                </div>
                <div className="col-12 col-md-7 right-part">

                    <div className="row">
                        <div className="col-12">

                        </div>

                    </div>
                    <div className="row img-wrapper ">


                    </div>

                </div>

            </div>
        </div>


    );
};

export default LoginPage;