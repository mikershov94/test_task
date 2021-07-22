import React, { Children } from "react";
import "./_col-2.sass";

const CellCol2 = ({children}) => {
    return(
        <th className="table__cell table__cell_col-2">Трафик{children}</th>
    );
}

export default CellCol2;