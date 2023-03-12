import React from "react";
import { css } from "@emotion/react";
import Slider from "react-slick";
import { useNavigate } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

/** @jsxImportSource @emotion/react */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const all = css`
  margin: 0px;
  padding: 0px;
  background: linear-gradient(to bottom right, #FF6633 0%, #FF3300 50%, #9900CC 100%);
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-flow: column;
  text-align: center;
  `;
  const title = css`
  margin-top: 30px;
  font-weight: 800;
  font-size: 40px;
  `;
const flame = css`
margin: 0 auto;
padding: 0 30px;
background: linear-gradient(to bottom right, #FF6633 0%, #FF3300 50%, #9900CC 100%);
opacity: 0.2;
width: 70%;
height: 60%;
top: 80px;
border: 1px solid rgba(255, 255, 255, 0.3);
border-radius: 25px;
`;
const pic = css`
  display: none;
  margin: 0 auto;
  height: 400px;
  text-align: center;
  justify-content: center;
  opacity: 1.0;
`;
const startButton = css`
background-color: white;
  width: 180px;
  height: 60px;
  border-radius: 15px;
  box-shadow: 0px 7px 0px 0px rgba(0, 0, 0, 0.6);
  margin: 40px auto;
  `;
const start = css`
text-align: center;
  font-size: 20px;
  font-weight: 600;
  `;

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrow: true,
  autoplay: true,
};

const images = ["sugoi.jpg", "pic5.jpg", "pic4.jpg"]


const Main = () => {
  const navigate = useNavigate()
    return(
  <div css = {all}> 
    <div css= {title}>Pitatto</div>
    <div css={flame}>
      <Slider {...settings}>
      {images.map((img)=>{
        return(
        <div>
          <img src={img} alt="pic" css={pic}/>  
        </div>
        );
      })}
    </Slider>
    </div>
    <button css={startButton} onClick={() => navigate('/game')}>
    <p css={start}>Let's Pitatto</p>
    </button>
  </div>
  );  
};
export default Main;