import React, { FunctionComponent } from 'react';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import SpinnerContainer from '../../../components/Spinner/Spinner';
import { SendXrpPageProps } from './SendXrpPageContainer';

const SendXrpPage: FunctionComponent<SendXrpPageProps> = (props: SendXrpPageProps) => {
  const schema = yup.object({
    sourceAddress: yup.string().trim().required('source wallet is required'),
    privatekey: yup.string().trim().required('private key is required'),
    destWallet: yup.string().trim().required('Destination wallet is required'),
    amount: yup.number().min(0.0000000001).required('Amount is required'),
    destTag: yup.number().min(0),
  });

  return (
    <div className="col-12 col-sm-12 col-md-10 col-lg-8  col-xl-8 single-well my-md-5 my-sm-0 py-4 p-md-5 center">
      <div className="row">
        {' '}
        <img className="center" src={`${process.env.PUBLIC_URL}/landing_assets/send-xrp.svg`} />
      </div>
      <div className="row  mt-4">
        <div className="col-12 center title">Send XRP</div>
        <div className="col-12 center subtitle mt-3">
          (Not Ready yet) Please fill the required fields, to send XRP:
        </div>
      </div>
      <div className="row  mt-5">
        <SpinnerContainer>
          <Formik
            validationSchema={schema}
            initialValues={{
              sourceAddress: 'rPKNyZZw8aRftQaMKXuFgN4wjiQiUQedun',
              privatekey: 'ssaeobTUiychy1ZKThXenPvNApKeW',
              destWallet: 'rp7aJ1jEodogNeDdoFokzTg6quWe3sQ6BY',
              amount: 15,
              destTag: '',
            }}
            validate={(values) => {
              const errors = {};

              return errors;
            }}
            onSubmit={(values) => {
              props.handleSendClick(values);
            }}
          >
            {({ handleSubmit, handleChange, handleBlur, values, isValid, errors }) => (
              <Form
                noValidate
                onSubmit={(event: React.FormEvent<HTMLFormElement>): void => {
                  event.preventDefault();
                  handleSubmit(event);
                }}
                className="custom-form center col-12 col-sm-11 col-md-8"
              >
                {props.error != null ? (
                  <div className="alert alert-danger" role="alert">
                    {props.error}
                  </div>
                ) : null}
                <Form.Group controlId="validationFormikesourceAddress">
                  <Form.Label>Your Wallet Address</Form.Label>
                  <Form.Control
                    type="text"
                    name="sourceAddress"
                    className="form-control form-input"
                    value={values.sourceAddress}
                    onChange={handleChange}
                    isInvalid={!!errors.sourceAddress}
                  />
                  <Form.Control.Feedback type="invalid">
                    {errors.sourceAddress}
                  </Form.Control.Feedback>
                </Form.Group>

                <Form.Group controlId="validationFormikePrivatekey">
                  <Form.Label>Private Key</Form.Label>
                  <Form.Control
                    type="text"
                    name="privatekey"
                    className="form-control form-input"
                    value={values.privatekey}
                    as="textarea"
                    onChange={handleChange}
                    isInvalid={!!errors.privatekey}
                  />
                  <Form.Control.Feedback type="invalid">{errors.privatekey}</Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    this is your private key.do not share it with anyone.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="validationFormikedstWallet">
                  <Form.Label>Destination wallet</Form.Label>
                  <Form.Control
                    type="text"
                    name="destWallet"
                    className="form-control form-input"
                    value={values.destWallet}
                    required
                    onChange={handleChange}
                    isInvalid={!!errors.destWallet}
                  />
                  <Form.Control.Feedback type="invalid">{errors.destWallet}</Form.Control.Feedback>
                  <Form.Text className="text-muted">
                    this is the recievers wallet address.
                  </Form.Text>
                </Form.Group>

                <Form.Group controlId="validationFormikeAmount">
                  <Form.Label>Amount</Form.Label>
                  <Form.Control
                    type="text"
                    name="amount"
                    className="form-control form-input"
                    value={values.amount}
                    required
                    onChange={handleChange}
                    isInvalid={!!errors.amount}
                  />
                  <Form.Control.Feedback type="invalid">{errors.amount}</Form.Control.Feedback>
                  <Form.Text className="text-muted">this is the amount of XRP to send</Form.Text>
                </Form.Group>

                <Form.Group controlId="validationFormikedestTag">
                  <Form.Label>Destination Tag</Form.Label>
                  <Form.Control
                    type="number"
                    name="destTag"
                    className="form-control form-input"
                    value={values.destTag}
                    onChange={handleChange}
                    isInvalid={!!errors.destTag}
                  />
                  <Form.Control.Feedback type="invalid">{errors.destTag}</Form.Control.Feedback>

                  <Form.Text className="text-muted">becarefull about the destination tag</Form.Text>
                </Form.Group>
              </Form>
            )}
          </Formik>
        </SpinnerContainer>
      </div>
    </div>
  );
};

export default SendXrpPage;
