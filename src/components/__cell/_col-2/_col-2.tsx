import React, { Children } from "react";
import "./_col-2.sass";

const CellCol2 = ({children}: {children: React.ReactNode}) => {
    return(
        <th className="table__cell table__cell_col-2">
            {children}
        </th>
    );
}

export default CellCol2;