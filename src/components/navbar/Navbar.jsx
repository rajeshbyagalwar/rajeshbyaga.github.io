import backImg from './logo.png';
// import DownloadIcon from "@mui/icons-material/Download";
import styled from "styled-components";
import React, { useEffect, useState } from "react";
import { Link, animateScroll } from "react-scroll";
// import ThemeToggle from "../Theme/ThemeToggle";
const Navbar = () => {
  const [colorChange, setColorchange] = useState(false);
  const [head, setHead] = useState(false);
  const changeNavbarColor = () => {
    if (window.scrollY >= 80 || head) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  };
  window.addEventListener("scroll", changeNavbarColor);
  useEffect(() => {
    if (head || colorChange) {
      setColorchange(true);
    } else {
      setColorchange(false);
    }
  }, [head, colorChange]);
  return (
    <Container>
      <header
        className="header"
        style={{ backgroundColor: `${colorChange ? "white" : "transparent"}` }}
      >
        <a href="/" className="logo">
          Rajesh Byagalwar
        </a>
        <input className="menu-btn" type="checkbox" id="menu-btn" />
        <label className="menu-icon" htmlFor="menu-btn">
          <span className="navicon"></span>
        </label>
        <ul className="menu">
          <li>
            <Link
              activeClass="active"
              to="/"
              onClick={() => animateScroll.scrollToTop()}
              spy={true}
              smooth={true}
              style={{cursor:"pointer"}}
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="about"
              onClick={() => setHead(true)}
              spy={true}
              smooth={true}
              style={{cursor:"pointer"}}
            >
              About
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="skills"
              onClick={() => setHead(true)}
              spy={true}
              smooth={true}
              style={{cursor:"pointer"}}
            >
              Skills
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="projects"
              onClick={() => setHead(true)}
              spy={true}
              smooth={true}
              style={{cursor:"pointer"}}
            >
              Projects
            </Link>
          </li>
          <li>
            <Link
              activeClass="active"
              to="contact"
              onClick={() => setHead(true)}
              spy={true}
              smooth={true}
              style={{cursor:"pointer"}}
            >
              Contact
            </Link>
          </li>
        
          <li   style={{cursor:"pointer"}}>
            <a href="https://drive.google.com/file/d/1Ooovh6pL6Qt1-d-QGqugWcpRY0H7jfkv/view?usp=sharing">
              Resume
            </a>
          </li>
          <li>
            {/* <ThemeToggle/> */}
         </li>
        </ul>
      </header>
    </Container>
  );
};
const Container = styled.div`
  width: 100%;
  height: 70px;
  
  a {
    color: #000;
  }
  /* header */
  .header {
    position: fixed;
    width: 100%;
    z-index: 3;
    padding-top: 10px;
  }
  .header ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    padding-right: 50px;
  }
  .header li a {
    display: block;
    padding: 20px 25px;
    text-decoration: none;
  }
  .header .logo {
    display: flex;
    float: left;
    font-size: 2em;
    padding: 10px 30px;
    text-decoration: none;
    color: #343A40;
  }
  /* menu */
  .header .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.2s ease-out;
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 700;
    color: #343A40;
  }
  li a {
    color: #343A40;
  }
  li a:hover {
    color: #01A479;
  }
  .header li .resume {
    width: 80px;
    padding: 10px 20px;
    border-radius: 10px;
    border: 1px solid #01A479;
    background: #01A479;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    font-weight: bold;
    margin-top: 5px;
  }
  /* menu icon */
  .header .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }
  .header .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.2s ease-out;
    width: 18px;
  }
  .header .menu-icon .navicon:before,
  .header .menu-icon .navicon:after {
    background: #333;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.2s ease-out;
    width: 100%;
  }
  .header .menu-icon .navicon:before {
    top: 5px;
  }
  .header .menu-icon .navicon:after {
    top: -5px;
  }
  /* menu btn */
  .header .menu-btn {
    display: none;
  }
  .header .menu-btn:checked ~ .menu {
    width: 100%;
    max-height: 450px;
    background-color: white;
  }
  .header .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }
  .header .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }
  .header .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .header .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }
  /* 48em = 768px */
  @media (min-width: 60em) {
    .header li {
      float: left;
    }
    .header li a {
      padding: 20px 30px;
    }
    .header .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .header .menu-icon {
      display: none;
    }
  }
  @media only screen and (min-width: 769px) and (max-width: 960px) {
    .header .menu {
      font-size: small;
    }
    .resumeBox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
  }
  @media only screen and (min-width: 481px) and (max-width: 768px) {
    .resumeBox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
  }
  @media only screen and (min-width: 320px) and (max-width: 480px) {
    .resumeBox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
  }
  @media only screen and (max-width: 320px) {
    .resumeBox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
  }
  @media only screen and (max-width: 319px) {
    .resumeBox {
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: 20px;
    }
  }
`;
export default Navbar;

