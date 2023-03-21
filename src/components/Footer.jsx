import React from "react";
import './Footer.css'
import {ImFacebook2,ImTwitter,ImYoutube} from 'react-icons/im'
import {AiFillInstagram} from 'react-icons/ai'

const Footer = () => {
  return (
    <>
      <div className="footerMain">
        
        <div className="footerLinkIcons">
        <p>Join The Conversation</p>
        <ImFacebook2/>
        <ImTwitter/>
        <ImYoutube/>
        <AiFillInstagram/>
        </div>
        <hr />
        <div className="footerLinks">
          <div>
            <h4>MotorCycles</h4>
            <div>
              <a href="">Super Meteor 650</a>
              <a href="">Hunter 350</a>
              <a href="">Scram 411</a>
              <a href="">Classic 350</a>
              <a href="">Meteor</a>
              <a href="">Interceptor 650</a>
              <a href="">Continental GT</a>
              <a href="">Himalayan</a>
              <a href="">Bullet</a>
            </div>
          </div>
          <div>
            <h4>Rides and Events</h4>
            <div>
              <a href="">Rides</a>
              <a href="">Events</a>
              <a href="">Ride Out</a>
            </div>
          </div>
          <div>
            <h4>Support</h4>
            <div>
              <a href="">Service Centres</a>
              <a href="">Stores</a>
              <a href="">Owner's Manual</a>
              <a href="">Contact Us</a>
              <a href="">Book a Test Ride</a>
              <a href="">Make It Yours</a>
              <a href="">Become a Dealer</a>
              <a href="">Become a Genuine</a>
              <a href="">Parts Distributor</a>
            </div>
          </div>
          <div>
            <h4>About Us</h4>
            <div>
              <a href="">Since 1901</a>
              <a href="">About Eicher Motors</a>
            </div>
          </div>
          <div>
            <h4>News & Media</h4>
            <div>
              <a href="">News</a>
              <a href="">Press Releases</a>
              <a href="">Media Kit</a>
              <a href="">Events</a>
            </div>
          </div>
          <div>
            <h4>Careers</h4>
            <div>
              <a href=""> Life at Royal Enfield</a>
            </div>
          </div>
          <div>
            <h4>Our World</h4>
            <div>
              <a href="">Royal Enfield App</a>
              <a href="">Custom World</a>
              <a href="">News and Media</a>
              <a href="">Since 1901</a>
              <a href="">Wallpapers</a>
              <a href="">Forum</a>
              <a href="">Trip Stories</a>
            </div>
          </div>
        </div>
        <hr />
        <div className="lastDiv">
          <div className="lastDivSub1">
            <h6>© 2023. Royal Enfield. | *T&C apply. Images shown here may differ from the actual product.</h6>
          </div>
          <div className="lastDivSub2">
            <h6>Private Import Policy</h6>
            |
            <h6>Privacy</h6>
            |
            <h6>Terms & Conditions</h6>
            |
            <h6>Cookies</h6>
            |
            <h6>Sitemap</h6>
         </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
