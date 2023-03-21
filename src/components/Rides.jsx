import React, { useEffect, useState } from 'react'
import './Motorcycles.css'
// import axios from 'axios'
import {RiderSlider} from '../data/RiderSlider.js'
import {TbMathGreater} from 'react-icons/tb'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard} from "swiper";
import { NavLink } from 'react-router-dom';
import 'animate.css';


const Rides = () => {
    const [rideImages,setRideImages]=useState(RiderSlider)
    const [scrolling, setScrolling ]=useState(false)


    const filter=(type)=>{
      setRideImages(RiderSlider.filter((bike)=>bike.category===type))
    }
  
    const navLinkStyle=({isActive})=>{
      return{
        color:isActive? 'red':'white'
      }
    }
    useEffect(()=>{
      window.addEventListener("scroll",()=>{
        if(window.scrollY>1500 && window.scrollY<2200){
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

            {!scrolling &&  <h3>Rides</h3>}
            <div className={`MCNavItems ${scrolling && 'animate__animated animate__backInLeft'}`}>
                <NavLink to={'/Royal Enfeild Trial School'} style={navLinkStyle}  onClick={()=>filter("Royal Enfeild Trial School")}>Royal Enfeild Trial School</NavLink>
                <div className='vl'></div>
                <NavLink to={'/Ride Mania 2022'} style={navLinkStyle}   onClick={()=>filter("Ride Mania 2022")}>Ride Mania 2022</NavLink>
                <div className='vl'></div>
                <NavLink to={'/RE:Map'} style={navLinkStyle}  onClick={()=>filter("RE:Map")}>RE:Map</NavLink>
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
          {rideImages.map((item)=>(
        
            <SwiperSlide>
              <div className="img" >
              <img src={item.image} alt="" />
              <div className="btnDiv"  style={{right:'38rem',backgroundColor:'green',border:'1px solid white'}}>
              <button>Download Now</button>
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

export default Rides
