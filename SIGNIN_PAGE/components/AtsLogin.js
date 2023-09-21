import React, { useState } from 'react';
import login from "../asset/atsimage.jpg";
import logo from '../asset/logo.png';
import './atslogin.css';
import { PrimaryButton } from '@fluentui/react/lib/Button';
import { Stack } from '@fluentui/react/lib/Stack';
import { TextField } from '@fluentui/react/lib/TextField';
import { Image, ImageFit } from '@fluentui/react/lib/Image';

const columnProps = {
  tokens: { childrenGap: 8 },
  styles: { root: { width: 180 } },
};

co nst AtsLogin = () => {
  const [userCredentials, setUserCredentials] = useState({
    userName: '',
    password: ''
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserCredentials({
      ...userCredentials,
      [name]: value
    });
  };

  const handleLogin = () => {
    const { userName, password } = userCredentials;
    if (userName === "sivaprasadbsc6@gmail.com" && password === "9346564401") {
      alert("Login successful");
    } else {
      alert("Mismatched username or password");
    }
  };

  return (
    <div className='container-bg'>
      <div className='container-left'>
        <img src={login} alt='login' className='image-left' />
      </div>
      <center>
        <div className='container-right'>
          <img src={logo} alt='logo' className='img-right' />
          <h4>Sign In</h4>
          <Stack {...columnProps}>
            <TextField
              type='text'
              name='userName'
              placeholder="User id"
              value={userCredentials.userName}
              onChange={handleInputChange}
            />
            <TextField
              type="password"
              name='password'
              placeholder='Password'
              value={userCredentials.password}
              onChange={handleInputChange}
              canRevealPassword
              revealPasswordAriaLabel="Show password"
            />
          </Stack>
          <br />
          <a href="#" className='forget'>Forgot password</a>
          <br /><br />
          <PrimaryButton text="LOGIN" onClick={handleLogin} />
        </div>
      </center>
    </div>
  );
};

export default AtsLogin;
