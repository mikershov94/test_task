import React from "react";
import "./_header-3.sass";

const RowHeader3 = ({children}) => {
    return(
        <tr className="table__row table__row_header-3">
            {children}
        </tr>
    );
}

export default RowHeader3;