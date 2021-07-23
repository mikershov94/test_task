import React from "react";
import { CellCol, Subcol } from "../../__cell";
import "./_header-3.sass";

const RowHeader3 = () => {
    return(
        <tr className="table__row table__row_header-3">
            <CellCol type="header" colNum="1">Итого</CellCol>
            <CellCol type="header" colNum="2">
                <Subcol type="data" colNum="1">0</Subcol>
                <Subcol type="data" colNum="2">0</Subcol>
                <Subcol type="data" colNum="3">0</Subcol>
                <Subcol type="data" colNum="4">0</Subcol>
                <Subcol type="data" colNum="5">0</Subcol>
                <Subcol type="data" colNum="6">0</Subcol>
            </CellCol>
            <CellCol type="header" colNum="3">
                <Subcol type="data" colNum="7">0</Subcol>
                <Subcol type="data" colNum="8">0</Subcol>
                <Subcol type="data" colNum="9">0</Subcol>
            </CellCol>
            <CellCol type="header" colNum="4">
                <Subcol type="data" colNum="10">0</Subcol>
                <Subcol type="data" colNum="11">0</Subcol>
                <Subcol type="data" colNum="12">0</Subcol>
            </CellCol>
        </tr>
    );
}

export default RowHeader3;