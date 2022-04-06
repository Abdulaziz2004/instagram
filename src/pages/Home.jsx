import React from "react";
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
import post from "../assets/postsvg.svg";
import More from "../assets/More.svg";
import PostImg from "../assets/post-img.png";
import heart from "../assets/heart.svg";
import massage from "../assets/massage.svg";
import teleg from "../assets/teleg.svg";
import pagination from "../assets/Pagination.svg";
import saved from "../assets/saved.svg";
import likeComment from "../assets/like-comment.svg";


const Home = () => {
  const homeData = [
    { img: myStory, title: "Your Story" },
    { img: peopleOne, title: "karennne" },
    { img: peopleTwo, title: "zackjohn" },
    { img: peopleThree, title: "kieron_d" },
    { img: peopleThree, title: "kieron_d" },
    { img: peopleThree, title: "kieron_d" },
  ];

  return (
    <Wrapper>
      <div className="header">
        <img className="camera" src={cameraIcon} alt="" />
        <img className="logo" src={logo} alt="" />
        <div className="live__and__messanger">
          <img src={live} alt="" />
          <img src={messanger} alt="" />
        </div>
      </div>

      <div className="stories">
        {homeData.map((data) => (
          <div className="story__container">
            <img src={data.img} />
            <p>{data.title}</p>
          </div>
        ))}
      </div>

      <div className="post">
        <div className="post-title">
          <div className="post- ">
            <div>
              <img src={post} alt="" />
            </div>
            <div>
              <h5>joshua_l</h5>
              <span>Tokyo, Japan</span>
            </div>
          </div>
          <div>
            <img src={More} alt="" />
          </div>
        </div>

        <div className="post-img">
          <img src={PostImg} alt=""/>
        </div>

        <div className="comment">
          <div className="commit-grid">
            <div className="telegContainer">
              <img src={heart} alt=""/>
              <img src={massage} alt=""/>
              <img src={teleg} alt=""/>
            </div>
            <div className="pagenation">
              <img src={pagination} alt="" />
            </div>
            <div className="saved">
              <img src={saved} alt="" />
            </div>
          </div>

          <div className="like-comment">
            <div><img src={likeComment} alt=""/></div>
            <div>
              <p>Liked by <b>craig_love</b> and <b>44,686 others</b></p> 
              <p><b>joshua_l</b> The game in Japan was amazing and I want to share some photos</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Home;

const Wrapper = styled.div`
  /* height: 800px; */
  border-bottom: 2px solid #DDDDDF;

  .header {
    display: flex;
    padding: 54px 12px 12px 12px;
    align-items: center;
    gap: 54px;
    background: #fafafa;
    box-shadow: 0px 0.33px 0px #a6a6aa;

    .camera {
      margin-right: 45px;
    }

    .logo {
      width: 105px;
      height: 28px;
    }

    .live__and__messanger {
      display: flex;
      gap: 20px;
    }
  }

  .stories {
    display: flex;
    padding: 10px 0px 8px 12px;
    overflow-x: scroll;
    border-bottom: 1px solid #DBDBDC;
    border-top: 1px solid #DBDBDC;
    background-color: #fff;

    ::-webkit-scrollbar {
      display: none;
    }

    .story__container {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      gap: 5px;
      margin-right: 15px;

      img {
        border-radius: 50%;
        padding: 3px;
        border: 3px solid green;
      }

      p {
        font-weight: 400;
        font-size: 12px;
        letter-spacing: -0.01px;
        color: #262626;
      }
    }
  }

  .post {
    background-color: #fff;
    .post-title {
      padding: 11px;
      display: flex;
      align-items: center;
      justify-content: space-between;

      .post-text {
        display: flex;
        align-items: center;
        gap: 10px;

        h5 {
          font-weight: 600;
          font-size: 13px;
          line-height: 18px;
          letter-spacing: -0.1px;
          color: #262626;
        }

        span {
          font-weight: 400;
          font-size: 11px;
          line-height: 13px;
          letter-spacing: 0.07px;
          color: #262626;
          margin-top: 1px;
        }
      }
    }
  }

  .comment{
    padding: 14px 17px 10px 14px; 

    .commit-grid{
      display: grid;
      grid-template-columns: repeat(3, 1fr);

      .telegContainer{
        display: flex;
        align-items: center;
        gap: 18px;
      }

      .pagenation{
        text-align: center;
      }

      .saved{
        margin-left: auto;
      }
    }

    .like-comment{
      display: flex;
      gap: 7px;
      margin-top: 17px;

      p{
        font-weight: 400;
        font-size: 13px;
        line-height: 18px;
        letter-spacing: -0.1px;
        color: #262626e9;

        b{
          font-weight: bold;
          color: black;
        }
      }
    }
  }
`;
