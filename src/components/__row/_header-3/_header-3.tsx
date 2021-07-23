import React from "react";
import { CellCol1, CellCol2, CellCol3, CellCol4, Subcol } from "../../__cell";
import "./_header-3.sass";

const RowHeader3 = () => {
    return(
        <tr className="table__row table__row_header-3">
            <CellCol1>Итого</CellCol1>
            <CellCol2>
                <Subcol type="data" colNum="1">0</Subcol>
                <Subcol type="data" colNum="2">0</Subcol>
                <Subcol type="data" colNum="3">0</Subcol>
                <Subcol type="data" colNum="4">0</Subcol>
                <Subcol type="data" colNum="5">0</Subcol>
                <Subcol type="data" colNum="6">0</Subcol>
            </CellCol2>
            <CellCol3>
                <Subcol type="data" colNum="7">0</Subcol>
                <Subcol type="data" colNum="8">0</Subcol>
                <Subcol type="data" colNum="9">0</Subcol>
            </CellCol3>
            <CellCol4>
                <Subcol type="data" colNum="10">0</Subcol>
                <Subcol type="data" colNum="11">0</Subcol>
                <Subcol type="data" colNum="12">0</Subcol>
            </CellCol4>
        </tr>
    );
}

export default RowHeader3;