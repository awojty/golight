import React, {useState, Component } from 'react';
import {
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarNav,
  MDBNavItem,
  MDBNavLink,
  MDBNavbarToggler,
  MDBCollapse,
  MDBContainer
} from 'mdbreact';
import { BrowserRouter as Router } from 'react-router-dom';
import {Link} from 'react-router-dom';
import "./Navbar.css"
import logo from "../assets/logo_golight.png"


export default class Navbar extends Component  {
    constructor(props) {
        super(props);
        // Initialize Default State
        this.state = {
            clicked:false

        }
      }

    
    toggleMenu = () => {
            this.setState({
              clicked: !this.state.clicked,
              
            });

          }
    
    
      componentDidMount() {
        // remember -- api calls go here!
      }

    render(){
        return(

            <div className="sticky">
            <div className="navbar">
                <>
                  <div className="navbar-logo">
                    <Link to="/" className="navbar-text noselect">
                      <img src={logo} style={{height:"40px"}}></img>
                    </Link>
                  </div>
                  <div className="navbar-links">
                    <span className={`navbar-background ${this.props.page === "Home" ? "current-page" : ""}`}>
                      <div className="navbar-item">
                        <Link to="/onas" className="navbar-text noselect">O nas</Link>
                      </div>
                    </span>
                    <span className={`navbar-background ${this.props.page === "New Goal" ? "current-page" : ""}`}>
                      <div className="navbar-item">
                        <Link to="/uslugi" className="navbar-text noselect">Uslugi</Link>
                      </div>
                    </span>
                    <span className={`navbar-background ${this.props.page === "Goals" ? "current-page" : ""}`}>
                      <div className="navbar-item">
                        <Link to="/kontakt" className="navbar-text noselect">Kontakt</Link>
                      </div>
                    </span>
                  </div>
                </>
            </div>
          </div>
    
    
        );


    }





}