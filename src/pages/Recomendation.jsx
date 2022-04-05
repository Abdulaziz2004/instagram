import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import insta from "../assets/insta.svg";
import search2 from "../assets/search2.svg";
import igtv from "../assets/igtv.svg";
import shop from "../assets/shop.svg";
import cart1 from "../assets/cart1.png";
import cart2 from "../assets/cart2.png";
import cart3 from "../assets/cart3.png";
import cart4 from "../assets/cart4.png";
import cart5 from "../assets/cart5.png";

const Recomendation = () => {

  const cartData = [
    {id: 1, img: cart1},
    {id: 2, img: cart2},
    {id: 3, img: cart3},
    {id: 4, img: cart4},
    {id: 5, img: cart5},
    {id: 6, img: cart4},
    {id: 1, img: cart1},
    {id: 6, img: cart4},
    {id: 6, img: cart4},
    {id: 3, img: cart3},
    {id: 6, img: cart4},
    {id: 2, img: cart2},
    {id: 3, img: cart3},,
    {id: 6, img: cart4},
    {id: 2, img: cart2},
    {id: 3, img: cart3},
    {id: 6, img: cart4},
  ]

  return (
    <Wrapper>
      <div className="form">
        <input type="text" placeholder="Search" />
        <img src={insta} alt="" />
        <img className="search" src={search2} alt="" />
      </div>

      <div className="shop">
        <Link to=""><img src={igtv} alt="" /> IGTV</Link>
        <Link to=""><img src={shop} alt="" /> Shop</Link>
        <Link to="">Style</Link>
        <Link to="">Sports</Link>
        <Link to="">Auto</Link>
        <Link to=""><img src={igtv} alt="" /> IGTV</Link> 
      </div>

      <div className="cart">
        <div className="grid">
          {cartData.map(({id, img, title}) => <img key={id} src={img} alt=""/>)}
        </div>
      </div>
    </Wrapper>
  );
};

export default Recomendation;

const Wrapper = styled.div`
  background: #FAFAFA;
  box-shadow: 0px 0.33px 0px rgba(60, 60, 67, 0.29);
  padding: 48px 0px 0 0px;
  .form {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
    position: relative;
    padding:  0 8px 0 8px;
    input {
      width: 100%;
      height: 36px;
      background: rgba(118, 118, 128, 0.12);
      border-radius: 10px;
      border: none;
      outline: none;
      padding: 0 0 0 34px;
      font-weight: 400;
      font-size: 16px;
      line-height: 22px;
      letter-spacing: -0.3px;
      color: rgba(60, 60, 67, 0.6);
    }

    .search{
      position: absolute;
      left: 18px;
    }
  }

  .shop{
    padding: 18px 0 7px 8px;
    display: flex;
    align-items: center;
    gap: 6px;
    width: 100%;
    overflow-x: auto;
    ::-webkit-scrollbar{
      display: none;
    }

    a{
      text-decoration: none;
      background: #FFFFFF;
      border: 1px solid rgba(60, 60, 67, 0.18);
      box-sizing: border-box;
      border-radius: 6px;
      padding: 8px;
      display: flex;
      align-items: center;
      gap: 6px;

      font-weight: 600;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.2px;
      color: #262626;
    }
  }

  .cart{
    .grid{
      height: 600px;
      display: grid;
      overflow-y: auto;
      grid-template-columns: repeat(3, 1fr);
      gap: 2px;
      ::-webkit-scrollbar{
        display: none;
    }
    }
  }
`;
