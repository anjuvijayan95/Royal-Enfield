import React, { useEffect, useState } from 'react'
import './Motorcycles.css'
// import axios from 'axios'
import {AccessoriesSlider} from '../data/ApparelSlider.js'
import {TbMathGreater} from 'react-icons/tb'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard} from "swiper";
import { NavLink } from 'react-router-dom';

const Accesories = () => {
    const [accessoriesImages,setAccessoriesImages]=useState(AccessoriesSlider)
    const [scrolling, setScrolling ]=useState(false)

    const filter=(type)=>{
        setAccessoriesImages(AccessoriesSlider.filter((bike)=>bike.category===type))
    }
  
    const navLinkStyle=({isActive})=>{
      return{
        color:isActive? 'red':'white'
      }
    }

    useEffect(()=>{
      window.addEventListener("scroll",()=>{
        if(window.scrollY>2900 && window.scrollY<3600){
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

          {!scrolling && <h3>Accesories</h3>}
            <div className={`MCNavItems ${scrolling && 'animate__animated animate__backInLeft'}`} style={{justifyContent:'left', fontSize:'15px',width:'90%'}}>
                <NavLink to={'/Genuine Motorcycle Accessories'} style={navLinkStyle}  onClick={()=>filter("Genuine Motorcycle Accessories")}>Genuine Motorcycle Accessories</NavLink>
                <div className='vl'></div>
                <NavLink to={'/Make It Yours'} style={navLinkStyle}   onClick={()=>filter("Make It Yours")}>Make It Yours</NavLink>
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
          {accessoriesImages.map((item)=>(
        
            <SwiperSlide>
              <div className="img"  >
              <img src={item.image} alt="" />
             

              <div className="btnDiv"  style={{right:'38rem',top:'20rem',backgroundColor:'black'}}>
              <button style={{color:'red',fontWeight:'bold'}}>Know Now</button>
              <TbMathGreater className="arrow" style={{color:'red',fontWeight:'bold'}}/>
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

export default Accesories
