import React from "react";
import "./_col-3.sass";

const CellCol3 = ({children}: {children: React.ReactNode}) => {
    return(
        <th className="table__cell table__cell_col-3">{children}</th>
    );
}

export default CellCol3;