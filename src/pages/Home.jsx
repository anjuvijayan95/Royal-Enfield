import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Motorcycles from '../components/Motorcycles'
import Rides from '../components/Rides'
import Apprel from '../components/Apprel'
import Accesories from '../components/Accesories'
import Footer from '../components/Footer'
import InstagramImage from '../components/InstagramImage'
// import InstaImages from '../components/InstaImage'



const Home = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <Motorcycles/>
      <Rides/>
      <Apprel/>
      <Accesories/>
      <InstagramImage/>
      <Footer/>
    </div>
  )
}

export default Home
