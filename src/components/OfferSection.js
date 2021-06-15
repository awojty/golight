import React, {Component}  from "react";
import "./OfferSection.css"
import cone from "../assets/traffic-cone.png"
import traffic from "../assets/traffic.png"
import lights from "../assets/traffic-lights.png"

export default class OfferSection extends Component  {


    constructor(props) {
        super(props);
        // Initialize Default State
    
      }

    render(){
        return(
        <div className="offerSection">
            <h1 className="offerTitle">Nasza oferta</h1>
            <div className="offerGrid">
                <div className="offerItem">
                     <img src={traffic} className="offerIcon"></img>
                     <h2 className="title">TITLE1</h2>
                     <h4 className="description">max-width: 100vw; max-width: 100vw;max-width: 100vw;max-width: 100vw;</h4>
                </div>
                <div className="offerItem" >
                     <img src={lights} className="offerIcon"></img>
                     <h2 className="title">TITLE1</h2>
                     <h4 className="description">max-width: 100vw; max-width: 100vw;max-width: 100vw;max-width: 100vw;</h4>
                </div>
                <div className="offerItem">
                     <img src={cone} className="offerIcon"></img>
                     <h2 className="title">TITLE1</h2>
                     <h4 className="description">max-width: 100vw; max-width: 100vw;max-width: 100vw;max-width: 100vw;</h4>
                </div>

            </div>
        </div>)
    }
}