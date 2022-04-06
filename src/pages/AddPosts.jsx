import React from 'react';
import styled from "styled-components";
import shortcut from "../assets/shortcut.svg";
import post from "../assets/add/post.png";
import post1 from "../assets/add/post_1.png";
import post2 from "../assets/add/post_2.png";
import post3 from "../assets/add/post_3.png";
import post4 from "../assets/add/post_4.png";
import post5 from "../assets/add/post_5.png";
import post6 from "../assets/add/post_6.png";
import post7 from "../assets/add/post_7.png";
import post8 from "../assets/add/post_8.png";
import post9 from "../assets/add/post_9.png";
import post10 from "../assets/add/post_10.png";
import post11 from "../assets/add/post_11.png";
import post12 from "../assets/add/post_12.png";
import infinite from "../assets/add/infinite.svg";
import grid from "../assets/add/grid.svg";
import multiple from "../assets/add/multiple.svg";


const Addposts = () => {

    const postData = [
        {img: post1},
        {img: post2},
        {img: post3},
        {img: post4},
        {img: post5},
        {img: post6},
        {img: post7},
        {img: post8},
        {img: post9},
        {img: post10},
        {img: post11},
        {img: post12},
    ]

    return (
        <Wrapper>
            <div className='options'>
                <span className='cancel'>Cancel</span>
                
                <span className='recents'>
                    Recents
                    <img src={shortcut} alt="" />    
                </span>

                <span className='next'>Next</span>
            </div>

            <div className='selected__image'>
                <img src={post} alt="" />    

                <div className='selected__image-options'>
                    <div className='infinite'>
                        <img src={infinite} alt="" />        
                    </div>
                    <div className='grid'>
                        <img src={grid} alt="" />        
                    </div>
                    <div className='multiple'>
                        <img src={multiple} alt="" />
                        <span>Select multiple</span>        
                    </div>
                </div>
            </div>

            <div className='recommended__images'>
                {postData.map((data) => (
                    <img src={data.img} />
                ))}    
            </div>

            <div className='choose__from'>
                    <span>Library</span>
                    <span>Photo</span>
                    <span>Video</span>
            </div>
        </Wrapper>
    );
}

export default Addposts;

const Wrapper = styled.div`
    background: white;

    .options{
        padding: 56px 12px 12px 12px;
        display: flex;
        justify-content: space-between;

        .cancel{
            font-weight: 400;
            font-size: 16px;
            line-height: 21px;
            letter-spacing: -0.33px;
            color: #262626;
        }

        .recents{
            display: flex;
            align-items: center;
            gap: 5px;
            font-weight: 600;
            font-size: 16px;
            line-height: 21px;
            letter-spacing: -0.33px;
            color: #262626;
        }

        .next{
            font-weight: 600;
            font-size: 16px;
            line-height: 21px;
            letter-spacing: -0.33px;
            color: #3897F0;
        }
    }

    .selected__image{
        position: relative;

        .selected__image-options{
            position: absolute;
            bottom: 10px;
            right: 10px;
            display: flex;
            align-items: center;
            gap: 10px;

            div{
                background: rgba(38, 38, 38, 0.8);
                border-radius: 50%;
                display: flex;
                align-items: center;
                justify-content: center;
            }

            .infinite{
                padding: 12px 7px;
            }

            .grid{
                padding: 8px 7.5px;
            }

            .multiple{
                padding: 8px 12px;
                border-radius: 16px;
                gap: 12px;

                span{
                    font-weight: 600;
                    font-size: 11px;
                    line-height: 13px;
                    text-transform: uppercase;
                    color: #FFFFFF;
                }
            }
        }
    }

    .recommended__images{
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        gap: 1px;
    }

    .choose__from{
        display: flex;
        justify-content: space-between;
        padding: 12px 35px;

        span{
            font-weight: 600;
            font-size: 16px;
            line-height: 19px;
            letter-spacing: -0.33px;
            color: #262626;
        }
    }
`;