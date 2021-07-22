import React from "react";
import "./_header-2";

const RowHeader2 = ({children}: {children: React.ReactNode}) => {
    return(
        <tr className="table__row table__row_header-2">
            {children}
        </tr>
    );
}

export default RowHeader2;