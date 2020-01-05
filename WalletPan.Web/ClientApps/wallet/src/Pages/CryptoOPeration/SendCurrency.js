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



const SendCurrency = ({ classes }) => {

    const schema = yup.object({



        privatekey: yup.string().trim().required('private key is required'),
        destWallet: yup.string().trim().required('Destination wallet is required'),
        amount: yup.number().min(0).required('Amount is required'),
        destTag: yup.string().trim()
    });


    return (

        <div className="col-12 col-sm-12 col-md-10 col-lg-8  col-xl-8 single-well my-md-5 my-sm-0 py-4 p-md-5 center">

            <div className="row"> <img className="center" src={`${process.env.PUBLIC_URL}/landing_assets/send-xrp.svg`} /></div>
            <div className="row  mt-4">
                <div className="col-12 center title">Send XRP</div>
                <div className="col-12 center subtitle mt-3">Please fill the required fields, to send XRP:</div>
            </div>
            <div className="row  mt-5">
                <Formik
                    validationSchema={schema}
                    initialValues={{

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
                    }) => (<Form noValidate onSubmit={handleSubmit}  className="custom-form center col-12 col-sm-11 col-md-8">


                       

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
            </div>

        </div>




    );
};

export default SendCurrency;