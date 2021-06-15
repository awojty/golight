import React, {Component} from "react";
import styled from "styled-components";
import "./Hamburger.css";

export const colors = {
    yellowmellow: "#fbe69b",
    lightbrown: "#be8b7b",
    pearl: "#fdf2e9",
    lightblue: "#93CEF0"
  };
  
const StyledHamburger = styled.button`
  position: fixed;
  left: 3vw;
  top: 3vw;
  width: 2rem;
  height: 2rem;
  padding: 0;
  background: transparent;
  
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  border: none;
  cursor: pointer;
  outline: none;
  z-index: 1;
  div {
    position: relative;
    width: 2rem;
    height: 0.25rem;
    border-radius: 10px;
    background-color: ${({ open }) =>
      open ? colors.pearl : colors.lightbrown};
  }
`;


export default class Hamburger extends Component{

    constructor(props) {
        super(props);
        // Initialize Default State
    
      }

    render(){    
        return( 
            <> 
            {/* {!this.props.open ? (   */}
                    <button
                    className="StyledHamburger"
                    open={this.props.open}
                    onClick={this.props.setOpen}>
                        <div  className={`StyledHamburgerSection ${this.props.open  ?  "open-1":"closed-1"}`}/>
                        <div  className={`StyledHamburgerSection ${this.props.open  ? "open-2" : "closed-2"}`}/>
                        <div  className={`StyledHamburgerSection ${this.props.open  ? "open-1-neg" : "closed-1"}`}/>
                    </button>
                    {/* ):
                    (<></>)} */}
                    </>)



            }

};