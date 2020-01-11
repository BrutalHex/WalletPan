
'use strict';
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
import XrpTransactionBox from '../../components/XrpTransactionBox';
import PagerBox from '../../components/PagerBox';
import {getRippleAccountTransactions,getRippleAccountInfo} from '../../base/RippleManagement';
import { getByDisplayValue } from '@testing-library/react';


class ExploreWallet extends React.Component {

  

    constructor(props) {

        super(props);

       
        if(this.state==undefined)
           this.state = { currentPage: 1, pagesize: 5, WalletInformation: {result:{account_data:{Sequence:0,Balance:0}}},transactionList:[],isFetching:false,



        Address:"rHyUoMLtefJxVnrCsvDHFAynqQ6x4VzF8f" };
        this.handleClick = this.handleClick.bind(this)

        this.pageChanged = this.pageChanged.bind(this);
        
        this.handleChange = this.handleChange.bind(this);


        this.input = React.createRef();
    }
    pageChanged(currentPageNumber, pagesize) {

        this.setState((state) => { return Object.assign({}, state, { ...state, currentPage: currentPageNumber,pagesize: pagesize }); });

    }



    handleChange(e) {

        this.setState((state) => { return Object.assign({}, state, { ...state,Address: e.target.value }); });
   
    }




    getTransactions(index,type, amount, walletOwner, transactionDate, destTag, fee, transactionHash) {

        let obj=
          {
            index:index,
            type: type,
            amount: amount,
            walletOwner: walletOwner,
            transactionDate: transactionDate.toDateString(),
            transactionTime: transactionDate.toLocaleTimeString(),
            destTag: destTag,
            fee: fee,
            transactionHash: transactionHash
        }

   
   return obj;

    };


 

handleClick(e) {
    e.preventDefault();
 
          this.getAccountInfo();

}

getAccountInfo()
{


   getRippleAccountInfo(this.state.Address).then(response=>{


        this.recievedAcountInfo(response);
 });
 
}

getAccountTransactions(){
     getRippleAccountTransactions(this.state.Address).then(response=>{


  
           
        this.recievedTransactions(response);
 });
}

recievedAcountInfo(info)
{ 
   
    this.setState((state) => { return Object.assign({}, state, { ...state,isFetching: false, WalletInformation:info }); }  );
  
this.getAccountTransactions();
}
recievedTransactions(trx)
{
 
    const transactionList = [];
 
    
    trx.result.transactions.map((item,index)=>
    {

                     


                        if(item.tx.TransactionType=='Payment')     
                        {  
                                transactionList.push(this.getTransactions(
                                                      item.tx.ledger_index,
                                                      item.tx.Destination==this.state.Address ? 'INCOME':'EXPENSE' ,
                                                       item.tx.Amount.value != undefined ?  item.tx.Amount.value+'('+item.tx.Amount.currency+')' :  item.tx.Amount , 
                                                       'OKEX', 
                                                        new Date((item.tx.date+946684800) * 1000),
                                                        0 , item.tx.Fee, item.tx.hash));  
                        }                            
            
    }
    );
    

    this.setState((state) => { return Object.assign({}, state, {...state,currentPage:1, isFetching: false,transactionList :transactionList   }); }  );



}

errorHappened(err)
{
  
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
                                    <div className="input-group col-12  wallet-bar p-2">
                                        
                                           <FormControl                                               
                                               type="text"
                                               name="destWallet"
                                             defaultValue={this.state.Address}
                                               className="w-100"    
                                               ref={this.input}                                        
                                           />
                                          
                                           <div className="input-group-append">
                                               <span className="input-group-text click-able"   onClick={this.handleClick}>   
                                                 <img src={`${process.env.PUBLIC_URL}/landing_assets/refreshbutton.svg`}/>
                                               </span>
                                           </div>
                                       </div>
                                       <a href="https://xrpcharts.ripple.com/#/transactions" target="_blank"></a>
                                    </div>
                                    <div className="col-12 mt-4 p-2">
                                        <div className="row d-flex justify-content-between">
                                            <div className="col-12 col-sm-12 col-md-8 left-section">
                                                <div className="col-12">
                                                    <FormGroup controlId="formBasic">
                                                        <FormLabel  >Squence :</FormLabel>
                                                        <FormControl plaintext readOnly defaultValue={this.state.WalletInformation.result.account_data.Sequence} />
                                                        
                                                    </FormGroup>
                                                </div>
                                                <div className="col-12 mt-4">
                                                    <FormGroup controlId="formBasicDate">
                                                        <FormLabel  >Activation Date:</FormLabel>
                                                        <FormControl plaintext readOnly defaultValue={this.state.transactionList.length>0 ? this.state.transactionList[0].transactionDate +' '+this.state.transactionList[0].transactionTime : ''} />
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
        <div className="col-7 text-right">{this.state.WalletInformation.result.account_data.Balance}</div>
                                    </div>
                                    <div className="row other mt-2">
                                        <div className="col-5 text-left">Reserved</div>
                                        <div className="col-7 text-right">20</div>
                                    </div>
                                    <div className="row other  mt-2">
                                        <div className="col-5 text-left">Available</div>
        <div className="col-7  text-right">{(this.state.WalletInformation.result.account_data.Balance-20)}</div>
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
                                            <div className="col-6">11207.32</div>
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
                                            <div className="col-6">4130.00</div>
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
                              <b className="font-weight-bolder px-2">{this.state.transactionList.length}</b> transactions
                        </div>


                                </div>
                            </div>
                            <div className="col-11 col-sm-10 col-md-10 col-xl-10 center transaction-bar mt-xs-0 mt-sm-0 mt-md-4">

                                {listItems}

                            </div>
                            <div className="col-11 col-sm-10 col-md-10 col-xl-10 center transaction-pager  mt-5 pt-5">

                                <PagerBox recordCount={this.state.transactionList.length} pageSize={this.state.pagesize} loadNext={this.pageChanged}></PagerBox>


                            </div>
                        </div>
                    </div>
                </div>
            </div>


        );
    };
}

export default ExploreWallet;