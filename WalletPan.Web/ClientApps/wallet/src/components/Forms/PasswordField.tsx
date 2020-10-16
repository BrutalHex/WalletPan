import React, { useState, FunctionComponent } from 'react';
import Form from 'react-bootstrap/Form';
const PasswordField: FunctionComponent<any> = (props: any) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => {
    setShowPassword(!showPassword);
  };

  var { ...other } = props;
  return (
    <div className="input-group input-group-password mb-6 mt-6">
      <Form.Control type={showPassword ? 'text' : 'password'} {...other} />

      <div className="input-group-append">
        <span className="input-group-text click-able" onClick={handleClick}>
          <img src={`${process.env.PUBLIC_URL}/landing_assets/show-password.svg`} />
        </span>
      </div>
    </div>
  );
};
export default PasswordField;
