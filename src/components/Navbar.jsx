import React, { useState,useEffect} from 'react'
import './Navbar.css'
import {CiSearch} from 'react-icons/ci'
import {AiOutlineDown} from 'react-icons/ai'
import {CgMenu} from 'react-icons/cg'


const Navbar = () => {

    const [hideSeek1,setHideSeek1]=useState(false)
    const [hideSeek2,setHideSeek2]=useState(false)
    const [hideSeek3,setHideSeek3]=useState(false)
    const [showMenu, setShowMenu ]=useState(false)
    const [scrolling, setScrolling ]=useState(false)



    const seeking1 = (e) => {
        e.preventDefault()
        setHideSeek1((hideSeek1) => !hideSeek1);
      };
    

    const seeking2=(e)=>{
        e.preventDefault()
        setHideSeek2((hideSeek2) => !hideSeek2);
    }

    const seeking3=(e)=>{
        e.preventDefault()
        setHideSeek3((hideSeek3) => !hideSeek3);
    }


    const menuFun=()=>{
    setShowMenu((showmenu) => !showmenu);
    }

    useEffect(()=>{
      window.addEventListener("scroll",()=>{
        if(window.scrollY>0 && window.scrollY<800){
          setScrolling(true)
        }else{
          setScrolling(false)
        }
      })
    },[])

    console.log(scrolling);

  return (
    <>
      <div className={`nav ${scrolling && 'scrollFix'}`}>
        <div className="logo">
        <img className='logoImage' src="https://www.nicepng.com/png/full/244-2444940_royal-enfield-classic-satin-royal-enfield-motorcycle-logo.png" alt="" />
        </div>
        <div className="items">

            <a href="">Motorcycles</a>

            <div className='downItem'>
            <a href="" onClick={seeking1}>Shop The Look</a>
            <AiOutlineDown/>
            { hideSeek1 && ( 
           <div className='seek1'>
                <a>Accessories</a>
                <a>Apparel</a>     
            </div>
            )}
            </div>
            
            <div className='downItem'>
            <a value=""  onClick={seeking2}>Own A Royal Enfeild</a>
            <AiOutlineDown/>
            {hideSeek2 &&(
            <div className='seek2'>
            <a>Retail</a>
            <a>Finance</a>
            <a>Book a Test Ride</a>
            <a>Configure Now</a>
            </div>
            )}
            </div>
            
            
            <a href="">Services</a>
            <a href="">Rides</a>


            <div className='downItem'>
            <a href="" onClick={seeking3}>Reach Us</a>
            <AiOutlineDown/>
            {hideSeek3 &&(
            <div className='seek3'>
                <a>Support</a>
                <a>Locate Us</a>
                <a>Our World</a>
            </div>
            )}
            </div>

            </div>
            <div className="icon">
                <div className='i'>
                <h4>Login</h4>
                <AiOutlineDown/>
                </div>
                <CiSearch className='search'/>
                <div className='i'>
                <h4>En</h4>
                <AiOutlineDown/>
                </div>
                <CgMenu className='menuBtn' onClick={menuFun}/>
            </div>
      </div>





{showMenu &&
  <div className="Resitems">

<a href="">Motorcycles</a>

<div className='ResdownItem'>
<a href="" onClick={seeking1}>Shop The Look</a>
<AiOutlineDown/>
{ hideSeek1 && ( 
<div className='Resseek1'>
    <a>Accessories</a>
    <a>Apparel</a>     
</div>
)}
</div>

<div className='ResdownItem'>
<a value=""  onClick={seeking2}>Own A Royal Enfeild</a>
<AiOutlineDown/>
{hideSeek2 &&(
<div className='Resseek2'>
<a>Retail</a>
<a>Finance</a>
<a>Book a Test Ride</a>
<a>Configure Now</a>
</div>
)}
</div>


<a href="">Services</a>
<a href="">Rides</a>


<div className='ResdownItem'>
<a href="" onClick={seeking3}>Reach Us</a>
<AiOutlineDown/>
{hideSeek3 &&(
<div className='Resseek3'>
    <a>Support</a>
    <a>Locate Us</a>
    <a>Our World</a>
</div>
)}
</div>

</div>}
    </>
  )
}

export default Navbar
