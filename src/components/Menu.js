import React, { useState, Component } from "react";
import styled from "styled-components";
import { useRef } from "react";

import Hamburger from "./Hamburger";
import "./Menu.css";



export const colors = {
    yellowmellow: "#fbe69b",
    lightbrown: "#be8b7b",
    pearl: "#fdf2e9",
    lightblue: "#93CEF0"
  };


// const StyledMenu = styled.nav`
//   top: 0;
//   left: 0;
//   height: 100vh;
//   width: 35vw;
//   position: fixed;
//   background-color: ${colors.lightbrown};
//   z-index: 1;
//   padding: 10rem 0;
//   flex-direction: column;
//   display: ${({ open }) => (open ? "flex" : "none")};
// `;
// const StyledLink = styled.a`
//   padding: 0 2rem;
//   font-size: 2rem;
//   color: ${colors.pearl};
//   text-decoration: none;
  
//   :hover {
//     color: ${colors.yellowmellow};
//     cursor: pointer;
//   }
// `;


export default class Menu extends Component  {

//   useOnClickOutside(node, () => setOpen(false));

  constructor(props) {
    super(props);
    // Initialize Default State

  }

  setOpen = (val) => {
    this.setState({
        open: val,
        
      });
  }

  closeIt = () => {
    this.setState({
        open: false,
        
      });
      
  }

  render() {
    return (
        <>{this.props.isOpen ? (        
        <div>
            <div className="StyledMenu" open={this.props.isOpen}>
              <h3>Menu</h3>
              <a className="StyledLink" onClick={this.closeIt}>O nas</a>
              <a className="StyledLink" onClick={this.closeIt}>Oferta</a>
              <a className="StyledLink" onClick={this.closeIt}>Kontakt</a>
            </div>
        </div>
        )
          :(<></>)}
        </>
        

      );

  }


};
