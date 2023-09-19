import React, { useState } from "react";
import imgUrl from './assets/NCF-Logo.jpg'

export const Landingpage = (props) =>{

    return(
        <div className="root-div-container">
            <div className="cricket-logo">
                <img className="ncf-logo"src={imgUrl} alt="" />
                <h1 className="logo-description">Nigeria Cricket <br></br> Federation</h1>

                <div className="cricket-nav">
                <nav className="navbar">
                    <a href="/home/"> Home </a> |
                    <a href="/acusn/"> ACUSN </a> |
                    <a href="/ls/"> Live Scores </a> |
                    <a href="/about us/"> About us </a> |
                    <a href="/contact us/"> Contact us </a> |
                    <a href="/more/"> More </a> |
                    <a href="/donate/"> Donate </a> |
                    </nav>
                </div>
            </div>

        </div>
    )
    

}


