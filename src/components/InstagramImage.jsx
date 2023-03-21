import React from 'react'
import './InstagramImage.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {AiFillInstagram} from 'react-icons/ai'
import {TbMathGreater} from 'react-icons/tb'
import {TfiHandPointUp,TfiMapAlt} from 'react-icons/tfi'
import {VscTools} from 'react-icons/vsc'


// const[swipe,setSwipe]=useState('')

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay } from "swiper";

import 'swiper/css/autoplay'

const InstagramImage = () => {
  return (
    <>
    <h3 className='popular'>Popular Tags</h3>
    <div className='all'>
    <div className='Wrapper'>
      <h2>#PureCruising</h2>
      <div className='insta'>
            <h3>@Anonymous</h3>
            <AiFillInstagram className='instaIcon'/>
    </div>
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
            <div className="instaImageWrap">
            <SwiperSlide>
            <img className="instaImage"
              src="https://www.royalenfield.com/node/assets/locobuzz/167543462714217971897199028517_1.jpg"
              alt=""
            />
            </SwiperSlide>
            <SwiperSlide>
            <img className="instaImage"
              src="https://www.royalenfield.com/node/assets/locobuzz/167543462622118256153639193900_2.jpg"
              alt=""
            />
            </SwiperSlide>
            <SwiperSlide>
            <img className="instaImage"
              src="https://www.royalenfield.com/node/assets/locobuzz/167543462522217950969487454224_8.jpg"
              alt=""
            />
            </SwiperSlide>
            
            </div>
          
          </Swiper>
    </div>

    <div className='Wrapper'>
    <h2>#RideMania2022</h2>
    <div className='insta'>
            <h3>@Anonymous</h3>
            <AiFillInstagram className='instaIcon'/>
    </div>
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
            <div className="instaImageWrap">
            <SwiperSlide>
            <img className="instaImage"
              src="https://www.royalenfield.com/node/assets/locobuzz/167120102007017865440723793673_5.jpg"
              alt=""
            />
            </SwiperSlide>
            <SwiperSlide>
            <img className="instaImage"
              src="https://www.royalenfield.com/node/assets/locobuzz/167120101914618063240610352602_1.jpg"
              alt=""
            />
            </SwiperSlide>
            <SwiperSlide>
            <img className="instaImage"
              src="https://www.royalenfield.com/node/assets/locobuzz/167120101823717964336407122985_3.jpg"
              alt=""
            />
            </SwiperSlide>
            <SwiperSlide>
            <img className="instaImage"
              src="https://www.royalenfield.com/node/assets/locobuzz/167120101731417962719761157922_9.jpg"
              alt=""
            />
            </SwiperSlide>
            
            </div>
          
          </Swiper>
    </div>

    <div className='Wrapper'>
    <h2>#Classic350</h2>
    <div className='insta'>
            <h3>@Anonymous</h3>
            <AiFillInstagram className='instaIcon'/>
    </div>
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
            <div className="instaImageWrap">
            <SwiperSlide>
            <img className="instaImage"
              src="https://www.royalenfield.com/node/assets/locobuzz/167120102186418005033476490776_1.jpg"
              alt=""
            />
            </SwiperSlide>
            <SwiperSlide>
            <img className="instaImage"
              src="https://www.royalenfield.com/node/assets/locobuzz/167120102451817848210067878541_1.jpg"
              alt=""
            />
            </SwiperSlide>
            <SwiperSlide>
            <img className="instaImage"
              src="https://www.royalenfield.com/node/assets/locobuzz/167120102359817988175453663384_3.jpg"
              alt=""
            />
            </SwiperSlide>
            <SwiperSlide>
            <img className="instaImage"
              src="https://www.royalenfield.com/node/assets/locobuzz/167120102271218030337648430933_1.jpg"
              alt=""
            />
            </SwiperSlide>
            
            </div>
          
          </Swiper>
    </div>

    <div className='Wrapper'>
    <h2>#VibeHunder</h2>
    <div className='insta'>
            <h3>@Anonymous</h3>
            <AiFillInstagram className='instaIcon'/>
    </div>
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
            <div className="instaImageWrap">
            <SwiperSlide>
            <img className="instaImage"
              src="https://www.royalenfield.com/node/assets/locobuzz/167120102996517903998682667209_4.jpg"
              alt=""
            />
            </SwiperSlide>
            <SwiperSlide>
            <img className="instaImage"
              src="https://www.royalenfield.com/node/assets/locobuzz/167120102901317945997167411661_1.jpg"
              alt=""
            />
            </SwiperSlide>
            <SwiperSlide>
            <img className="instaImage"
              src="https://www.royalenfield.com/node/assets/locobuzz/167120102814417937029870393876_2.jpg"
              alt=""
            />
            </SwiperSlide>
            <SwiperSlide>
            <img className="instaImage"
              src="https://www.royalenfield.com/node/assets/locobuzz/167120103081717915305103565562_1.jpg"
              alt=""
            />
            </SwiperSlide>
            
            </div>
          
          </Swiper>

    </div>
    </div>

    <div className='help'>

      <div className='iconDiv'>
          <TfiHandPointUp className='helpIcons'/>
          <div>
          <p>Book a Test Ride </p>
          <TbMathGreater/>
          </div>     
      </div>

      <div className='iconDiv'>
          <TfiMapAlt className='helpIcons'/>
          <div>
          <p>Find a Store </p>
          <TbMathGreater/>
          </div>     
      </div>

      <div className='iconDiv'>
          <TfiMapAlt className='helpIcons'/>
          <div>
          <p>Ride Out </p>
          <TbMathGreater/>
          </div>     
      </div>

      <div className='iconDiv'>
          <VscTools className='helpIcons'/>
          <div>
          <p>Book a Service </p>
          <TbMathGreater/>
          </div>     
      </div>

    </div>
    </>
  )
}

export default InstagramImage
