import React, {Component} from "react";
import Navbar from "../components/Navbar"
import Menu from "../components/Menu"
import Hamburger from "../components/Hamburger";
// import { slide as Menu } from 'react-burger-menu'
import city from "../assets/town_r6pc.svg";
import "./HomePage.css"
import OfferSection from "../components/OfferSection";
import Footnote from "../components/Footnote";

import logo from "../assets/logo_golight.png"
export default class HomePage extends Component {
  
    constructor(props) {
        super(props);
        // Initialize Default State
        this.state = {
            open:false
    
        };
      }
  toggleMenu = () => {
    console.log("called toggle menu")
    this.setState({
        open: !this.state.open,
        
      });
  }

  render () {
    // NOTE: You also need to provide styles, see https://github.com/negomi/react-burger-menu#styling
    return (
    <>
    <Navbar onClickFunction={this.toggleMenu}/>
    <div className="topBar"></div>

    <div className="mobile-navbar">
          <Hamburger open={this.state.open} setOpen={this.toggleMenu} />
          <Menu isOpen={this.state.open} setOpen={this.toggleMenu}>
            <a id="home" className="menu-item" href="/">Home</a>
            <a id="about" className="menu-item" href="/about">About</a>
            <a id="contact" className="menu-item" href="/contact">Contact</a>
        </Menu>
    </div>

    <div className="startPage">

        <object data={city} className="imageCity"> </object>
        <div className="rightSection">
            <img src={logo} className="image"></img>
            <div className="mainDescription motto">nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."</div>
        </div>
    </div>
    <OfferSection/>
    <Footnote/>
    </>
    );
  }
}
