import React, { useEffect, useState } from 'react'
import './Motorcycles.css'
// import axios from 'axios'
import {ApparelSlider} from '../data/ApparelSlider.js'
import {TbMathGreater} from 'react-icons/tb'

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Mousewheel, Keyboard} from "swiper";
import { NavLink } from 'react-router-dom';
import 'animate.css';


const Apprel = () => {
    const [apparelImages,setApparelImages]=useState(ApparelSlider)
    const [shop,setShop]=useState(false)
    const [know,setKnow]=useState(false)
    const [scrolling, setScrolling ]=useState(false)



    const shopFilter=()=>{
        if(ApparelSlider.find((bike)=>bike.button==='shop')){
            setShop(true)
        }
        else{
            setShop(false)
        }
    }

    // const knowFilter=()=>{
    //     if(ApparelSlider.find((bike)=>bike.button==='know')){
    //         setKnow(true)
    //     }
    // }

    const filter=(type)=>{
        setApparelImages(ApparelSlider.filter((bike)=>bike.category===type))
    }
  
    const navLinkStyle=({isActive})=>{
      return{
        color:isActive? 'red':'white'
      }
    }

    useEffect(()=>{
      window.addEventListener("scroll",()=>{
        if(window.scrollY>2200 && window.scrollY<2900){
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

            {!scrolling && <h3>Apparel</h3>}
            <div className={`MCNavItems ${scrolling && 'animate__animated animate__backInLeft'}`} style={{justifyContent:'space-evenly', fontSize:'15px',width:'90%'}}>
                <NavLink to={'/Art Of Motorcycling'} style={navLinkStyle}  onClick={()=>filter("Art Of Motorcycling")}>Art Of Motorcycling</NavLink>
                <div className='vl'></div>
                <NavLink to={'/Super Meteor 650'} style={navLinkStyle}   onClick={()=>filter("Super Meteor 650")}>Super Meteor 650</NavLink>
                <div className='vl'></div>
                <NavLink to={'/The Classic Collectible'} style={navLinkStyle}  onClick={()=>filter("The Classic Collectible")}>The Classic Collectible</NavLink>
                <div className='vl'></div>
                <NavLink to={'/Royal Enfeild X Alpinestar'} style={navLinkStyle}  onClick={()=>filter("Royal Enfeild X Alpinestar")}>RE:MapRoyal Enfeild X Alpinestar</NavLink>
                <div className='vl'></div>
                <NavLink to={'/Scram 411 Collections'} style={navLinkStyle}  onClick={()=>filter("Scram 411 Collections")}>Scram 411 Collections</NavLink>
                <div className='vl'></div>
                <NavLink to={'/Royal Enfeild X TCX'} style={navLinkStyle}  onClick={()=>filter("Royal Enfeild X TCX")}>Royal Enfeild X TCX</NavLink>
                <div className='vl'></div>
                <NavLink to={'/MIY Riding'} style={navLinkStyle}  onClick={()=>filter("MIY Riding")}>MIY Riding</NavLink>
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
          {apparelImages.map((item)=>(
        
            <SwiperSlide>
              <div className="img" onLoad={()=>{
                shopFilter() 
                }}>
              <img src={item.image} alt="" />
            {shop &&
              <div className="btnDiv"  style={{right:'8rem',top:'8rem',backgroundColor:'red'}}>
              <button style={{color:'black',fontWeight:'bold'}}>Shop Now</button>
              <TbMathGreater className="arrow" style={{color:'black',fontWeight:'bold'}}/>
              </div>
              }
            {!shop &&
              <div className="btnDiv"  style={{right:'8rem',top:'8rem',backgroundColor:'red'}}>
              <button style={{color:'black',fontWeight:'bold'}}>Know Now</button>
              <TbMathGreater className="arrow" style={{color:'black',fontWeight:'bold'}}/>
              </div>
              }
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

export default Apprel
