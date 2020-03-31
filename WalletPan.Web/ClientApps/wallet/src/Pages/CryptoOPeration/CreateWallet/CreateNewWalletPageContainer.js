
'use strict';
import React from 'react';
import { connect } from 'react-redux';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import FormText from 'react-bootstrap/FormText';
import Button from 'react-bootstrap/Button';
import {Formik,Field} from 'formik';
import * as yup from 'yup';
import settings from '../../../base/settings';
import {generateKeys} from './CreateNewWalletPageAction'
  
const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI();








const CreateNewWalletPage = ({ publickey,privatekey,doGenerateKeys }) => {

    const schema = yup.object({

        publickey: yup.string(),
         
        privatekey: yup.string()
            
       
    });


    return (

        <div className="col-12 col-sm-12 col-md-10 col-lg-8  col-xl-8 single-well my-md-5 my-sm-0 py-4 p-md-5 center">

              <div className="row"> <img className="center" src={`${process.env.PUBLIC_URL}/landing_assets/create-wallet.svg`} /></div>
              <div className="row  mt-4">
                  <div className="col-12 center title">Create New Wallet</div>     
                  <div className="col-12 center subtitle mt-3">Please fill the following fields, to create your wallet:</div>    
              </div>
              <div className="row  mt-5"> 
              <Formik
                                    validationSchema={schema}
                                    initialValues={{
                                        publickey: publickey,
                                        privatekey:privatekey,
                                       
                                      }}
                                      validate={values => {
                                        const errors = {};

                                  
                                         
                                        return errors;
                                      }}
                                    onSubmit={(values) => {
                                         
                                                  
                                        doGenerateKeys();
                                       
                                        
                                      }}
                                     

                                >
                                    {({
                                        handleSubmit,
                                        handleChange,
                                        handleBlur,
                                        values,
                                        isValid,
                                        errors,
                                    }) =>  ( <Form className="custom-form center col-12 col-sm-11 col-md-8">
                <FormGroup controlId="formBasicAddress">
                    <FormLabel  >Address</FormLabel>
                    <FormControl disabled
                      name="publickey"
                      value={publickey}
                    className="form-input"   type="text" placeholder="" />
                    <FormText className="text-muted">
                     this is your public address.
                                            </FormText>
                </FormGroup>

                <FormGroup controlId="formBasicPrivate">
                    <FormLabel  >Private Key</FormLabel>
            
                    <FormControl
                     name="privatekey"
                     value={privatekey}
                    disabled as="textarea" className="form-input" type="text" rows="3" />
                    <FormText className="text-muted">
                    this is your private key.do not share it with anyone.
                                            </FormText>
                </FormGroup>

                

                <Button variant="primary" type="submit" className="w-100 mt-4"  onClick={handleSubmit} >
                    Generate
                                          </Button>

               

            </Form>)}
            </Formik>
              </div>
          
        </div>




    );
};
const mapStateToProps = (state, ownProps) => {
  

     if(state.CreateNewWallet.GenKey)
{
        var add=api.generateXAddress();
    return {
              privatekey:add.secret,
        publickey:add.xAddress
    }
}

return {
    privatekey:'',
publickey:''
}


}
const mapDispatchToProps = (dispatch, ownProps) => {
  
   
    return {
 

         
        doGenerateKeys:()=> {

    dispatch( generateKeys());
   
    },
    }
}
const CreateNewWalletPageContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CreateNewWalletPage)
export default CreateNewWalletPageContainer
