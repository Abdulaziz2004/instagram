import React, { useEffect } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import insta from "../assets/Instagram Logo.svg";
import oval from "../assets/Oval.svg";
import back from "../assets/Shape.svg";
import SignIn from "./SignIn";

const Login = () => {
  return (
    <LoginContainer>
      <div className="back">
        <Link to="/">
          <img src={back} alt="" />
        </Link>
      </div>

      <div className="insta-logo">
        <Link to="/">
          <img src={insta} alt="" />
        </Link>
      </div>
      <div className="login">
        <div>
          <img src={oval} alt="" />
        </div>
        <span> jacob_w </span>
        <Link className="login__log" to={"/signIn"}>
          Log in
        </Link>
        <Link className="switch" to="/">
          Switch accounts
        </Link>
      </div>
      <div className="line"></div>
      <div className="accaunt">
        <p>Don’t have an account?</p>
        <Link to="/">Sign up.</Link>
      </div>
    </LoginContainer>
  );
};

export default Login;

const LoginContainer = styled.div`
  width: 100%;
  background-color: #ffffff;
  padding: 50px 34px 20px 34px;

  .back {
    margin-bottom: 90px;
  }
  .insta-logo {
    margin-bottom: 52px;
    text-align: center;
  }

  .login {
    display: flex;
    flex-direction: column;
    text-align: center;

    span {
      margin-top: 13px;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.15px;
      color: #262626;
      margin-bottom: 12px;
    }

    .login__log {
      width: 100%;
      background: #3797ef;
      border-radius: 5px;
      padding: 14px 0;

      text-decoration: none;
      margin-bottom: 30px;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.15px;
      color: #ffffff;
    }

    .switch {
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      letter-spacing: -0.15px;
      color: #3797ef;
      text-decoration: none;
      margin-bottom: 169px;
    }
  }

  .line {
    width: 100%;
    height: 1px;
    background-color: #808080c2;
  }

  .accaunt {
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
    margin-top: 18px;
    gap: 4px;

    p {
      font-weight: 400;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: -0.01px;
      color: rgba(0, 0, 0, 0.4);
    }

    a {
      font-weight: 600;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: -0.005px;
      color: #262626;
    }
  }
`;
