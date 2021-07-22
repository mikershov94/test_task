import React from "react";
import "./__header.sass";

const CellHeader = ({ srcImg, text }: {srcImg: string, text: string}) => {
    return(
        <div className="cell__header">
            <img src={srcImg}/>
            <div className="cell__text">{text}</div>
        </div>
    );
}

export default CellHeader;