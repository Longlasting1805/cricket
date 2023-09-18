import React, { useState } from "react";
import imgUrl from './assets/NCF-Logo.jpg'

export const Landingpage = (props) =>{

    return(
        <div className="root-div-container">
            <div className="cricket-logo">
                <img className="ncf-logo"src={imgUrl} alt="" />
                <h1 className="logo-description">Nigeria Cricket Federation!</h1>
            </div>

        </div>
    )
    

}


