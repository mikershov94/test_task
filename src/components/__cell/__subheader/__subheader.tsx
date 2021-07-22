import React from "react";
import "./__subheader.sass";

const CellSubheader = ({ srcImg, text }: {srcImg: string, text: string}) => {
    return(
        <div className="th-content__subheader">
            <img src={srcImg} />
            <div className="th-content__text">{text}</div>
        </div>
    );
}

export default CellSubheader;