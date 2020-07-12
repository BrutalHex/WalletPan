
'use strict';
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

const ExploreWalletPage = ({ transactionList,  walletInformation ,handleChange ,pageChanged,error,currentPage,pagesize}) =>{


    const schema = yup.object({

        address: yup.string()          
            .required('Address is required!')
      

    });
 
     
       
    let paged=transactionList.slice( ( currentPage-1)*  pagesize,(( currentPage-1)*  pagesize)+ pagesize);
  
        const listItems = paged.map((item, index) => {
 
 
 
             return <XrpTransactionBox key={"key" + item.index} item={item} index={item.index} />;
         }); 
 
         let from = ( currentPage - 1) * ( pagesize)
         if (from == 0)
             from = 1;
         const to = ((currentPage - 1) * (pagesize)) + pagesize;
 

   
     
 
 

    return (


        <div className="col-12 wallet-explore">
            <div className="row">



                <div className="col-12 col-sm-12 col-md-10 col-lg-8  col-xl-5 single-well my-md-5 my-sm-0 pb-4  center">
                    <div className="row">


                        <div className="col-12 top-part p-xs-1 p-sm-4 p-md-5">
                            <div className="row">


                                <div className="col-12 title mt-2">
                                    My Wallet (Ripple Test Net)
                               </div>
                                <div className="col-12 mt-4 ">
                                <SpinnerContainer >
                                <Formik
                                        validationSchema={schema}
                                        initialValues={{
                                            address: 'rPKNyZZw8aRftQaMKXuFgN4wjiQiUQedun',
                                        

                                        }}
                                        validate={values => {
                                            const errors = {};



                                            return errors;
                                        }}
                                        onSubmit={(values) => {


                                            handleChange(values);
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
                                                <Form noValidate onSubmit={handleSubmit} className="custom-form center needs-validation"  >

                                                        {    error != null ?  (<div class="alert alert-danger" role="alert">
                                                          {error}
                                                       </div>):  null}


                                                       <FormGroup controlId="validationFormikaddress" className="mb-2">
                                                       <div className={"input-group col-12  wallet-bar p-2 "+ (!!errors.email ? "invalid-input" : "")}>
                                                       <FormControl                                               
                                           type="text"
                                           className="form-control form-input"
                                           name="address"
                                           value={values.address}
                                           className="w-100"    
                                           required
                                           onChange={handleChange}
                                           isInvalid={!!errors.email}
                                           placeholder="Wallet Address"                      
                                       />
                                      
                                       <div className="input-group-append">
                                           <span className="input-group-text click-able"   onClick={handleSubmit}>   
                                             <img src={`${process.env.PUBLIC_URL}/landing_assets/refreshbutton.svg`}/>
                                           </span>
                                       </div>

                                                           </div>
                                                           <FormControlFeedback type="invalid">
                                                            {errors.address}
                                                        </FormControlFeedback>



                                                    </FormGroup>
                                                </Form>
                                            )}
                                    </Formik>
                                    </SpinnerContainer>
                            
                                  
                                </div>
                                <div className="col-12 mt-4 p-2">
                                    <div className="row d-flex justify-content-between">
                                        <div className="col-12 col-sm-12 col-md-8 left-section">
                                            <div className="col-12">
                                                <FormGroup controlId="formBasic">
                                                    <FormLabel  >Squence :</FormLabel>
                                                    <FormControl plaintext readOnly defaultValue={walletInformation.result.account_data.Sequence} />
                                                    
                                                </FormGroup>
                                            </div>
                                            <div className="col-12 mt-4">
                                                <FormGroup controlId="formBasicDate">
                                                    <FormLabel  >Activation Date:</FormLabel>
                                                    <FormControl plaintext readOnly defaultValue={transactionList.length>0 ? transactionList[0].transactionDate +' '+transactionList[0].transactionTime : ''} />
                                                </FormGroup>
                                            </div>
                                        </div>
                                        <div className="col-12 col-sm-12 col-md-2 right-section p-2 mr-xs-0 mr-sm-0 mr-md-3">
                                            <div className="row">
                                                   <div className="col-12"   >
                                                   <img className="w-100 mt-2" src={`${process.env.PUBLIC_URL}/landing_assets/barcode.svg`} />
                                                       </div> 
                                            </div>
                                            <div className="row mt-2">
                                                <div className="col-12">
                                                       <Button variant="primary" type="submit" className="center"   >
                                                Share
                                      </Button>
                                                </div>
                                                
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-11 col-sm-10 col-md-10 col-xl-10 main-info p-xs-1 p-sm-1 p-md-3 p-xl-5 mt-md-n5 center">
                            <div className="col-12 title pb-3"  >

                                BALANCES
                    </div>
                            <div className="col-12 balance-info mt-3">
                                <div className="row main-balance-info">
                                    <div className="col-5 text-left img-text">
                                        <img width="17" height="17" src={`${process.env.PUBLIC_URL}/landing_assets/small-xpr-icon.svg`} /> XRP
                        </div>
    <div className="col-7 text-right">{ (walletInformation.result.account_data.Balance/1000000)}</div>
                                </div>
                                <div className="row other mt-2">
                                    <div className="col-5 text-left">Reserved</div>
                                    <div className="col-7 text-right">20</div>
                                </div>
                                <div className="row other  mt-2">
                                    <div className="col-5 text-left">Available</div>
    <div className="col-7  text-right">{((walletInformation.result.account_data.Balance/1000000)-20)}</div>
                                </div>
                            </div>
                        </div>
                        <div className="col-11 col-sm-10 col-md-10 col-xl-10 center mt-4 summary"  >
                            <div className="row d-flex justify-content-between">
                                <div className="col-12 col-md-5 mt-3 p-4 income">
                                    <div className="row">
                                        <div className="col-12 img-text">
                                            <img width="17" height="17" src={`${process.env.PUBLIC_URL}/landing_assets/income-icon.svg`} />
                                            INCOME
                        </div>

                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-6 img-text">  <img width="17" height="17" src={`${process.env.PUBLIC_URL}/landing_assets/white-xpr-icon-s.svg`} /> XRP</div>
                                        <div className="col-6">{walletInformation.income}</div>
                                    </div>

                                </div>
                                <div className="col-12 col-md-5 mt-3 p-4 expense">
                                    <div className="row">
                                        <div className="col-12 img-text">
                                            <img width="17" height="17" src={`${process.env.PUBLIC_URL}/landing_assets/expense-icon.svg`} />
                                            EXPENSE
                        </div>

                                    </div>
                                    <div className="row mt-4">
                                        <div className="col-6 img-text">  <img width="17" height="17" src={`${process.env.PUBLIC_URL}/landing_assets/white-xpr-icon-s.svg`} /> XRP</div>
                                        <div className="col-6">{walletInformation.expense}</div>
                                    </div>

                                </div>
                            </div>
                        </div>
                        <div className="col-11 col-sm-10 col-md-10 col-xl-10 center transaction-config mt-4"  >
                            <div className="row">

                                <div className="col-12">
                                    <div className="row d-flex justify-content-between">
                                        <div className="col-12 col-sm-9 col-md-6 text-left title">
                                            TRANSACTIONS
                                        </div>
                                        <div className="col-12 col-sm-3 col-md-6 text-right">
                                            <Dropdown  >
                                                <Dropdown.Toggle   >All types</Dropdown.Toggle>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>INCOME</Dropdown.Item>
                                                    <Dropdown.Item>EXPENSE</Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-11 center mode-check-box mt-3 p-2 d-flex justify-content-around">


                                    <Form.Check inline disabled label="Oldest First" type='checkbox' id='ch1' />
                                    <Form.Check inline disabled label="Initiated" type='checkbox' id='ch2' />
                                    <Form.Check
                                        inline
                                        disabled
                                        label="Counterparty"
                                        type='checkbox'
                                        id='ch3'
                                    />


                                </div>
                                <div className="col-12 paging-info-bar pt-3 text-left">


                                    <b className="font-weight-bolder px-2">{from}-{to} </b>of
                          <b className="font-weight-bolder px-2">{ transactionList.length}</b> transactions
                    </div>


                            </div>
                        </div>
                        <div className="col-11 col-sm-10 col-md-10 col-xl-10 center transaction-bar mt-xs-0 mt-sm-0 mt-md-4">

                           {listItems} 

                        </div>
                        <div className="col-11 col-sm-10 col-md-10 col-xl-10 center transaction-pager  mt-5 pt-5">

                            <PagerBox recordCount={transactionList.length} pageSize={pagesize} loadNext={pageChanged}></PagerBox>


                        </div>
                    </div>
                </div>
            </div>
        </div>


    );


}

/*
ExploreWalletPage.propTypes = {
 
    onGetTransacionBtnClicked: PropTypes.func.isRequired,
    onTransactionTextBoxChanged: PropTypes.func.isRequired,
    transactionList:  PropTypes.arrayOf(
        PropTypes.shape({
          id: PropTypes.number.isRequired,
          completed: PropTypes.bool.isRequired,
          text: PropTypes.string.isRequired
        })
      )
  }
  

 



 
 
    


    render() {

      
       

       
let currentState=this.state;
       
   let paged=currentState.transactionList.slice( (currentState.currentPage-1)* currentState.pagesize,((currentState.currentPage-1)* currentState.pagesize)+currentState.pagesize);

        const listItems = paged.map((item, index) => {



            return <XrpTransactionBox key={"key" + item.index} item={item} index={item.index} />;
        });

        let from = (currentState.currentPage - 1) * (currentState.pagesize)
        if (from == 0)
            from = 1;
        const to = ((currentState.currentPage - 1) * (currentState.pagesize)) + currentState.pagesize;


  
    };
}


*/


export default ExploreWalletPage;