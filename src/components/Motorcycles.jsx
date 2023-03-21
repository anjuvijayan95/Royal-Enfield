import React, { useEffect, useState } from 'react'
import './Motorcycles.css'
// import axios from 'axios'
import {MCSlider} from '../data/MCSlider.js'
import {TbMathGreater} from 'react-icons/tb'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard} from "swiper";
import { NavLink } from 'react-router-dom';
import 'animate.css';


const Motorcycles = () => {

  const [mcImages,setMCImages]=useState(MCSlider)
  const [scrolling, setScrolling ]=useState(false)


  const filter=(type)=>{
    setMCImages(MCSlider.filter((bike)=>bike.category===type))
  }

  const navLinkStyle=({isActive})=>{
    return{
      color:isActive? 'red':'white'
    }
  }

  useEffect(()=>{
    window.addEventListener("scroll",()=>{
      if(window.scrollY>800 && window.scrollY<1500){
        setScrolling(true)
      }else{
        setScrolling(false)
      }
    })
  },[])

  return (
    <>
      <section>
        <nav id="MCNav" className={`mc ${scrolling && 'scrollFix'}`}>
      
          
          {scrolling &&          
          <div className="logo animate__animated animate__backInLeft">
          <img style={{width:'6rem'}} className='logoImage' src="https://www.nicepng.com/png/full/244-2444940_royal-enfield-classic-satin-royal-enfield-motorcycle-logo.png" alt="" />
          </div>
          }

     
             {!scrolling &&  <h3>Motorcycles</h3>}
              
            <div className={`MCNavItems ${scrolling && 'animate__animated animate__backInLeft'}`}>
                <NavLink to={'/Interceptor'} style={navLinkStyle}  onClick={()=>filter("Interceptor")}>Interceptor</NavLink>
                <div className='vl'></div>
                <NavLink to={'/Continental'} style={navLinkStyle}   onClick={()=>filter("Continental GT")}>Continental GT</NavLink>
                <div className='vl'></div>
                <NavLink to={'/Super Meteor 650'} style={navLinkStyle}  onClick={()=>filter("Super Meteor 650")}>Super Meteor 650</NavLink>
                <div className='vl'></div>
                <NavLink to={'/Hunder 350'} style={navLinkStyle}  onClick={()=>filter("Hunder 350")}>Hunder 350</NavLink>
                <div className='vl'></div>
                <NavLink to={'/Scram 411'} style={navLinkStyle}  onClick={()=>filter("Scram 411")}>Scram 411</NavLink>
                <div className='vl'></div>
                <NavLink to={'/Classic'} style={navLinkStyle}  onClick={()=>filter("Classic")}>Classic</NavLink>
                <div className='vl'></div>
                <NavLink to={'/Meteor'} style={navLinkStyle}  onClick={()=>filter("Meteor")}>Meteor</NavLink>
                <div className='vl'></div>
                <NavLink to={'/Himalayan'} style={navLinkStyle}  onClick={()=>filter("Himalayan")}>Himalayan</NavLink>
                <div className='vl'></div>
                <NavLink to={'/Bullet'} style={navLinkStyle}  onClick={()=>filter("Bullet")}>Bullet</NavLink>
            </div>
        </nav>

        <div className="MCSlider">
        <Swiper
            cssMode={true}
            navigation={true}
            pagination={true}
            mousewheel={true}
            keyboard={true}
            loop={true}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            className="mySwiper"
          >
          {mcImages.map((item)=>(
        
            <SwiperSlide>
              <div className="img">
              <img src={item.image} alt="" />
              <div className="btnDiv">
              <button>Explore</button>
              <TbMathGreater className="arrow"/>
              </div>
              </div>
            </SwiperSlide>
          
          )
          )}
          </Swiper>
        </div>
      </section>
    </>
  )
}

export default Motorcycles
