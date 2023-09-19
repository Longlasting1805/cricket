import React, { useState } from "react";
import imgUrl from './assets/NCF-Logo.jpg'

export const Landingpage = (props) =>{

    return(
        <div className="root-div-container">
            <div className="cricket-logo">
                <img className="ncf-logo"src={imgUrl} alt="" />
                <h1 className="logo-description">Nigeria Cricket <br></br> Federation</h1>

            </div>

                <div className="cricket-nav">
                <nav className="navbar">
                    <a href="/home/" className="home"> Home </a> |
                    <a href="/acusn/" className="acusn"> ACUSN </a> |
                    <a href="/ls/" className="livescore"> Live Scores </a> |
                    <a href="/about us/" className="aboutus"> About us </a> |
                    <a href="/contact us/" className="contactus"> Contact us </a> |
                    <a href="/more/" className="more"> More </a> |
                    <a href="/donate/" className="donate"> Donate </a>
                    </nav>
                </div>
            

        </div>
    )
    

}


