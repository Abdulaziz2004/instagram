import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import {ReactComponent as Home} from "../assets/home.svg";
import {ReactComponent as Search} from "../assets/search.svg";
import {ReactComponent as Plus} from "../assets/plus.svg";
import {ReactComponent as Heart} from "../assets/heart.svg";
import {ReactComponent as Profile} from "../assets/profile.svg";

const Footer = () => {
  return (
    <Wrapper>
      <div className="footer-section">
        <div>
          <NavLink to="/">
            <Home/>
          </NavLink>
        </div>
        <div>
          <NavLink to="/recomendation">
            <Search/>
          </NavLink>
        </div>
        <div>
          <NavLink to="/add">
            <Plus/>
          </NavLink>
        </div>
        <div>
          <NavLink to="/like">
            <Heart/>
          </NavLink>
        </div>
        <div>
          <NavLink to="/profile">
            <Profile/>
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

export default Footer;

const Wrapper = styled.div`
  background-color: red;
  padding: 11px 26px 16px 26px;
  background: #fafafa;

  .footer-section {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
`;
