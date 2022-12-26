import React from 'react';
import styled from 'styled-components';
import googleIcon from './Google.svg';
import facebookIcon from './Facebook.svg';

const LoginButtons = () => {
  const OrHeader = styled.h2`
    width: 100%;
    text-align: center;
    border-bottom: 1px solid #2dd3e3;
    line-height: 0.1em;
    margin: 10px 0 20px;
  `;
  const OrSpan = styled.span`
    background: #fff;
    padding: 0 10px;
  `;

  return (
    <div data-testid = "LoginButtons" className="flex flex-col items-center mt-6">
      <OrHeader>
        <OrSpan>Or</OrSpan>
      </OrHeader>
      <div className="flex gap-10">
        <img src={googleIcon} alt="Google Icon" />
        <img src={facebookIcon} alt="Google Icon" />
      </div>
    </div>
  );
};

export default LoginButtons;
