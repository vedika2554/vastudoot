import React from "react";
import "./Plancard.css"

function Plancard({id, image, design}){
    return(
     
     <>
     <div className="hjkpt">
        <div className="prl">
            <img src={image} className="lan"/>
        <h1 className="tpl">{design}</h1></div></div>
     </>
    )
}

export default Plancard