'use strict';
import React, { FunctionComponent } from 'react';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import XrpTransactionBox from '../../../components/XrpTransactionBox';
import PagerBox from '../../../components/PagerBox';
import { Formik } from 'formik';
import * as yup from 'yup';
import SpinnerContainer from '../../../components/Spinner/Spinner';
import { ExploreWalletPageProps } from './ExploreWalletPageContainer';

const ExploreWalletPage: FunctionComponent<ExploreWalletPageProps> = (
  props: ExploreWalletPageProps
) => {
  const schema = yup.object({
    address: yup.string().required('Address is required!'),
  });

  const paged = props.transactionList.slice(
    (props.currentPage - 1) * props.pagesize,
    (props.currentPage - 1) * props.pagesize + props.pagesize
  );

  const totalIncome = props.transactionList
    .filter((tr) => tr.type === 'INCOME')
    .reduce(function (result, item) {
      return result + (item.amount as number);
    }, 0);

  const totalEXPENSE = props.transactionList
    .filter((tr) => tr.type === 'EXPENSE')
    .reduce(function (result, item) {
      return result + (item.amount as number);
    }, 0);

  const listItems = paged.map((item, index) => {
    return <XrpTransactionBox key={'key' + item.index} item={item} index={item.index} />;
  });

  let from = (props.currentPage - 1) * props.pagesize;
  if (from === 0) from = 1;
  const to = (props.currentPage - 1) * props.pagesize + props.pagesize;

  return (
    <div className="col-12 wallet-explore">
      <div className="row">
        <div className="col-12 col-sm-12 col-md-10 col-lg-8  col-xl-5 single-well my-md-5 my-sm-0 pb-4  center">
          <div className="row">
            <div className="col-12 top-part p-xs-1 p-sm-4 p-md-5">
              <div className="row">
                <div className="col-12 title mt-2">My Wallet (Ripple Test Net)</div>
                <div className="col-12 mt-4 ">
                  <SpinnerContainer>
                    <Formik
                      validationSchema={schema}
                      initialValues={{
                        address: 'rPKNyZZw8aRftQaMKXuFgN4wjiQiUQedun',
                      }}
                      validate={(values) => {
                        const errors = {};

                        return errors;
                      }}
                      onSubmit={(values): void => {
                        props.handleChange(values.address);
                      }}
                    >
                      {({ handleSubmit, handleChange, handleBlur, values, isValid, errors }) => (
                        <Form
                          noValidate
                          onSubmit={(event: React.FormEvent<HTMLFormElement>): void => {
                            event.preventDefault();
                            handleSubmit(event);
                          }}
                          className="custom-form center needs-validation"
                        >
                          {props.error != null ? (
                            <div className="alert alert-danger" role="alert">
                              {props.error}
                            </div>
                          ) : null}

                          <Form.Group controlId="validationFormikaddress" className="mb-2">
                            <div
                              className={
                                'input-group col-12  wallet-bar p-2 ' +
                                (!errors.address ? 'invalid-input' : '')
                              }
                            >
                              <Form.Control
                                type="text"
                                className="form-control form-input w-100"
                                name="address"
                                value={values.address}
                                required
                                onChange={handleChange}
                                isInvalid={!!errors.address}
                                placeholder="Wallet Address"
                              />

                              <div className="input-group-append">
                                <span
                                  className="input-group-text click-able"
                                  onClick={(e) => {
                                    handleSubmit();
                                  }}
                                >
                                  <img
                                    src={`${process.env.PUBLIC_URL}/landing_assets/refreshbutton.svg`}
                                  />
                                </span>
                              </div>
                            </div>
                            <Form.Control.Feedback type="invalid">
                              {errors.address}
                            </Form.Control.Feedback>
                          </Form.Group>
                        </Form>
                      )}
                    </Formik>
                  </SpinnerContainer>
                </div>
                <div className="col-12 mt-4 p-2">
                  <div className="row d-flex justify-content-between">
                    <div className="col-12 col-sm-12 col-md-8 left-section">
                      <div className="col-12">
                        <Form.Group controlId="formBasic">
                          <Form.Label>Squence :</Form.Label>
                          <Form.Control
                            plaintext
                            readOnly
                            defaultValue={props.walletInformation.Sequence}
                          />
                        </Form.Group>
                      </div>
                      <div className="col-12 mt-4">
                        <Form.Group controlId="formBasicDate">
                          <Form.Label>Activation Date:</Form.Label>
                          <Form.Control
                            plaintext
                            readOnly
                            defaultValue={
                              props.transactionList.length > 0
                                ? props.transactionList[0].transactionDate +
                                  ' ' +
                                  props.transactionList[0].transactionTime
                                : ''
                            }
                          />
                        </Form.Group>
                      </div>
                    </div>
                    <div className="col-12 col-sm-12 col-md-2 right-section p-2 mr-xs-0 mr-sm-0 mr-md-3">
                      <div className="row">
                        <div className="col-12">
                          <img
                            className="w-100 mt-2"
                            src={`${process.env.PUBLIC_URL}/landing_assets/barcode.svg`}
                          />
                        </div>
                      </div>
                      <div className="row mt-2">
                        <div className="col-12">
                          <Button variant="primary" type="submit" className="center">
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
              <div className="col-12 title pb-3">BALANCES</div>
              <div className="col-12 balance-info mt-3">
                <div className="row main-balance-info">
                  <div className="col-5 text-left img-text">
                    <img
                      width="17"
                      height="17"
                      src={`${process.env.PUBLIC_URL}/landing_assets/small-xpr-icon.svg`}
                    />{' '}
                    XRP
                  </div>
                  <div className="col-7 text-right">
                    {props.walletInformation.Balance / 1000000}
                  </div>
                </div>
                <div className="row other mt-2">
                  <div className="col-5 text-left">Reserved</div>
                  <div className="col-7 text-right">20</div>
                </div>
                <div className="row other  mt-2">
                  <div className="col-5 text-left">Available</div>
                  <div className="col-7  text-right">
                    {props.walletInformation.Balance / 1000000 - 20}
                  </div>
                </div>
              </div>
            </div>
            <div className="col-11 col-sm-10 col-md-10 col-xl-10 center mt-4 summary">
              <div className="row d-flex justify-content-between">
                <div className="col-12 col-md-5 mt-3 p-4 income">
                  <div className="row">
                    <div className="col-12 img-text">
                      <img
                        width="17"
                        height="17"
                        src={`${process.env.PUBLIC_URL}/landing_assets/income-icon.svg`}
                      />
                      INCOME
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-6 img-text">
                      {' '}
                      <img
                        width="17"
                        height="17"
                        src={`${process.env.PUBLIC_URL}/landing_assets/white-xpr-icon-s.svg`}
                      />{' '}
                      XRP
                    </div>
                    <div className="col-6">{totalIncome}</div>
                  </div>
                </div>
                <div className="col-12 col-md-5 mt-3 p-4 expense">
                  <div className="row">
                    <div className="col-12 img-text">
                      <img
                        width="17"
                        height="17"
                        src={`${process.env.PUBLIC_URL}/landing_assets/expense-icon.svg`}
                      />
                      EXPENSE
                    </div>
                  </div>
                  <div className="row mt-4">
                    <div className="col-6 img-text">
                      {' '}
                      <img
                        width="17"
                        height="17"
                        src={`${process.env.PUBLIC_URL}/landing_assets/white-xpr-icon-s.svg`}
                      />{' '}
                      XRP
                    </div>
                    <div className="col-6">{totalEXPENSE}</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-11 col-sm-10 col-md-10 col-xl-10 center transaction-config mt-4">
              <div className="row">
                <div className="col-12">
                  <div className="row d-flex justify-content-between">
                    <div className="col-12 col-sm-9 col-md-6 text-left title">TRANSACTIONS</div>
                    <div className="col-12 col-sm-3 col-md-6 text-right">
                      <Dropdown>
                        <Dropdown.Toggle>All types</Dropdown.Toggle>
                        <Dropdown.Menu>
                          <Dropdown.Item>INCOME</Dropdown.Item>
                          <Dropdown.Item>EXPENSE</Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </div>
                <div className="col-11 center mode-check-box mt-3 p-2 d-flex justify-content-around">
                  <Form.Check inline disabled label="Oldest First" type="checkbox" id="ch1" />
                  <Form.Check inline disabled label="Initiated" type="checkbox" id="ch2" />
                  <Form.Check inline disabled label="Counterparty" type="checkbox" id="ch3" />
                </div>
                <div className="col-12 paging-info-bar pt-3 text-left">
                  <b className="font-weight-bolder px-2">
                    {from}-{to}{' '}
                  </b>
                  of
                  <b className="font-weight-bolder px-2">{props.transactionList.length}</b>{' '}
                  transactions
                </div>
              </div>
            </div>
            <div className="col-11 col-sm-10 col-md-10 col-xl-10 center transaction-bar mt-xs-0 mt-sm-0 mt-md-4">
              {listItems}
            </div>
            <div className="col-11 col-sm-10 col-md-10 col-xl-10 center transaction-pager  mt-5 pt-5">
              <PagerBox
                recordCount={props.transactionList.length}
                pageSize={props.pagesize}
                loadNext={props.pageChanged}
              ></PagerBox>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

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
