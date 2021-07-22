import React from "react";
import "./_header-1.sass";

const RowHeader1 = ({ children }) => {
    return(
        <tr className="table__row table__row_header-1">
            {children}
        </tr>
    );
}

export default RowHeader1;