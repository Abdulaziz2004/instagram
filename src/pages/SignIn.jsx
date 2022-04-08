import React, { useEffect, useState } from "react";
import styled from "styled-components";

import logo from "../assets/Instagram Logo.svg";
import facebook from "../assets/facebook.svg";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const SignIn = () => {

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const registrIn = () => {
    axios
      .post("https://searching-server.herokuapp.com/auth/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        localStorage.setItem("user-token", res.data.jwt);
        navigate("/");
      })
      .catch(({ message }) => {
        console.log("error xatolik!!" + message);
      });
  };

  return (
    <Wrapper>
      <div className="signin__container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>

        <div className="inputs">
          <input
            onChange={({ target }) => setUsername(target.value)}
            type="text"
            placeholder="Phone number, email address or username"
          />
          <input
            onChange={({ target }) => setPassword(target.value)}
            type="password"
            placeholder="Password"
          />
        </div>

        <div className="forgot__password">
          <p>Forgot password?</p>
        </div>

        <div className="login__button">
          <button onClick={registrIn}>Log in</button>
        </div>

        <div className="login__facebook">
          <img src={facebook} alt="" />
          <span>Log in with Facebook</span>
        </div>

        <div className="or">
          <span></span>
          <p>OR</p>
          <span></span>
        </div>

        <div className="sign__up">
          <p>
            Don't have an account? <span>Sign up.</span>
          </p>
        </div>

        <div className="footer">
          <p>Instagram от Facebook</p>
        </div>
      </div>
    </Wrapper>
  );
};

export default SignIn;

const Wrapper = styled.div`
  .signin__container {
    max-width: 375px;
    background: white;
    padding: 168px 16px 20px 16px;

    .logo {
      display: flex;
      justify-content: center;
      margin-bottom: 40px;
    }

    .inputs {
      input {
        width: 100%;
        padding: 15px;
        display: block;
        background: #fafafa;
        border: 0.5px solid rgba(0, 0, 0, 0.1);
        box-sizing: border-box;
        border-radius: 5px;
        margin-bottom: 10px;
        outline: none;
      }
    }

    .forgot__password p {
      text-align: end;
      font-weight: 500;
      font-size: 12px;
      line-height: 14px;
      letter-spacing: 0.15px;
      color: #3797ef;
      margin-bottom: 30px;
    }

    .login__button button {
      width: 100%;
      background: #3797ef;
      border-radius: 5px;
      border: none;
      padding: 15px;
      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.15px;
      color: #ffffff;
      opacity: 0.5;
      margin-bottom: 35px;

      &:active {
        opacity: 1;
      }
    }

    .login__facebook {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      margin-bottom: 40px;

      span {
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        letter-spacing: -0.15px;
        color: #3797ef;
      }
    }

    .or {
      display: flex;
      gap: 30px;
      align-items: center;
      margin-bottom: 40px;
      p {
        font-weight: 600;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        color: rgba(0, 0, 0, 0.4);
      }

      span {
        width: 100%;
        border: 0.33px solid rgba(0, 0, 0, 0.2);
      }
    }

    .sign__up p {
      font-weight: 400;
      font-size: 14px;
      line-height: 17px;
      text-align: center;
      letter-spacing: -0.15px;
      color: rgba(0, 0, 0, 0.4);
      margin-bottom: 100px;

      span {
        color: #3797ef;
      }
    }

    .footer {
      border-top: 0.33px solid rgba(0, 0, 0, 0.2);

      p {
        font-weight: 400;
        font-size: 12px;
        line-height: 14px;
        text-align: center;
        letter-spacing: -0.01px;
        color: rgba(0, 0, 0, 0.4);
        margin-top: 32px;
      }
    }
  }
`;
