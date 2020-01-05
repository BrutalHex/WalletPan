import React, { Component } from 'react';
import Form from 'react-bootstrap/Form';
import FormGroup from 'react-bootstrap/FormGroup';
import FormLabel from 'react-bootstrap/FormLabel';
import FormControl from 'react-bootstrap/FormControl';
import FormText from 'react-bootstrap/FormText';
import Button from 'react-bootstrap/Button';
import { Formik, Field } from 'formik';
import * as yup from 'yup';
import Dropdown from 'react-bootstrap/Dropdown';
import XrpTransactionBox from '../components/XrpTransactionBox';
import PagerBox from '../components/PagerBox';

 class ExploreWallet extends React.Component {


        constructor(props) {

            super(props);
            this.state = {currentPage: 1};
            this.pageChanged = this.pageChanged.bind(this);

        }
        pageChanged(number)
        {
            this.setState(state => ({
                currentPage: number
              }));


        
        }
          getTransactions(typpe,amount,walletOwner,transactionDate,transactionTime,destTag,fee,transactionHash)
        {
          return {
           typpe:typpe,
           amount:amount,
           walletOwner:walletOwner,
           transactionDate:transactionDate,
           transactionTime:transactionTime,
           destTag:destTag,
           fee:fee,
           transactionHash:transactionHash
          }
   
        };
        
    
        render() {
    
    const wallet = "ra6o6bQrreXzYEaTQmwk8pd1ZEfgExjHxf";
    const userName = "sample name";
    const ActivationDate = "2019-JAN-01 18:40";

    const transactionList=[
    
        this.getTransactions('EXPENSE',1000,'Bitfinix','2020-01-01','01:10',2105,0.0000012,'25DA228BDE8107ACF543C7310BCAD07939F675BA2EC939BAF6AA3890A173C37D'),
        this.getTransactions('INCOME',200,'OKEX','2020-01-01','03:10',2105,0.0000012,'25DA228BDE8107ACF543C7310BCAD07939F675BA2EC939BAF6AA3890A173C37D'),
        this.getTransactions('INCOME',900,'Bitfinix','2020-01-02','07:11',3105,0.0000012,'25DA228BDE8107ACF543C7310BCAD07939F675BA2EC939BAF6AA3890A173C37D'),
        this.getTransactions('INCOME',200,'Bitfinix','2020-01-01','01:10',2105,0.0000012,'25DA228BDE8107ACF543C7310BCAD07939F675BA2EC939BAF6AA3890A173C37D'),
        this.getTransactions('INCOME',200,'Bitfinix','2020-01-01','01:10',2105,0.0000012,'25DA228BDE8107ACF543C7310BCAD07939F675BA2EC939BAF6AA3890A173C37D'),
    ];
    
    
   
          
       const listItems = transactionList.map((item, index) => {
          return    <XrpTransactionBox key={"key"+item.transactionHash}  item={item} index={index} />;
       }  );
                         
     
     

    return (


    




        <div className="row wallet-explore">


            <div className="col-12 col-sm-12 col-md-10 col-lg-8  col-xl-8 single-well my-md-5 my-sm-0 py-4 p-md-5 center">

                <div className="row top-part p-5">
                    <div className="col-12 title mt-4">
                        My Wallet
                  </div>
                    <div className="col-12 wallet-bar mt-4 p-2">
                        {wallet}
                    </div>
                    <div className="col-12 mt-4 p-2">
                        <div className="row">
                            <div className="col-12 col-sm-12 col-md-8 left-section">
                                <div className="row">
                                    <FormGroup controlId="formBasic">
                                        <FormLabel  >Username:</FormLabel>
                                        <FormControl plaintext readOnly defaultValue={userName} />

                                    </FormGroup>
                                </div>
                                <div className="row mt-4">
                                    <FormGroup controlId="formBasicDate">
                                        <FormLabel  >Activation Date:</FormLabel>
                                        <FormControl plaintext readOnly defaultValue={ActivationDate} />
                                    </FormGroup>
                                </div>
                            </div>
                            <div className="col-12 col-sm-12 col-md-4 right-section">
                                <img className="w-100 mt-2" src={`${process.env.PUBLIC_URL}/landing_assets/barcode.svg`} />
                                <Button variant="primary" type="submit" className="w-100 mt-2"   >
                                    Share
                                          </Button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="row main-info p-4 mt-n5">
                    <div className="col-12 title pb-5"  >

                        BALANCES
                        </div>
                    <div className="col-12 balance-info">
                        <div className="row main-balance-info">
                            <div className="col-4 text-left">
                                <img width="17" height="17" src={`${process.env.PUBLIC_URL}/landing_assets/small-xpr-icon.svg`} /> XRP
                                </div>
                            <div className="col-8 text-right">7000</div>
                        </div>
                        <div className="row other">
                            <div className="col-4 text-left">Reserved</div>
                            <div className="col-8 text-right">20</div>
                        </div>
                        <div className="row other">
                            <div className="col-4 text-left">Available</div>
                            <div className="col-8  text-right">68000</div>
                        </div>
                    </div>
                </div>
                <div className="row summary"  >
                    <div className="col-12 col-md-5 float-md-left p-3">
                        <div className="row">
                            <img width="17" height="17" src={`${process.env.PUBLIC_URL}/landing_assets/income-icon.svg`} />
                            INCOME
                          </div>
                        <div className="row mt-4">
                            <div className="col-6">  <img width="17" height="17" src={`${process.env.PUBLIC_URL}/landing_assets/white-xpr-icon-s.svg`} /> XRP</div>
                            <div className="col-6">11207.32</div>
                        </div>

                    </div>
                    <div className="col-12 col-md-5 float-md-right p-3">
                        <div className="row">
                            <img width="17" height="17" src={`${process.env.PUBLIC_URL}/landing_assets/expense-icon.svg`} />
                            EXPENSE
                          </div>
                        <div className="row mt-4">
                            <div className="col-6">  <img width="17" height="17" src={`${process.env.PUBLIC_URL}/landing_assets/white-xpr-icon-s.svg`} /> XRP</div>
                            <div className="col-6">4130.00</div>
                        </div>

                    </div>

                </div>
                <div className="row transaction-config mt-4"  >
                    <div className="col-12">
                        <div className="row">
                            <div className="col-12 col-md-6 text-left title">
                                TRANSACTIONS
                               </div>
                            <div className="col-12 col-md-6 text-right">
                                <Dropdown  >
                                    <Dropdown.Toggle  >All types</Dropdown.Toggle>
                                    <Dropdown.Menu>
                                        <Dropdown.Item>opt 1</Dropdown.Item>
                                        <Dropdown.Item>opt 2</Dropdown.Item>
                                        <Dropdown.Item>opt 3</Dropdown.Item>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        </div>
                        <div className="row mode-check-boex mt-3 d-flex justify-content-around">
                            {['checkbox'].map(type => (
                                <div key={`inline-${type}`} className="mb-3">
                                    <Form.Check inline label="Oldest First" type={type} id={`inline-${type}-1`} />
                                    <Form.Check inline label="Initiated" type={type} id={`inline-${type}-2`} />
                                    <Form.Check
                                        inline
                                        disabled
                                        label="Counterparty"
                                        type={type}
                                        id={`inline-${type}-3`}
                                    />
                                </div>
                            ))}
                        </div>
                        <div className="row paging-info-bar text-left">
                            <b>1-5 </b>of <b>26</b> transactions
                        </div>
                       
                    </div> 
                  
                </div>  
                <div className="row transaction-bar mt-4">
                      
                     {listItems}
                 
                </div>
                <div className="row transaction-pager  mt-5 pt-5">
                       
                <PagerBox  recordCount={transactionList.length} pageCount={ this.state.currentPage} loadNext={this.pageChanged}></PagerBox>


                </div>
            </div>

        </div>


    );
};
 }

export default ExploreWallet;