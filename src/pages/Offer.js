import React, {Component} from "react";
import Navbar from "../components/Navbar"
import Menu from "../components/Menu"
import Hamburger from "../components/Hamburger";
import contact from "../assets/undraw_contact_us_15o2.svg";
import "./Contact.css"
import "./HomePage.css"
import "./Offer.css"
import cone from "../assets/traffic-cone.png"
import Footnote from "../components/Footnote";

export default class Offer extends Component {

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
            {/* <Hamburger open={this.state.open} setOpen={this.toggleMenu} /> */}
            <Menu isOpen={this.state.open} setOpen={this.toggleMenu}>
                <a id="home" className="menu-item" href="/">Home</a>
                <a id="about" className="menu-item" href="/about">About</a>
                <a id="contact" className="menu-item" href="/contact">Contact</a>
            </Menu>
        </div>

            
            <h1 className="contactTitle">Co oferujemy?</h1>
            <div className="offerPart">
                <div className="offerContent">
                    <h2 className="titleOffer">TITLE1</h2>
                    <div className="offerBox">
                        <h4 className="offerDescription">max-width: 100vw;max-width: 100vw;max-width: 100vw;max-width: 100vw;max-width: 100vw;</h4>
                        <img src={cone} className="offerIcon"></img>
                    </div>
                </div>
                <div className="offerContent">
                    <h2 className="titleOffer">TITLE1</h2>
                    <div className="offerBox">
                        <h4 className="offerDescription"> max-width: 100vw;max-width: 100vw;max-width: 100vw;max-width: 100vw;</h4>
                        <img src={cone} className="offerIcon"></img>
                    </div>
                </div>
                <div className="offerContent">
                    <h2 className="titleOffer">TITLE1</h2>
                    <div className="offerBox">
                        <h4 className="offerDescription">max-width: 100vw;max-width: 100vw;max-width: 100vw;max-width: 100vw;</h4>
                        <img src={cone} className="offerIcon"></img>
                    </div>
                </div>
            </div>
            <Footnote/>


      </>

      );
    }
  }
  