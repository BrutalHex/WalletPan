'use strict';
import React, { FunctionComponent } from 'react';
import { connect, ConnectedProps } from 'react-redux';
import Form from 'react-bootstrap/Form';

import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import * as yup from 'yup';
import { NewXrpWallet } from './CreateNewWalletPageAction';
import { RootState } from '../../../base/reducers';
import { WalletThunkDispatch } from '../../../base/BaseTypes';

const RippleAPI = require('ripple-lib').RippleAPI;

const api = new RippleAPI();

const CreateNewWalletPage: FunctionComponent<CreatNewWalletPageProps> = (
  props: CreatNewWalletPageProps
) => {
  const schema = yup.object({
    publickey: yup.string(),

    privatekey: yup.string(),
  });

  return (
    <div className="col-12 col-sm-12 col-md-10 col-lg-8  col-xl-8 single-well my-md-5 my-sm-0 py-4 p-md-5 center">
      <div className="row">
        {' '}
        <img
          className="center"
          src={`${process.env.PUBLIC_URL}/landing_assets/create-wallet.svg`}
        />
      </div>
      <div className="row  mt-4">
        <div className="col-12 center title">Create New Wallet</div>
        <div className="col-12 center subtitle mt-3">
          Please fill the following fields, to create your wallet:
        </div>
      </div>
      <div className="row  mt-5">
        <Formik
          validationSchema={schema}
          initialValues={{
            publickey: props.publickey,
            privatekey: props.privatekey,
          }}
          validate={(values) => {
            const errors = {};

            return errors;
          }}
          onSubmit={(values) => {
            props.doGenerateKeys();
          }}
        >
          {({ handleSubmit, handleChange, handleBlur, values, isValid, errors }) => (
            <Form
              className="custom-form center col-12 col-sm-11 col-md-8"
              onSubmit={(event: React.FormEvent<HTMLFormElement>): void => {
                event.preventDefault();
                handleSubmit(event);
              }}
            >
              <Form.Group controlId="formBasicAddress">
                <Form.Label>Address</Form.Label>
                <Form.Control
                  disabled
                  name="publickey"
                  value={props.publickey}
                  className="form-input"
                  type="text"
                  placeholder=""
                />
                <Form.Text className="text-muted">this is your public address.</Form.Text>
              </Form.Group>

              <Form.Group controlId="formBasicPrivate">
                <Form.Label>Private Key</Form.Label>

                <Form.Control
                  name="privatekey"
                  value={props.privatekey}
                  disabled
                  as="textarea"
                  className="form-input"
                  type="text"
                  rows={3}
                />
                <Form.Text className="text-muted">
                  this is your private key.do not share it with anyone.
                </Form.Text>
              </Form.Group>

              <Button variant="primary" type="submit" className="w-100 mt-4">
                Generate
              </Button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

const mapStateToProps = (state: RootState) => {
  if (state.genKey) {
    var add = api.generateXAddress();
    return {
      privatekey: add.secret,
      publickey: add.xAddress,
    };
  }

  return {
    privatekey: '',
    publickey: '',
  };
};
const mapDispatchToProps = (dispatch: WalletThunkDispatch) => {
  return {
    doGenerateKeys: () => {
      dispatch(NewXrpWallet());
    },
  };
};

const connector = connect(mapStateToProps, mapDispatchToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export interface CreatNewWalletPageProps extends PropsFromRedux {
  publickey: string;
  privatekey: string;
  doGenerateKeys(): void;
}

const CreateNewWalletPageContainer = connector(CreateNewWalletPage);
export default CreateNewWalletPageContainer;
