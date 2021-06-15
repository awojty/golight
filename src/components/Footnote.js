import React, {useState, Component } from 'react';
import "./Footnote.css"

export default class Footnote extends Component  {
    constructor(props) {
        super(props);
        // Initialize Default State
        this.state = {
            clicked:false

        }
      }
    render(){
        return(
            <div className="footnoteSection">
                <div>GoLight</div>
                <div>Telefon +4 1234567889</div>
                <div>Email 12344@wp.pl</div>
                <div>Adres:</div>
                <div></div>
                <div>ul.Adres 1231</div>
                <div>00-000 Warszawa</div>

                <div>Icons made by <a href="https://www.freepik.com" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                <div>Icons made by <a href="https://www.flaticon.com/authors/smashicons" title="Smashicons">Smashicons</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
                <div>Icons made by <a href="https://www.flaticon.com/authors/dinosoftlabs" title="DinosoftLabs">DinosoftLabs</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
          </div>
        )

    }
}