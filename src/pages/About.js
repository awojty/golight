import React, {Component} from "react";
import Navbar from "../components/Navbar"
import Menu from "../components/Menu"
import Hamburger from "../components/Hamburger";
import city from "../assets/undraw_navigator_a479.svg";
import "./Contact.css"
import "./HomePage.css"
import Footnote from "../components/Footnote";
export default class About extends Component {

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
      return (
          <>
            <Navbar onClickFunction={this.toggleMenu}/>
            <div className="topBar"></div>
            <div>
                <Menu isOpen={this.state.open} setOpen={this.toggleMenu}>
                    <a id="home" className="menu-item" href="/">Home</a>
                    <a id="about" className="menu-item" href="/about">About</a>
                    <a id="contact" className="menu-item" href="/contact">Contact</a>
                </Menu>
            </div>
            <div className="startPage startPageMobile">
                <div>
                    <h1 className="contactTitle">O nas</h1>
                    <p className="mainDescription">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet, Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>
                    <p className="mainDescription">Lorem ipsum dolor sit amet, Lorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit ametLorem ipsum dolor sit amet</p>

                </div>
                <object data={city} className="imageContact"> </object>

                </div>
              <object data={city} className="imageMobile"> </object>


                <Footnote/>

          </>

      );
    }
  }
  