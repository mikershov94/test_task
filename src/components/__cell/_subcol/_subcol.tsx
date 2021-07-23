import React from "react";
import "./_subcol.sass";

interface CellSubcolProps {
    children: React.ReactNode,
    type: string,
    colNum: string,
}

const CellSubcol = (props: CellSubcolProps) => {
    switch(props.type) {
        case 'header':
            return <th className={`table__cell table__cell_subcol-${props.colNum}`}>{props.children}</th>;

        case 'data':
            return <td className={`table__cell table__cell_data table__cell_subcol-${props.colNum}`}>{props.children}</td>;
    
        default:
            return <td className={`table__cell table__cell_data table__cell_subcol-${props.colNum}`}>{props.children}</td>
    }
}

export default CellSubcol;