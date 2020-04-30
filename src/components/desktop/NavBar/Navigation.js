import React, { useState, useEffect } from 'react';
import './navBar.css'

// const white = 'white'
// const black = 'black'
// const myNav = 'navBar'


const Navigation = (props) => {
  // const [scroll, setScroll] = useState(true)

  // useEffect(() => {
  //   document.addEventListener("scroll", () => {
  //     const scrollCheck = window.scrollY 
  //     if (scrollCheck < 25) {
  //       setScroll(!scrollCheck)
  //     }
  //   })
  // })


  return (
    <nav className ='navBar white'>
    <h1 className = 'name'>Andrew Ogle</h1>
    <a href='#portfolio' >portfolio</a>
    <a href='#contact'>Contact</a>
    <a href='#'>Home</a>

    </nav>
  );
}

export default Navigation;