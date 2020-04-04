import React from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import FormText from 'react-bootstrap/FormText';
import Button from 'react-bootstrap/Button';
import FormControlFeedback from 'react-bootstrap/FormGroup';
import {Formik,Field} from 'formik';
import * as yup from 'yup';
import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import XrpTransactionBox from '../../../components/XrpTransactionBox';
import PagerBox from '../../../components/PagerBox';
import PropTypes from 'prop-types'
import { Formik } from 'formik';
import * as yup from 'yup';
import FormControlFeedback from 'react-bootstrap/FormGroup';
import SpinnerContainer from '../../../components/spinner'


const SendXrpPage = ({ handleSendClick }) => {

    const schema = yup.object({

        sourceAddress:yup.string().trim().required('source wallet is required'),
        privatekey: yup.string().trim().required('private key is required'),
        destWallet: yup.string().trim().required('Destination wallet is required'),
        amount: yup.number().min(0.0000000001).required('Amount is required'),
        destTag: yup.number()

    });


    return (

        <div className="col-12 col-sm-12 col-md-10 col-lg-8  col-xl-8 single-well my-md-5 my-sm-0 py-4 p-md-5 center">

            <div className="row"> <img className="center" src={`${process.env.PUBLIC_URL}/landing_assets/send-xrp.svg`} /></div>
            <div className="row  mt-4">
                <div className="col-12 center title">Send XRP</div>
                <div className="col-12 center subtitle mt-3">Please fill the required fields, to send XRP:</div>
            </div>
            <div className="row  mt-5">
            <SpinnerContainer >
                <Formik

                    validationSchema={schema}
                    initialValues={{
                        sourceAddress:'',
                        privatekey: '',
                        destWallet: '',
                        amount: 0,
                        destTag: ''
                    }}
                    validate={values => {
                        const errors = {};



                        return errors;
                    }}
                    onSubmit={(values) => {

                        handleSendClick(values);
                    
                    }}


                >
                    {({
                        handleSubmit,
                        handleChange,
                        handleBlur,
                        values,
                        isValid,
                        errors,
                    }) => (<Form noValidate onSubmit={handleSubmit}  className="custom-form center col-12 col-sm-11 col-md-8">


{    error != null ?  (<div class="alert alert-danger" role="alert">
                                                          {error}
                                                       </div>):  null}
                                                       <FormGroup controlId="validationFormikesourceAddress">
                            <FormLabel>Your Wallet Address</FormLabel>
                            <FormControl type="text"
                                name="privatekey"
                                className="form-control form-input"
                                value={values.sourceAddress}
                                
                                rows="3"
                                onChange={handleChange}
                                isInvalid={!!errors.sourceAddress} />
                            <FormControlFeedback type="invalid">
                                {errors.sourceAddress}
                            </FormControlFeedback>
                           
                        </FormGroup>

                        <FormGroup controlId="validationFormikePrivatekey">
                            <FormLabel>Private Key</FormLabel>
                            <FormControl type="text"
                                name="privatekey"
                                className="form-control form-input"
                                value={values.privatekey}
                                as="textarea"
                                rows="3"
                                onChange={handleChange}
                                isInvalid={!!errors.privatekey} />
                            <FormControlFeedback type="invalid">
                                {errors.privatekey}
                            </FormControlFeedback>
                            <FormText className="text-muted">
                            this is your private key.do not share it with anyone.
                                                     </FormText>
                        </FormGroup>

                        <FormGroup controlId="validationFormikedstWallet">
                            <FormLabel>Destination wallet</FormLabel>
                            <FormControl type="text"
                                name="destWallet"
                                className="form-control form-input"
                                value={values.destWallet}
                                required
                                onChange={handleChange}
                                isInvalid={!!errors.destWallet} />
                            <FormControlFeedback type="invalid">
                                {errors.destWallet}
                            </FormControlFeedback>
                            <FormText className="text-muted">
                                this is the recievers wallet address.
                                                     </FormText>
                        </FormGroup>

                        <FormGroup controlId="validationFormikeAmount">
                            <FormLabel>Amount</FormLabel>
                            <FormControl type="text"
                                name="amount"
                                className="form-control form-input"
                                value={values.amount}
                                required
                                onChange={handleChange}
                                isInvalid={!!errors.amount} />
                            <FormControlFeedback type="invalid">
                                {errors.amount}
                            </FormControlFeedback>
                            <FormText className="text-muted">
                              this is the amount of XRP to send
                                                     </FormText>
                        </FormGroup>

                        <FormGroup controlId="validationFormikedestTag">
                            <FormLabel>Destination Tag</FormLabel>
                            <FormControl type="text"
                                name="destTag"
                                className="form-control form-input"
                                value={values.destTag}
                                onChange={handleChange}
                                isInvalid={!!errors.destTag} />
                            <FormControlFeedback type="invalid">
                                {errors.destTag}
                            </FormControlFeedback>
                       
                            <FormText className="text-muted">
                             becarefull about the destination tag
                                                     </FormText>
                        </FormGroup>
                        <Button variant="primary" type="submit" className="w-100 mt-4"   >
                            Send XRP
                                          </Button>



                    </Form>)}
                </Formik>
                </SpinnerContainer>
            </div>

        </div>




    );
};

export default SendXrpPage;
