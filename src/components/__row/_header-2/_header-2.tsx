import React from "react";
import "./_header-2";

import { CellCol1, CellCol2, CellCol3, CellCol4, Subcol } from "../../__cell";

const RowHeader2 = () => {
    return(
        <tr className="table__row table__row_header-2">
            <CellCol1>Название</CellCol1>
            <CellCol2>
                <Subcol type="header" colNum="1">
                    <div>Показы</div>
                    <span className="material-icons">help_outline</span>
                </Subcol>
                <Subcol type="header" colNum="2">Клики</Subcol>
                <Subcol type="header" colNum="3">
                    <div>Сеансы</div>
                    <span className="material-icons">
                        arrow_downward
                    </span>
                </Subcol>
                <Subcol type="header" colNum="4">
                    <div>CTR, %</div>
                    <span className="material-icons">help_outline</span>
                </Subcol>
                <Subcol type="header" colNum="5">Цена клика</Subcol>
                <Subcol type="header" colNum="6">
                    <div>Затраты</div>
                    <div>
                        <a>Настроить
                            <span className="material-icons">help_outline</span>
                        </a>
                    </div>
                </Subcol>
            </CellCol2>
            <CellCol3>
                <Subcol type="header" colNum="7">Кол-во</Subcol>
                <Subcol type="header" colNum="8">CPA</Subcol>
                <Subcol type="header" colNum="9">Выручка</Subcol>
            </CellCol3>
            <CellCol4>
                <Subcol type="header" colNum="10">Кол-во</Subcol>
                <Subcol type="header" colNum="11">CPA</Subcol>
                <Subcol type="header" colNum="12">CR, %</Subcol>
            </CellCol4>
        </tr>
    );
}

export default RowHeader2;