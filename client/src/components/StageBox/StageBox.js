//stage boxes to select for fight

import React from "react";
import "./StageBox.css";



const StageBox = props => (
    <div className="stage">
        <div className="img-container">
            <img alt={props.name} src={props.image} />
        </div>
    </div>

);


export default StageBox;
