import React from 'react';
import styled from "styled-components";

const SignIn = () => {
  return (
    <Wrapper>
      <div className='signin__container'>
        Hello  
      </div>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  .signin__container {
    max-width: 375px;
    height: 800px;
    background: green;
  }
`;