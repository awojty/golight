import React, {Component} from "react";
import Navbar from "../components/Navbar"
import Menu from "../components/Menu"
import Hamburger from "../components/Hamburger";
import contact from "../assets/undraw_contact_us_15o2.svg";
import "./Contact.css"
import "./HomePage.css"
import Footnote from "../components/Footnote";
export default class Contact extends Component {

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
                    <h1 className="contactTitle">Kontakt</h1>
                    <p className="mainDescription">"Lorem ipsum dolor sit amet,</p>
                    <p className="mainDescription">Telefon: 123456789</p>
                    <p className="mainDescription">Email: 123456789@wp.pl</p>
                    <p className="mainDescription">Adres: 123456789</p>
                </div>
                <object data={contact} className="imageContact"> </object>

                </div>
              <object data={contact} className="imageMobile"> </object>


                <Footnote/>

          </>

      );
    }
  }
  