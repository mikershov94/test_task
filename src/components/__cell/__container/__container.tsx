import React from "react";
import "./__container.sass";

const CellContainer = ({children}: {children: React.ReactNode}) => {
    return(
        <div className="cell__container">{children}</div>
    );
}

export default CellContainer;