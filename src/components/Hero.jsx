import React, { useEffect, useRef, useState } from "react";
import {TbMathGreater} from 'react-icons/tb'
import axios from 'axios'
import "./Hero.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// const[swipe,setSwipe]=useState('')

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

import 'swiper/css/autoplay'

const Hero = () => {
    const [imgData,setImgData]=useState([])
    

    const imgDataFun=async()=>{
       const result=await axios.get('./FourImageData.json')
       setImgData(result.data.ImageData)
       console.log(imgData);
    }

    useEffect(()=>{
        imgDataFun()
    },[])
  return (
    <>
      <div className="heroImage">
        <Swiper
          cssMode={true}
          navigation={true}
          pagination={true}
          mousewheel={true}
          keyboard={true}
          autoplay={true}
          loop={true}
          modules={[Navigation, Pagination, Mousewheel, Keyboard,Autoplay]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div className="wrap">
            <img className="swipeImg"
              src="https://www.royalenfield.com/content/dam/royal-enfield/india/home/banner/desktop/service-cost-calculator.jpg"
              alt=""
            />
            <div className="btnDiv">
            <button>Explore</button>
            <TbMathGreater/> 
            </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="wrap">
            <img className="swipeImg"
              src="https://www.royalenfield.com/content/dam/royal-enfield/india/home/banner/desktop/interceptor-home.png"
              alt=""
            />
            <div className="btnDiv">
            <button>Explore</button>
            <TbMathGreater/>
            </div>
            
            </div>
          </SwiperSlide>
  
            <SwiperSlide>
                <div className="wrap">
                <img className="swipeImg"
                src="https://www.royalenfield.com/content/dam/royal-enfield/india/home/banner/desktop/continental-gt-home.png"
                alt=""
              />
              <div className="btnDiv">
              <button>Explore</button>
              <TbMathGreater/>
              </div>
                </div>
            </SwiperSlide>
          
          <SwiperSlide>
            <div className="wrap">
            <img className="swipeImg"
              src="https://www.royalenfield.com/content/dam/royal-enfield/india/home/banner/desktop/hunter-350-awards.png"
              alt=""
            />
            <div className="btnDiv">
            <button>Explore</button>
            <TbMathGreater/>
            </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="wrap">
            <img className="swipeImg"
              src="https://www.royalenfield.com/content/dam/royal-enfield/india/home/banner/motorcycle-of-the-year.jpg"
              alt=""
            />
            <div className="btnDiv">
            <button>Explore</button>
            <TbMathGreater className="arrow"/>
            </div>
            </div>

            {/* <div className="swiper-button-next"></div>
            <div className="swiper-button-prev"></div> */}
          </SwiperSlide>
        
        </Swiper>

            <div className="FourImages">
                {imgData.map((item)=>(
                <div className="imgDataDiv">
                <img src={item.image} alt="" />
                <div className="paraDiv">
                <h5>{item.para}</h5>
                </div>
                </div>
                ))
                }
            </div>
      </div>


    </>
  );
};

export default Hero;
