import React from "react";
import "./_header-1.sass";

import Gear from '../../__gear';
import Ask from '../../__ask';
import { CellHeader } from '../../__cell';
import { CellCol } from '../../__cell';
import { CellContainer } from '../../__cell';
import { CellSubheader } from "../../__cell";

const RowHeader1 = () => {
    return(
        <tr className="table__row table__row_header-1">
            <CellCol type="header" colNum="1">Источники трафика</CellCol>
            <CellCol type="header" colNum="2">
                Трафик
                <Gear />
                <Ask />
            </CellCol>
            <CellCol type="header" colNum="3">
                <CellContainer>
                    <CellHeader srcImg='crm.png' text='Продажи' />
                    <CellSubheader srcImg='model_linear.png' text='Линейная модель' />
                </CellContainer>
                <Gear />
                <Ask />
            </CellCol>
            <CellCol type="header" colNum="4">
                <CellContainer>
                    <CellHeader srcImg='composite.png' text='Цель с осн. GA'/>
                    <CellSubheader srcImg='composite (1).png' text='Составная цель' />
                </CellContainer>
                <Gear />
                <Ask />
            </CellCol>
        </tr>
    );
}

export default RowHeader1;