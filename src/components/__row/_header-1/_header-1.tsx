import React from "react";
import "./_header-1.sass";

import Gear from '../../__gear';
import Ask from '../../__ask';
import { CellCol1, CellHeader } from '../../__cell';
import { CellCol2 } from '../../__cell';
import { CellCol3 } from '../../__cell';
import { CellCol4 } from '../../__cell';
import { CellContainer } from '../../__cell';
import { CellSubheader } from "../../__cell";

const RowHeader1 = () => {
    return(
        <tr className="table__row table__row_header-1">
            <CellCol1 />
            <CellCol2>
                Трафик
                <Gear />
                <Ask />
            </CellCol2>
            <CellCol3>
                <CellContainer>
                    <CellHeader srcImg='crm.png' text='Продажи' />
                    <CellSubheader srcImg='model_linear.png' text='Линейная модель' />
                </CellContainer>
                <Gear />
                <Ask />
            </CellCol3>
            <CellCol4>
                <CellContainer>
                    <CellHeader srcImg='composite.png' text='Цель с осн. GA'/>
                    <CellSubheader srcImg='composite (1).png' text='Составная цель' />
                </CellContainer>
                <Gear />
                <Ask />
            </CellCol4>
        </tr>
    );
}

export default RowHeader1;