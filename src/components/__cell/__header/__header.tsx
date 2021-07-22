import React from "react";
import "./__header";

const CellHeader = ({ srcImg, text }) => {
    return(
        <div className="cell__header">
            <img src={srcImg}/>
            <div className="cell__text">{text}</div>
        </div>
    );
}

export default CellHeader;