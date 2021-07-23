import React from "react";
import "./_col-1.sass";

const CellCol1 = ({children}: {children: React.ReactNode}) => {
    return(
        <th className="table__cell table__cell_col-1">{children}</th>
    );
}

export default CellCol1;