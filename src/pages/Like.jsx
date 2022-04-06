import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import LikePerson from "../assets/like-person.svg";
import LikePerson2 from "../assets/like-2.svg";

const Like = () => {
  return (
    <Wrapper>
      <div className="like">
        <div className="title">
          <Link to="">Following</Link>
          <Link to="">You</Link>
        </div>
        <hr />

        <div className="follow">
          <h3>Follow Requests</h3>
        </div>
        <hr />

        <div className="Like-photo">
          <h3>New</h3>

          <div className="like-container">
            <div className="like-title">
              <div>
                <img src={LikePerson} alt="" />
              </div>
              <p>
                <b>karennne liked your photo. </b>1h
              </p>
            </div>

            <div>
              <img src={LikePerson2} alt="" />
            </div>
          </div>
        </div>

        <hr />

        <div className="Like-photo">
          <h3>Today</h3>

          <div className="like-container">
            <div className="like-title">
              <div>
                <img src={LikePerson} alt="" />
              </div>
              <p>
                <b>kiero_d, zackjohn and 26 others liked your photo. </b>3h
              </p>
            </div>

            <div>
              <img src={LikePerson2} alt="" />
            </div>
          </div>
        </div>

        <hr />
        <div className="Like-photo">
          <h3>This Week</h3>

          <div className="like-container">
            <div className="like-title">
              <div>
                <img src={LikePerson} alt="" />
              </div>
              <p>
                <b>kiero_d, zackjohn and 26 others liked your photo. </b>3h
              </p>
            </div>

            <div>
              <img src={LikePerson2} alt="" />
            </div>
          </div>
          <div className="like-container">
            <div className="like-title">
              <div>
                <img src={LikePerson} alt="" />
              </div>
              <p>
                <b>martini_rond started following you. 3d </b>3h
              </p>
            </div>

            <div>
              <button>Message</button>
            </div>
          </div>
          <div className="like-container">
            <div className="like-title">
              <div>
                <img src={LikePerson} alt="" />
              </div>
              <p>
                <b>martini_rond started following you. 3d </b>3h
              </p>
            </div>

            <div>
              <button>Message</button>
            </div>
          </div>
          <div className="like-container">
            <div className="like-title">
              <div>
                <img src={LikePerson} alt="" />
              </div>
              <p>
                <b>martini_rond started following you. 3d </b>3h
              </p>
            </div>

            <div>
              <button>Message</button>
            </div>
          </div>
          <div className="like-container">
            <div className="like-title">
              <div>
                <img src={LikePerson} alt="" />
              </div>
              <p>
                <b>martini_rond started following you. 3d </b>3h
              </p>
            </div>

            <div>
              <button>Message</button>
            </div>
          </div>
          <div className="like-container">
            <div className="like-title">
              <div>
                <img src={LikePerson} alt="" />
              </div>
              <p>
                <b>martini_rond started following you. 3d </b>3h
              </p>
            </div>

            <div>
              <button>Message</button>
            </div>
          </div>
          <div className="like-container">
            <div className="like-title">
              <div>
                <img src={LikePerson} alt="" />
              </div>
              <p>
                <b>martini_rond started following you. 3d </b>3h
              </p>
            </div>

            <div>
              <button>Message</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default Like;

const Wrapper = styled.div`
  /* padding: 23px; */
  background-color: #fff;
  overflow-y: scroll;
  height: 812px;

  ::-webkit-scrollbar{
    display: none;
  }

  .title {
    padding: 23px 0 12px 0;
    background: #fafafa;
    box-shadow: 0px 0.33px 0px #a6a6aa;

    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 23px 71px 12px 49px;

    a {
      text-decoration: none;
      font-weight: 600;
      font-size: 16px;
      line-height: 21px;
      text-align: center;
      letter-spacing: -0.33px;
      color: rgba(0, 0, 0, 0.4);

      &:active {
        color: red;
      }
    }
  }

  .follow {
    padding: 15px;

    h3 {
      font-weight: 400;
      font-size: 15px;
      line-height: 20px;
      letter-spacing: -0.25px;
      color: #262626;
    }
  }

  .Like-photo {

    h3 {
      margin-left: 16px;
      margin-top: 13px;
      font-weight: 600;
      font-size: 15px;
      line-height: 20px;
      letter-spacing: -0.3px;
      color: #262626;
    }
    .like-container {
      display: flex;
      align-items: center;
      justify-content: space-between;

      padding: 13px 16px 8px 16px;

      .like-title {
        display: flex;
        align-items: center;
        gap: 12px;
      }

      button {
        width: 90px;
        height: 28px;
        background: #ffffff;
        border: 1px solid rgba(60, 60, 67, 0.18);
        box-sizing: border-box;
        border-radius: 4px;
        font-weight: 600;
        font-size: 14px;
        line-height: 17px;
        text-align: center;
        letter-spacing: -0.2px;
        color: #262626;
        cursor: pointer;
      }
    }
  }
`;
