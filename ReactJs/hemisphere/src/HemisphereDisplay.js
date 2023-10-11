import React from "react";
import nothernPic from "./images/northern-hemisphere.png"
import southernPic from "./images/southern-hemisphere.png"
import "./Hemisphere.css"

const hemisphereConfig = {
    Nothern : {
        text: "It is the northern hemisphere",
        picture: nothernPic
    },
    Southern : {
        text: "It is the southern hemisphere",
        picture: southernPic
    }
}

const HemisphereDisplay = ({latitude}) => {

    const hemisphere = latitude > 0 ? "Nothern" : "Southern";

    const { text, picture } = hemisphereConfig[hemisphere]

    return (
        <div className= { hemisphere }>
            <img src={ picture } alt="hemisphere picture" />
            { text }
        </div>
    );
}

export default HemisphereDisplay;