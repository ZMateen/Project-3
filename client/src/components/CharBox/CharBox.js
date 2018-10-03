//character select box

import React from "react";
import "./CharBox.css";



const CharBox = props => (
    <div className="char">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>

);


export default CharBox;
