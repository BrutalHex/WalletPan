import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Divider from '../../components/Divider';
import PasswordField from '../../components/Forms/PasswordField';
import { Formik, Field } from 'formik';
import * as yup from 'yup';

class RegistrationPage extends React.Component {
  constructor(props: any) {
    super(props);
  }

  render() {
    const schema = yup.object({
      email: yup.string().email('E-mail is not valid!').required('E-mail is required!'),
      password: yup
        .string()
        .min(6, 'Password has to be longer than 6 characters!')
        .required('Password is required!'),
      passwordConfirmation: yup
        .string()

        .required('Password confirmation is required!'),
    });

    return (
      <div className="container-fluid">
        <div className="row login twin-section vh-90 vw-90">
          <div className="col-12 col-md-5 left-part">
            <div className="row">
              <div className="col-12 banner-Text">
                <div className="row">
                  <div className="col-12 d-flex justify-content-center">
                    <div className="row">
                      <div className="col-12">
                        <h2>
                          Welcome back to
                          <br />
                          WALLETPAN
                        </h2>
                      </div>
                      <div className="col-12">
                        <span className="hint-bar">Creat your account</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <Formik
                  validationSchema={schema}
                  initialValues={{
                    email: '',
                    password: '',
                    passwordConfirmation: '',
                  }}
                  validate={(values) => {
                    const errors = { passwordConfirmation: '' };

                    if (values.password != values.passwordConfirmation) {
                      errors.passwordConfirmation = 'Passwords do not match';
                    }

                    return errors;
                  }}
                  onSubmit={(values) => {
                    if (values.password != values.passwordConfirmation) {
                    }

                    // same shape as initial values
                    console.log(values);
                  }}
                >
                  {({ handleSubmit, handleChange, handleBlur, values, isValid, errors }) => (
                    <Form
                      noValidate
                      onSubmit={(event: React.FormEvent<HTMLFormElement>): void => {
                        handleSubmit(event);
                      }}
                      className="custom-form center needs-validation"
                    >
                      <Form.Group controlId="validationFormikemail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                          type="email"
                          name="email"
                          className="form-control form-input"
                          value={values.email}
                          required
                          onChange={handleChange}
                          isInvalid={!!errors.email}
                        />
                        <Form.Control.Feedback type="invalid">{errors.email}</Form.Control.Feedback>
                        <Form.Text className="text-muted">
                          We'll never share your email with anyone else
                        </Form.Text>
                      </Form.Group>

                      <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>

                        <PasswordField
                          name="password"
                          required
                          className="form-control form-input"
                          value={values.password}
                          onChange={handleChange}
                          isInvalid={!!errors.password}
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.password}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Form.Group controlId="formBasicPasswordConfirm">
                        <Form.Label>Confirm Password</Form.Label>

                        <PasswordField
                          name="passwordConfirmation"
                          required
                          className="form-control form-input"
                          value={values.passwordConfirmation}
                          onChange={handleChange}
                          isInvalid={!!errors.passwordConfirmation}
                        />

                        <Form.Control.Feedback type="invalid">
                          {errors.passwordConfirmation}
                        </Form.Control.Feedback>
                      </Form.Group>

                      <Button variant="primary" type="submit">
                        Register
                      </Button>

                      <Divider title="Or" />

                      <Button variant="outline-primary">
                        {' '}
                        <img
                          src={`${process.env.PUBLIC_URL}/landing_assets/google-icon.svg`}
                        />{' '}
                        Register with Google
                      </Button>
                    </Form>
                  )}
                </Formik>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-7 right-part">
            <div className="row w-100">
              <div className="col-12 logo-wrapper">
                <img
                  className="center"
                  src={`${process.env.PUBLIC_URL}/landing_assets/footer-logo.svg`}
                />
              </div>
              <div className="col-12 subtitle text-center">XRP’s Original Wallet</div>
            </div>
            <div className="row img-wrapper "></div>
          </div>
        </div>
        <div className="row form-footer">
          <div className="col-8 col-sm-4 col-md-4 col-xl-2">
            Already have account? <a href="/login">Login</a>
          </div>
        </div>
      </div>
    );
  }
}

export default RegistrationPage;
