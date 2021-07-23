import React from "react";
import "./_col.sass";

interface CellColProps {
    children: React.ReactNode,
    type: string,
    colNum: string
}

const CellCol = (props: CellColProps) => {
    switch(props.type) {
        case 'header':
            return <th className={`table__cell table__cell_col-${props.colNum}`}>{props.children}</th>;

        default:
            return <th className={`table__cell table__cell_col-${props.colNum}`}>{props.children}</th>;
    }
}

export default CellCol;