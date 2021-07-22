import React from "react";
import "./_col-4.sass";

const CellCol4 = ({children}: {children: React.ReactNode}) => {
    return(
        <th className="table__cell table__cell_col-4">{children}</th>
    );
}

export default CellCol4;