import React, { FunctionComponent, useState } from 'react';
import * as yup from 'yup';
import Form from 'react-bootstrap/Form';
import FormCheck from 'react-bootstrap/FormCheckInput';
import FormCheckLabel from 'react-bootstrap/FormCheckLabel';
import Button from 'react-bootstrap/Button';
import { Formik } from 'formik';
import { Spinner } from '../../../components/Spinner/Spinner';
import { SparkPageProps } from './SparkPageContainer';
import Setting from '../../../base/settings';
import SparkMessage from './SparkMessage';
import { getUUID } from '../../../base/baseService';

const RippleAPI = require('ripple-lib').RippleAPI;
const api = new RippleAPI({ server: Setting.Ripple });

const SparkPage: FunctionComponent<SparkPageProps> = (props: SparkPageProps) => {
  const schema = yup.object({
    sourceAddress: yup.string().trim().required('source wallet is required'),
    privatekey: yup.string().trim().required('private key is required'),
    ethWallet: yup.string().trim().required('Ethereum wallet is required'),
  });

  let [showSpinner, setShowSpinner] = useState(false);
  let [showInfoBar, setInfoBar] = useState(false);
  let [result, setResult] = useState({
    engine_result: '',
    engine_result_message: '',
    tx_json: { hash: '', Account: '', engine_result: '', engine_result_message: '' },
  });
  let [error, setError] = useState({ hasError: false, Message: '' });
  let [enableApply, setEnableApply] = useState(false);

  async function createTransaction(obj: SparkMessage) {
    setShowSpinner(true);
    setError({ hasError: false, Message: '' });
    let messageToSend = {
      TransactionType: 'AccountSet',
      Account: obj.sourceAddress,
      Fee: '12',
      MessageKey: getMessage(obj.ethWallet).toUpperCase(),
    };

    try {
      await api.connect();

      var res = await api.prepareTransaction(messageToSend);

      const response = await api.sign(res.txJSON, obj.privatekey);

      const txBlob = response.signedTransaction;

      ConnectAndSend(txBlob, obj.sourceAddress, messageToSend.MessageKey);
    } catch (e) {
      setShowSpinner(false);

      setError({ hasError: true, Message: e.message });
    }
  }

  function ConnectAndSend(txBlob: any, account: string, target: string) {
    const socket = new WebSocket(Setting.Ripple);
    let commandId: string = getUUID();
    socket.addEventListener('open', (event: any) => {
      const command = {
        id: commandId,
        command: 'submit',
        tx_blob: txBlob,
      };
      socket.send(JSON.stringify(command));
    });

    socket.addEventListener('message', (event: any) => {
      let info = JSON.parse(event.data).result;

      setResult(info);

      if (info.engine_result == 'tesSUCCESS') {
        setInfoBar(true);
      } else {
        setError({ hasError: true, Message: info.engine_result_message });
      }
      setShowSpinner(false);
      socket.close();
    });
    socket.addEventListener('close', (event: any) => {});
  }

  function getMessage(ethwallet: string): string {
    return `02000000000000000000000000${ethwallet.replace('0x', '').trim()}`;
  }

  function getAccountInfo(address: string, socket: WebSocket) {
    socket.send(
      JSON.stringify({
        command: 'account_info',
        account: address,
      })
    );
  }

  let errorTag =
    error.hasError == true ? (
      <div className="row mt-4">
        <div className="alert alert-danger" role="alert">
          {error.Message}, .try again later.
        </div>
      </div>
    ) : (
      <div className="row"></div>
    );

  if (showInfoBar) {
    return (
      <div className="col-12 col-sm-12 col-md-10 col-lg-8  col-xl-8 single-well my-md-5 my-sm-0 py-4 p-md-5 center">
        <div className="row">
          <img
            className="col-12 col-sm-4 col-xl-3 center"
            src={`${process.env.PUBLIC_URL}/landing_assets/Flare-Logo.png`}
          />
        </div>
        {errorTag}
        <div className="row  mt-4">
          <div className="w-100">
            <b>Transaction hash: </b>
          </div>
          <div className="w-100">{result.tx_json.hash}</div>
          <div className="w-100">
            <b>Account: </b>
          </div>
          <div className="w-100">{result.tx_json.Account}</div>
          <div className="w-100">
            <b>Result: </b>
          </div>
          <div className="w-100">
            <div className="alert alert-primary" role="alert">
              {result.engine_result.replace('tes', '')} , {result.engine_result_message}
            </div>
          </div>
        </div>
        <div className="row  mt-4">
          <div className="col-12 text-left subtitle mt-3 text-alert"></div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="col-12 col-sm-12 col-md-10 col-lg-8  col-xl-8 single-well my-md-5 my-sm-0 py-4 p-md-5 center">
        <div className="row">
          <img
            className="col-12 col-sm-4 col-xl-3 center"
            src={`${process.env.PUBLIC_URL}/landing_assets/Flare-Logo.png`}
          />
        </div>
        <div className="row  mt-4">
          <div className="col-12  subtitle mt-3 text-info text-left">
            by using this page,your wallet would loose 12 drop . you are using this tool on your own
            . I dont garauntee any thing. by using this website you are agrree that any thin happens
            to your wallet,your funds and so on is your responsibility. this code works as is and
            there is no garauntee to work. your ethereum wallet should be in accordance with these
            conditions:
          </div>
        </div>
        <div className="row pl-4">
          <a
            href="https://flare.ghost.io/claiming-spark-faq/"
            className="subtitle text-primary "
            target="_blank"
          >
            flare.ghost.io/claiming-spark-faq
          </a>
        </div>

        <div className="row  mt-4">
          <div className="col-12 center title">Set your XRP wallet for Flare</div>
          <div className="col-12 center subtitle mt-3">
            Please fill the required fields, to set for Flare:
          </div>
        </div>
        {errorTag}
        <div className="row  mt-5">
          <Spinner show={showSpinner}>
            <Formik
              validationSchema={schema}
              initialValues={{
                sourceAddress: '',
                privatekey: '',
                ethWallet: '',
              }}
              validate={(values) => {
                const errors = {};

                return errors;
              }}
              onSubmit={async (values) => {
                // props.handleSendClick(values);
                await createTransaction(values);
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
                      type="password"
                      name="privatekey"
                      className="form-control form-input"
                      value={values.privatekey}
                      onChange={handleChange}
                      isInvalid={!!errors.privatekey}
                    />
                    <Form.Control.Feedback type="invalid">
                      {errors.privatekey}
                    </Form.Control.Feedback>
                    <Form.Text className="text-muted">
                      this is your private key.do not share it with anyone.
                    </Form.Text>
                  </Form.Group>

                  <Form.Group controlId="validationFormikeethWallet">
                    <Form.Label>Ethereum compatible address</Form.Label>
                    <Form.Control
                      type="text"
                      name="ethWallet"
                      className="form-control form-input"
                      value={values.ethWallet}
                      required
                      onChange={handleChange}
                      isInvalid={!!errors.ethWallet}
                    />
                    <Form.Control.Feedback type="invalid">{errors.ethWallet}</Form.Control.Feedback>
                    <Form.Text className="text-muted">
                      this is the recievers wallet address.
                    </Form.Text>
                  </Form.Group>
                  <Form.Group>
                    <div className="row">
                      <div className="col-2 col-sm-4">
                        {' '}
                        <FormCheck
                          name="aggreement"
                          required
                          className="form-control form-input border border-danger"
                          onChange={() => {
                            setEnableApply(!enableApply);
                          }}
                        />
                      </div>
                      <div className="col-10 col-sm-8">
                        I'm are using this tool on my own . I accept any unwanted consequence that
                        would be happen by using this page.I fully understand that I should use an
                        ethereum wallet that belongs to me. I should noy use any ethereum wallet
                        that belongs to an exchange or any other thired party. I'm fully agree that
                        I use the addresses that start with "0x".
                      </div>
                    </div>
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    title="check the above box first"
                    className="w-100 mt-4"
                    disabled={!enableApply}
                  >
                    Claim Spark
                  </Button>
                </Form>
              )}
            </Formik>
          </Spinner>
        </div>
        {errorTag}
      </div>
    );
  }
};

export default SparkPage;
