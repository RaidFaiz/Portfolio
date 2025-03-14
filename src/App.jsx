import { useState, useEffect, useRef } from 'react'
import Preloader from './component/PreLoader'
import logo from "./assets/logo.png"
import Icons from './component/Icons';
import Header from './component/Header';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <>
      {!isLoaded && <Preloader onStart={() => setIsLoaded(true)} />}
      {isLoaded && (
        <>
          <Navbar />
          <SocialMedia />
          <Header />
          <About />
        </>
      )}
    </>
  );
}

function Navbar() {
  return (
    <>
      <div className="navbar">
        <a href="#">
          <img className='logo-img' src={logo} alt="logo" />
        </a>
        <ul>
          <li><a href="">ABOUT</a></li>
          <li><a href="">WORK</a></li>
          <li><a href="">CONTACT</a></li>
        </ul>
      </div>    
    </>
  )
}

function SocialMedia() {
  return (
    <>
      <div className="social-media">
        <ul>
          <li><a href=""><Icons.LinkedinLogo/></a></li>
          <li><a href=""><Icons.InstagramLogo/></a></li>
          <li><a href=""><Icons.DribbbleLogo/></a></li>
          <li><a href=""><Icons.FacebookLogo/></a></li>
        </ul>
      </div>        
    </>
  )
}

function About() {
  return (
    <>
      <div className="about">
        <h2>about</h2>
        <p>My name is Raid Faiz Ridha. I recently embarked on my career as 
          a front-end developer. Having recently graduated from high school,
          i am now pursuing my long-held ambition of becoming a front-end web and game developer.
          I have been interested in this field since 10th grade. I am currently pursuing a degree in information systems at Universitas Terbuka.
          I have undertaken a number of courses with the objective of enhancing my skill set and developing the ability to create visually appealing website.
          I am currently studying JavaScript with the objective of creating a more attractive website.          
        </p>
      </div>
    </>
  )
}

export default App

