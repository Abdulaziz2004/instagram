import React from 'react';
import styled from "styled-components";
import cameraIcon from "../assets/Camera Icon.svg";
import logo from "../assets/Instagram Logo.svg";
import live from "../assets/IGTV_live.svg";
import messanger from "../assets/Messanger.svg";
import myStory from "../assets/my_story.png";
import peopleOne from "../assets/people_1.png";
import peopleTwo from "../assets/people_2.png";
import peopleThree from "../assets/people_3.png";
import officialIcon from "../assets/Official Icon.svg";

const Home = () => {
  return (
    <Wrapper>
      <div className='header'>
        <img className='camera' src={cameraIcon} alt="" />
        <img className='logo' src={logo} alt="" />
        <div className='live__and__messanger'>
          <img src={live} alt="" />
          <img src={messanger} alt="" />
        </div>
      </div> 

      <div className='stories'>
        <div className='story__container'>
          <img src={myStory} alt="" />
          <p>Your Story</p>  
        </div> 
        <div className='story__container'>
        <img src={peopleOne} alt="" />
          <p>karennne</p>  
        </div> 
        <div className='story__container'>
        <img src={peopleTwo} alt="" />
          <p>zackjohn</p>  
        </div> 
        <div className='story__container'>
        <img src={peopleThree} alt="" />
          <p>kieron_d</p>  
        </div> 
        <div className='story__container'>
        <img src={peopleOne} alt="" />
          <p>karennne</p>  
        </div> 
        <div className='story__container'>
        <img src={peopleTwo} alt="" />
          <p>zackjohn</p>  
        </div> 
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  height: 800px;
  border:1px dashed cyan;

  .header{
    display: flex;
    padding: 54px 12px 12px 12px;
    align-items: center;
    gap: 54px;
    border-bottom: 1px solid #454444;

    .camera{
      margin-right: 45px;
    }

    .logo{
      width: 105px;
      height: 28px;
    }

    .live__and__messanger{
      display: flex;
      gap: 20px;
    }
  }

  .stories{
    display: flex;
    padding: 10px 0px 8px 12px;
    overflow-x: scroll;
    border-bottom: 1px solid #5a5656;

    .story__container{
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      margin-right: 15px;

      img{
        border-radius: 50%;
        padding: 3px;
        border: 3px solid green;
      }

      p{
        font-weight: 400;
        font-size: 12px;
        letter-spacing: -0.01px;
        color: #262626;
      }
    }

  }
`;